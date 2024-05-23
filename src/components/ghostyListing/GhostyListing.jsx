import React, { useState, useEffect } from "react";
import PageHeader from "../dashboard/pageHeader/pageHeader";
import "./ghosty.css";
import { IoIosArrowDown } from "react-icons/io";

import CustomModal from "../Modal";
import { toast } from "react-toastify";
import { Button } from "flowbite-react";
import { images } from "../../images";
function SwapSection() {
  const [show, setShow] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [walletAddress, setWalletAddress] = useState("")
  const [selectedCuur, setSelectedCuur] = useState({
    "name": "BTC",
    "param": "BTC",
    "network": "BITCOIN",
    "img": "https://ghosty.cash/assets/tokens/BTC.png",
    "color": "#f6921a",
    "maintenance": false,
    "newToken": false,
    "isStable": false,
    "isNative": true
  });
  const [selectedConveter, setSelectedConveter] = useState({
    "name": "ETH",
    "param": "ETH",
    "network": "ETHEREUM",
    "img": "https://ghosty.cash/assets/tokens/ETH.png",
    "color": "#3f6868",
    "maintenance": false,
    "newToken": false,
    "isStable": false,
    "isNative": true
  });
  const [selectMode, setSelectMode] = useState("base");
  const [amount, setAmount] = useState(1);
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(false);
  const [priceToUSD, setPriceToUSD] = useState({});
  const getCurrencies = async () => {
    try {
      const getData = await fetch("https://api.ghosty.cash/v1/swap/currency");
      const data = await getData.json();
      if (data?.code === 200) {
        setCurrencies(data);
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const getPrices = async () => {
    setLoading(true);
    try {
      const getData = await fetch(
        `https://api.ghosty.cash/v1/swap/price?amount_from=${amount}&currency_from=${selectedCuur?.param}&currency_to=${selectedConveter.param}`
      );
      const data = await getData.json();
      if (data?.code === 200) {
        setPrices(data);
      }
      if (data?.code === 404) {
        toast.error(data?.message);
      }
      if (data?.code === 422) {
        toast.error(data?.message);

      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const getPriceToUSD = async () => {
    try {
      const getData = await fetch(
        `https://api.ghosty.cash/v1/swap/usd?amount_from=${amount}&currency_from=${selectedCuur?.param}`
      );
      const data = await getData.json();
      if (data?.code === 200) {
        setPriceToUSD(data);
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };


  const createSwap = async () => {
    const data = {
      "currency_from": selectedCuur?.name,
      "amount_from": amount,
      "currency_to": selectedConveter?.name,
      "address_to": walletAddress,
      "receiver_memo_tag": "",
      "is_anonym": true
    }
    try {
      const responseData = await fetch("https://api.ghosty.cash/v1/swap/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'x-ghostycash-api-key': process.env.REACT_APP_GHOSTY_API_KEY
        },
        body: JSON.stringify(data)
      });
      const result = await responseData.json();
      if (result?.order_info) {
        toast.success(result?.message, {
          theme: "colored"
        })
      }
    } catch (err) {
      toast.error(err)
      console.log(err)
    }
  }

  useEffect(() => {
    getPriceToUSD();
  }, [selectedCuur, amount]);

  useEffect(() => {
    getPrices();
  }, [amount, selectedCuur?.param, selectedConveter?.param]);

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <>



      <div className="right_dashboard">
        <div className="right_container">
          <PageHeader page_title={"Swap Section"} badge={" GM, Noderr"} profilePic={images.FakePic} />
          <div className="flex justify-center items-center">

          <iframe
            id="ghosty-widget"
            src="https://www.ghosty.cash/swap-widget/8f05b28846419027"
            style={{
              minWidth: "360px",
              minHeight: "660px",
              borderRadius: "15px",
              overflow: "hidden",
              display:'flex',
            }}
          />
          </div>
        </div>
      </div>

      {/* <div className="swap__card">
            <div className="step step1">
              <div className="step__header">
                <h3>Step 1</h3> */}
      {/* <button className="reset ">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgBjVPLUcNADH1aG66YDpwOQgfOxJnJkRJCBUAFmA7oICmBIwPM2B1AB3EH+Iw/QgrrHWcJid/BXkt60r63a+AAEuYYI2D8QMr8EHbYpjVnp8ihT0SHzGYupEHiCkOUL0TlsJ4cUQsNchwDoQgJN30TRxadUdDhQwKxfjNQEqMcEKfyjCRfBgYzfxc7o+Ytb9OWWd5rP5d2nGtO327youGVLKrXkJ61KGhw1zI2xTl9eg0iMfNL143BJWmxuqvbeQtoghNYyM5EUizkiR5VZTXG2vlP8TdP5zU/Le3Zd4x7NlgVveahlqV3QdKGN5rTiX6OejPE6dw6XUnUaRXHY7YnoNJqgyuZWjly3yBssZZIgmPoMHs/o2KPvNek+Z1kvbgmg1tLfBRihrHQO77zY8RdP4j//rIfJOin00WPJ8kAAAAASUVORK5CYII=" />
                </button> */}
      {/* </div>
              <div className="swapbox__amount__box">
                <div className="amount__input ">
                  <p>Send Amount</p>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={0.0}
                    className="border-2 border-[#3F6868] w-full h-10 rounded-md px-4 focus:outline-none focus:border-[#3F6868]"
                  />
                </div>
                <button
                  className="currency__div relative "
                  onClick={() => {
                    setSelectMode("base");
                    setShow(true);
                  }}
                >
                  <img src={selectedCuur?.img} className="coin__img" alt />
                  <h4>{selectedCuur?.network}</h4>
                  <p style={{ color: `${selectedCuur.color}` }}>
                    {selectedCuur?.name}
                  </p>
                  <IoIosArrowDown size={40} color="#1A7ADB" />
                  <span className="text-[#72caca] text-xs absolute bottom-2 right-4">
                    ~ {priceToUSD?.data} USD
                  </span>
                </button>
              </div> */}
      {/* <button className="false switch_arrow">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgBpZW7bhNBFIb/2XWBJSxtxKWgSCIjUVBgCxcgBQkrtiUaLsoLGOiB0ENkB3oc8QDY4QmgBAHrFing8ACOQ5EChGxEg/A6h/kXdhOv95I4xzry7p6Zb47m/HNGIcKKIlYKeABBUXtef7LcgEJHBB3TgP1GqVbUfBUGNEdoKIUq3/vtNn592YQzGLjx47kcMtrTc/Oc3FMGanELuFb5I/nKSLaKP/qSrdUldfKEIGWG+qmlJVnobkl5JFIWeRYL1YP6C92eHDubjQQGnQkQrhN6MQG9JjLPTA8LDcK1L4+BS440GZgG6vm5xpoLZ5J+tvzAwLRQOuvB2pSG0iDXcBzc5sPX52s4ilE1Oy/XoVVSpbIMmLhKSf3e3p4YnLKsSFBY7PvrV/yzUg7yBsVPnQZt9t59XP64ofU6NxHLPl5xY0G4zxGC9Qqe+PfbN7266F/h7fsxOKHZRyvYWW8hOM9/V7AMRBi3ZqNSGoN70O6TVXSfriLWqN/zzVZktSlBnjBWnOqhZqPGZgoXvZN409ANpX36+g0kZT78OUjMNHMh/29LgE2Uh1LkKjOLi4k6TdLypU8dKekd8FfiS+GDfaQDcubOXXcbSiLVPbAjt9z9q9engqZ1Ha7oOoxl68P1UZwG7kHZGYtenwha+X8zokrSB2hIrIsP1W0XcaaLWSOc8uICnLy/cJTf7PJDYU1cae3K57BMVRicA/X1VPOup1AT2GKi+S7iWlJIMMpRDOTULmbcCQq9oQnbVqoXN+8vObfqptQLpTkAAAAASUVORK5CYII="
                  alt
                />
              </button> */}
      {/* <div className="swapbox__amount__box">
                <div className="amount__input">
                  <p>Est. Output</p>
                  <input
                    value={prices?.data?.amount_to}
                    disabled
                    type="text"
                    placeholder={0.0}
                  />
                </div>
                <button
                  className="currency__div"
                  onClick={() => {
                    setSelectMode("converted");
                    setShow(true);
                  }}
                >
                  <img src={selectedConveter?.img} className="coin__img" alt />
                  <h4>{selectedConveter?.name}</h4>
                  <p
                    style={{
                      color: `${selectedConveter?.color}`,
                      textAlign: "end",
                    }}
                  >
                    {selectedConveter?.network}
                  </p>
                  <IoIosArrowDown size={40} color="#1A7ADB" />
                </button>
              </div>
            </div>
            <div className="step step2">
              <div className="step__header mt-4">
                <h3>Step 2</h3>
              </div>
              <div className="step2__box ">
                <div className="tip-box2">
                  RECEIVER WALLET{" "}
                  <div className="tooltip__wrapper"> */}
      {/* <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD5SURBVHgBpZO9zgFBFIbfmcyX+CobpcaiU1ErKBTuws8duAJcgTvgFlanXIXaVjqsVsEmChLLmJlCglnLeJLJ/OV955yTOQSCOud2yDECR1FsLcRB4DCCzoQQnyjxFfOPhI8EjKJEzxcMDMQSS0ZNahfOYU5Ao26Ovo9Fu4Xt2MG7KCIN/iwLLJlEHNoUDp6HMAjUOmHb+BfjK4NZPqtSkKQbTRSGo0gDpjssL9dqljWIg+JHtCms+n2cNj52U1ftU5UqEpkMct3eiwHT2+IufD7TRbCH2U9UUOHswRSOMamKZmKGzRTKZnJFS8qFKKXzqVC87EqN1N4A9a9Z4ii47SEAAAAASUVORK5CYII="
                      alt
                      style={{ width: 16, objectFit: "contain" }}
                    /> */}
      {/* <div
                      className="tooltip"
                      style={{ bottom: "calc(100% + 10px)" }}
                    >
                      Please input your wallet, where you want to receive your
                      funds
                    </div>
                  </div>
                </div>
                <input
                  id="receiver-address"
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder="Receiving wallet address in POLYGON format"
                />
              </div>
            </div> */}
      {/* <Button
              className="cta m-auto"
              isProcessing={loading}
              disabled={loading}
              onClick={createSwap}
            >
              SWAP NOW
            </Button> */}
      {/* <div className="step">
              <div className="flex flex-col justify-between gap-1 px-4 py-3 bg-primaryLight w-full rounded-[15px] text-white">
                <p>MORE INFORMATION</p>
                <div className="flex justify-between text-xs text-whiteGrey">
                  <p>Min. Received</p>
                  <p>1.209 WBTC</p>
                </div>
                <div className="flex justify-between text-xs text-whiteGrey">
                  <p>Avg. TXO Time</p>
                  <p>11 minutes</p>
                </div>
              </div>
            </div> */}
      {/* </div>
        </div>
      </div> */}
      {/* <CustomModal
        show={show}
        onClose={() => setShow(false)}
        currencies={currencies}
        setSelectedCuur={setSelectedCuur}
        setSelectedConveter={setSelectedConveter}
        selectMode={selectMode}
      /> */}
    </>
  );
}

export default SwapSection;

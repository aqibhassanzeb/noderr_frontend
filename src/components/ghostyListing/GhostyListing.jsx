import React from "react";
import PageHeader from "../dashboard/pageHeader/pageHeader";
import "./ghosty.css";
function SwapSection() {
  return (
    <>
      <div className="right_dashboard">
        <div className="right_container">
          <PageHeader page_title={"Swap Section"} badge={" GM, Noderr"} />
          <div className="swap__card">
            <div className="step step1">
              <div className="step__header">
                <h3>Step 1</h3>
                {/* <button className="reset "><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgBjVPLUcNADH1aG66YDpwOQgfOxJnJkRJCBUAFmA7oICmBIwPM2B1AB3EH+Iw/QgrrHWcJid/BXkt60r63a+AAEuYYI2D8QMr8EHbYpjVnp8ihT0SHzGYupEHiCkOUL0TlsJ4cUQsNchwDoQgJN30TRxadUdDhQwKxfjNQEqMcEKfyjCRfBgYzfxc7o+Ytb9OWWd5rP5d2nGtO327youGVLKrXkJ61KGhw1zI2xTl9eg0iMfNL143BJWmxuqvbeQtoghNYyM5EUizkiR5VZTXG2vlP8TdP5zU/Le3Zd4x7NlgVveahlqV3QdKGN5rTiX6OejPE6dw6XUnUaRXHY7YnoNJqgyuZWjly3yBssZZIgmPoMHs/o2KPvNek+Z1kvbgmg1tLfBRihrHQO77zY8RdP4j//rIfJOin00WPJ8kAAAAASUVORK5CYII=" className alt /></button> */}
              </div>
              <div className="swapbox__amount__box ">
                <div className="amount__input ">
                  <p>Send Amount</p>
                  <input type="number" placeholder={0.0}
                    className="border-2 border-[#3F6868] w-full h-10 rounded-md px-4 focus:outline-none focus:border-[#3F6868]"
                  />
                </div>
                <select className="currency__div">
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="USDT">USDT</option>
                  <option value="WBTC">WBTC</option>
                </select>

                {/* <button className="currency__div relative ">
                  <img src="/assets/tokens/BTC.png" className="coin__img" alt />
                  <h4>BTC</h4>
                  <p style={{ color: "rgb(246, 146, 26)" }}>BITCOIN</p>
                  <img
                    src="data:image/png;base64,
                iVBORw0KGgoAAAANSUhEUgAAADYAAAAkCAYAAADCW8lNAAAACXBIWXMAACxLAAAsSwGlPZapAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh
                +PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw
                +H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/
                phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib
                +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"
                    className="arrow__down"
                    alt
                  />
                  <span className="text-[#3F6868] text-xs absolute bottom-2 right-4">
                    ~124,948 USD
                  </span>
                </button> */}
              </div>
              {/* <button className="false switch_arrow">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJDSURBVHgBpZW7bhNBFIb/2XWBJSxtxKWgSCIjUVBgCxcgBQkrtiUaLsoLGOiB0ENkB3oc8QDY4QmgBAHrFing8ACOQ5EChGxEg/A6h/kXdhOv95I4xzry7p6Zb47m/HNGIcKKIlYKeABBUXtef7LcgEJHBB3TgP1GqVbUfBUGNEdoKIUq3/vtNn592YQzGLjx47kcMtrTc/Oc3FMGanELuFb5I/nKSLaKP/qSrdUldfKEIGWG+qmlJVnobkl5JFIWeRYL1YP6C92eHDubjQQGnQkQrhN6MQG9JjLPTA8LDcK1L4+BS440GZgG6vm5xpoLZ5J+tvzAwLRQOuvB2pSG0iDXcBzc5sPX52s4ilE1Oy/XoVVSpbIMmLhKSf3e3p4YnLKsSFBY7PvrV/yzUg7yBsVPnQZt9t59XP64ofU6NxHLPl5xY0G4zxGC9Qqe+PfbN7266F/h7fsxOKHZRyvYWW8hOM9/V7AMRBi3ZqNSGoN70O6TVXSfriLWqN/zzVZktSlBnjBWnOqhZqPGZgoXvZN409ANpX36+g0kZT78OUjMNHMh/29LgE2Uh1LkKjOLi4k6TdLypU8dKekd8FfiS+GDfaQDcubOXXcbSiLVPbAjt9z9q9engqZ1Ha7oOoxl68P1UZwG7kHZGYtenwha+X8zokrSB2hIrIsP1W0XcaaLWSOc8uICnLy/cJTf7PJDYU1cae3K57BMVRicA/X1VPOup1AT2GKi+S7iWlJIMMpRDOTULmbcCQq9oQnbVqoXN+8vObfqptQLpTkAAAAASUVORK5CYII="
                  alt
                />
              </button> */}
              <div className="swapbox__amount__box">
                <div className="amount__input">
                  <p>Est. Output</p>
                  <input
                    disabled
                    type="text"
                    placeholder={0.0}
                  />
                </div>
                <select className="currency__div">
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="USDT">USDT</option>
                  <option value="WBTC">WBTC</option>
                </select>

                {/* <button className="currency__div ">
                  <img
                    src="/assets/tokens/WBTC.png"
                    className="coin__img"
                    alt
                  />
                  <h4>WBTC</h4>
                  <p style={{ color: "rgb(143, 91, 231)", textAlign: "end" }}>
                    POLYGON
                  </p>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAkCAYAAADCW8lNAAAACXBIWXMAACxLAAAsSwGlPZapAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/
                    qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm
                    +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"
                    className="arrow__down"
                    alt
                  />
                </button> */}
              </div>
            </div>
            <div className="step step2">
              <div className="step__header mt-4">
                <h3>Step 2</h3>
              </div>
              <div className="step2__box ">
                <div className="tip-box2">
                  RECEIVER WALLET{" "}
                  <div className="tooltip__wrapper">
                    {/* <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD5SURBVHgBpZO9zgFBFIbfmcyX+CobpcaiU1ErKBTuws8duAJcgTvgFlanXIXaVjqsVsEmChLLmJlCglnLeJLJ/OV955yTOQSCOud2yDECR1FsLcRB4DCCzoQQnyjxFfOPhI8EjKJEzxcMDMQSS0ZNahfOYU5Ao26Ovo9Fu4Xt2MG7KCIN/iwLLJlEHNoUDp6HMAjUOmHb+BfjK4NZPqtSkKQbTRSGo0gDpjssL9dqljWIg+JHtCms+n2cNj52U1ftU5UqEpkMct3eiwHT2+IufD7TRbCH2U9UUOHswRSOMamKZmKGzRTKZnJFS8qFKKXzqVC87EqN1N4A9a9Z4ii47SEAAAAASUVORK5CYII="
                      alt
                      style={{ width: 16, objectFit: "contain" }}
                    /> */}
                    <div
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
                  placeholder="Receiving wallet address in POLYGON format"
                />
              </div>
            </div>
            <button className="cta m-auto">
              SWAP NOW
            </button>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default SwapSection;

import React, { useState } from "react";
import "../components/index.css";
import { GrFormClose } from "react-icons/gr";

function CustomModal({
  selectMode,
  show,
  onClose,
  currencies,
  setSelectedCuur,
  setSelectedConveter,
}) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleItemClick = (item) => {
    if (selectMode === "base") {
      setSelectedCuur(item);
    } else if (selectMode === "converted") {
      setSelectedConveter(item);
    }
    onClose();
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-10 items-center mt-24 md:mt-20 lg:mt-0">
          <div className="flex items-center justify-center min-h-screen px-4 ">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-black opacity-75"></div>
            </div>

            <div className="bg-gray-900 relative h-[520px] rounded-xl overflow-hidden shadow-xl max-w-2xl w-full ">
              <div className="p-6 ">
                <div className=" flex justify-between my-2 ">
                  <p className="text-xl font-bold flex h-[50px] mb-0 items-center text-white">
                    Search Currency or Chain
                  </p>

                  <span className="" onClick={onClose}>
                    <GrFormClose className="bg-white text-black rounded-lg w-6 h-6" />
                  </span>
                </div>
                <div className="mt-4">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full text-black border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>

              <div className="Modalscroll mt-6   max-h-80 overflow-y-auto">
                {currencies?.data
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-black hover:text-black"
                      onClick={() => handleItemClick(item)}
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.img}
                          className="w-6 h-6"
                          alt={item.name}
                        />
                        <p className="text-sm font-medium text-white ">
                          {item.name}
                        </p>
                      </div>
                      <p style={{ color: item.color }} className="text-sm">
                        {item.network}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomModal;

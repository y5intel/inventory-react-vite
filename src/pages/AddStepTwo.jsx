import { Navbar } from "../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import Image from "../assets/image/image 7.png";

export const AddStepTwo = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <>
      <Navbar sidebarActive={true} />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px]">
        <div className="py-[14px] px-[26px]">
          <p className="text-[#000] text-lg font-normal leading-[22.324px] items-center">
            {path === "add" ? "Add" : "Replace"} Consumable
          </p>
        </div>
        <div className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px]">
          <div className="flex flex-col justify-between px-[12px] pt-[23px] ml-[16px]">
            <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
              Step 2 - Price Details
            </p>
            <p className="text-[#686868] custom-font-sm items-center">
              We can help you be more profitable if you tell us what the item
              cost you
            </p>
          </div>
          <div className="px-[54px] h-[208px] grid grid-cols-2 gap-[29px] pt-[13px]">
            <div className="w-full border border-[#B6B6B6] flex flex-col">
              <div className="flex justify-center">
                <img src={Image} alt="" className="w-[118px]" />
              </div>

              <div className="flex flex-row px-2 gap-[16px]">
                <div className="flex flex-col text-[#616161] w-[78px] custom-font-sm font-bold">
                  <p>Name</p>
                  <p className="pt-[11px]">Description</p>
                  <p className="pt-[4px]">SKU</p>
                  <p className="pt-[4px]">Yields</p>
                </div>
                <div className="flex flex-col w-[177px] text-[#616161] custom-font-sm font-bold">
                  <p className="font-bold ">UniNet iColor 560 Toner</p>
                  <p className="font-normal pt-[10px]">Cyan EXT Yield</p>
                  <p className="font-normal pt-[4px]">UNICT560</p>
                  <p className="font-normal pt-[4px] truncate">
                    7,000 pages @ 5% coverage (A4 size)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[10px]">
              <div className="flex justify-center">
                <select
                  id="currency"
                  className="bg-gray-50 border border-[#A2A2A2] text-[black] text-base block w-[215px] h-[35px] pl-[20px]"
                >
                  <option>
                    $
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD
                  </option>
                  <option value="US">
                    €
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EUR
                  </option>
                  <option value="CA">
                    ¥
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JPY
                  </option>
                  <option value="FR">
                    £
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GBP
                  </option>
                  <option value="DE">
                    ¥
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNY
                  </option>
                  <option value="DE">
                    kr &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEK
                  </option>
                  <option value="DE">
                    ₩ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KRW
                  </option>
                  <option value="DE">
                    kr &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NOK
                  </option>
                  <option value="DE">
                    NZ$ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NZD
                  </option>
                  <option value="DE">
                    ₹
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INR
                  </option>
                </select>
              </div>
              <div className="flex justify-center">
                <input
                  type="text"
                  className="block w-[215px] h-[35px] py-1.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none caret-[#573CFA]"
                  placeholder="Price"
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="text"
                  className="block w-[215px] h-[35px] py-1.5 px-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none caret-[#573CFA]"
                  placeholder="Tax %"
                />
              </div>
              <div className="flex justify-center">
                <div className="flex-col">
                  <label className="text-[#573CFA] custom-font-sm">
                    Total Price
                  </label>
                  <input
                    type="text"
                    className="block w-[215px] h-[35px] py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none caret-[#573CFA] border border-[#573CFA]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-[24px] mt-[30px]">
            <Link to={`/overview/${path === "add" ? "add" : "replace"}/step3`}>
              <button className="rounded-[25px] w-[110px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

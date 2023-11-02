import { Navbar } from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Image from "../assets/image/image 7.png";

export const AddStepThree = () => {
  return (
    <>
      <Navbar sidebarActive={true} />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px]">
        <div className="py-[14px] px-[26px]">
          <p className="text-[#000] text-lg font-normal leading-[22.324px] items-center">
            Add Consumable
          </p>
        </div>
        <div className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px]">
          <div className="flex flex-col justify-between px-[12px] pt-[23px] ml-[16px]">
            <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
              Step 3 - Price of Purchase
            </p>
            <p className="text-[#686868] custom-font-sm items-center">
              We can help you be more profitable if you tell us what the item
              cost you
            </p>
          </div>
          <div className="px-[48px] h-[208px] flex flex-row gap-[39px] pt-[13px]">
            <div className="border border-[#B6B6B6] flex flex-col w-[287px] h-[208px]">
              <div className="flex justify-center">
                <img src={Image} alt="" />
              </div>

              <div className="flex flex-row px-2 gap-[16px] pt-2">
                <div className="flex flex-col text-[#616161] w-[78px] font-bold custom-font-sm">
                  <p>Name</p>
                  <p className="pt-[11px]">Description</p>
                  <p className="pt-[4px]">SKU</p>
                  <p className="pt-[4px]">Yields</p>
                </div>
                <div className="flex flex-col w-[177px] text-[#616161] font-bold custom-font-sm">
                  <p className="font-bold ">UniNet iColor 560 Toner</p>
                  <p className="font-normal pt-[10px]">Cyan EXT Yield</p>
                  <p className="font-normal pt-[4px]">UNICT560</p>
                  <p className="font-normal pt-[4px] truncate">
                    7,000 pages @ 5% coverage (A4 size)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <label className="text-[#333] custom-font-sm font-medium my-2">
                Date of Purchase
              </label>
              <div className="mb-[15px]">
                <select className="bg-gray-50 border border-[#A2A2A2] text-[black] text-base block w-[341px] h-[35px] pl-[15px]">
                  <option>Choose Date</option>
                  <option>Within the last week</option>
                  <option>Within the last month</option>
                  <option>Within the last quarter</option>
                  <option>Within the last year</option>
                  <option>More than a year ago</option>
                  <option>I don't remember</option>
                </select>
              </div>
              <div>
                <select className="bg-gray-50 border border-[#A2A2A2] text-[black] text-base block w-[341px] h-[35px] pl-[15px]">
                  <option>Choose Place</option>
                  <option>UNINET Store</option>
                  <option>UNINET Website</option>
                  <option>USCutter Store</option>
                  <option>USCutter Website</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-[32px] mt-[30px]">
            <Link to="/overview/add/step2">
              <button className="rounded-[25px] w-[110px] h-[50px] bg-[#A2A2A2] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]">
                Back
              </button>
            </Link>
            <Link to="/overview/add/step4">
              <button className="rounded-[25px] w-[110px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

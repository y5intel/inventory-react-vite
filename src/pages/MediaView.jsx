import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import MediaItem from "../assets/image/Media_item.png";

export const MediaView = () => {
  const [activeScreenParam, setActiveScreenParam] = useState("Overview");
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <>
      <Navbar sidebarActive={sidebarActive} />
      <div className="flex flex-row w-[800px]">
        <Sidebar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
          setActiveScreenParam={setActiveScreenParam}
          className="flex"
        />
        <div className="flex flex-1">
          <div className="bg-[#D9D9D9] w-full h-[428px]">
            <div className="flex flex-row justify-between py-[13px] px-[17px]">
              <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
                {activeScreenParam}
              </p>
              <Link to="/overview/add">
                <button className="rounded-full bg-[#573CFA] px-4 py-[11px] w-[250px]">
                  <p className=" text-[16px] font-bold text-[#FFF] leading-[19.844px]">
                    Add Consumable
                  </p>
                </button>
              </Link>
            </div>
            <div className="bg-[#FFF] h-[354px] rounded-[32px] ml-[10px] mr-[13px] flex flex-col relative">
              <div className="absolute top-2 right-2">
                <Link to="/">
                  <button className="bg-transparent border-0 text-black float-right">
                    <span className="text-white text-xl font-bold opacity-7 h-10 w-10 block bg-[#F96262] py-1 rounded-full">
                      x
                    </span>
                  </button>
                </Link>
              </div>
              <div className="flex flex-col pt-2 px-6 mx-[10px]">
                <div className="flex flex-row gap-2">
                  <div className="flex justify-center border border-[#B6B6B6] w-[134px] h-[134px]">
                    <img src={MediaItem} alt="" />
                  </div>
                  <div className="flex flex-col flex-1 pt-4">
                    <p className="text-[#000] text-base font-bold leading-[19.844px] tracking-[0.88px]">
                      UniNet iColor Standard 560 2 Step Laser/LED Heat Transfer
                      Paper
                    </p>
                    <div className="grid grid-cols-2 items-center pt-1">
                      <p className="text-[#000] text-sm font-normal leading-[17.363px] tracking-[0.77px]">
                        8.27in x 11.69in (A4)
                      </p>
                      <p className="text-[#000] text-xs font-normal leading-[14.883px] tracking-[0.66px]">
                        SKU: UNICHTSTD560
                      </p>
                    </div>
                    <p className="text-[#000] text-base font-bold leading-[19.844px] tracking-[0.88px] mt-2">
                      Balance
                    </p>
                    <div className="balance-bar cursor-pointer relative">
                      <div className="balance" style={{ width: "10%" }}></div>
                      <div className="absolute top-1 left-[45%]">
                        <p className="text-[#fff] text-xs font-bold leading-[14.883px] tracking-[0.66px]">
                          10 pages
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto text-[#FF0202] text-[13px] font-normal leading-[16.123px] tracking-[0.88px]">
                  Consumable is low. Use code{" "}
                  <span className="font-bold">UninetSAVE10</span> to save 10%
                  off on your next purchase
                </div>
                <div className="mx-auto mt-[20px] text-[#000] text-base font-bold leading-[19.844px] tracking-[0.88px]">
                  Details
                </div>
                <div className="w-full bg-[#686868] h-[2px]"></div>
                <div className="flex flex-row pt-1 gap-6">
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-8 pl-[21px]">
                      <div className="flex flex-col text-black text-xs font-bold leading-[14.883px] tracking-[0.66px] gap-2">
                        <p>Quantity</p>
                        <p>Print Compatibility</p>
                      </div>
                      <div className="flex flex-col text-black text-xs font-normal leading-[14.883px] tracking-[0.66px] gap-2">
                        <p>100 pack</p>
                        <p>Toner</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pl-9">
                    <div className="flex flex-row gap-2">
                      <div className="flex flex-col text-black text-xs font-bold leading-[14.883px] tracking-[0.66px] gap-2">
                        <p>Date of Purchase</p>
                        <p>Place of Purchase</p>
                        <p>Price</p>
                      </div>
                      <div className="flex flex-col text-black text-xs font-normal leading-[14.883px] tracking-[0.66px] gap-2">
                        <p>08/01/2023 - 08/07/2023</p>
                        <p>UNINET Website</p>
                        <p>$28.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-[270px] flex flex-row gap-2 pt-6">
                  <button className="rounded-[25px] w-[126px] h-[39px] bg-[#B7B7B7] px-auto py-auto gap-[10px] text-white text-sm font-normal leading-[14.883px] tracking-[0.66px]">
                    Usage Report
                  </button>
                  <button className="rounded-[25px] w-[64px] h-[39px] bg-[#B7B7B7] px-auto py-auto gap-[10px] text-white text-sm font-normal leading-[14.883px] tracking-[0.66px]">
                    Help
                  </button>
                  <Link to="/overview/remove">
                    <button className="rounded-[25px] w-[148px] h-[39px] bg-[#573CFA] px-auto py-auto gap-[10px] text-white text-sm font-normal leading-[14.883px] tracking-[0.66px]">
                      Remove/Replace
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import TonerItem1 from "../assets/image/Toner_item1.png";
import TonerItem2 from "../assets/image/Toner_item2.png";
import TonerItem3 from "../assets/image/Toner_item3.png";
import TonerItem4 from "../assets/image/Toner_item4.png";
// import { Card } from "../components/card/Card";

export const Toner = ({ activeScreenParam }) => {
  const cardClass =
    "flex flex-col w-full h-[90px] border rounded-[21px] shadow-[0_4px_4px_0_rgba(0,0,0,0.39)] px-[21px] pt-2  gap-[6px]";
  const [isDescSelected, setIsDescSelected] = useState(true);

  const handleViewClick = () => {
    setIsDescSelected(!isDescSelected);
  };
  return (
    <>
      <div className="bg-[#D9D9D9] w-full h-[428px]">
        <div className="flex flex-row justify-between py-[13px] px-[17px]">
          <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
            {activeScreenParam}
          </p>
          <button className="rounded-full bg-[#573CFA] px-4 py-[11px] w-[250px] ">
            <Link to="/toner/add">
              <p className=" text-[16px] font-bold text-[#FFF] leading-[19.844px]">
                Add Consumable
              </p>
            </Link>
          </button>
        </div>
        <div className="bg-[#FFF] h-[354px] rounded-[32px] ml-[10px] mr-[13px] flex flex-col">
          <div className="flex flex-row justify-between pt-2 px-6">
            <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
              Toner Balance
            </p>
            <div className="flex flex-row justify-between w-[300px]">
              <button
                className="flex flex-row rounded-full bg-[#573CFA] px-4 py-[11px] gap-2"
                onClick={handleViewClick}
              >
                <p className=" text-[16px] font-normal text-[#FFF] leading-[19.844px]">
                  View:
                </p>
                <p className="text-[16px] font-bold text-[#FFF] leading-[19.844px]">
                  {isDescSelected ? "Description" : "Image"}
                </p>
              </button>
              <button className="rounded-full bg-[#573CFA] px-4 py-[11px]">
                <p className=" text-[16px] font-normal text-[#FFF] leading-[19.844px]">
                  Sort by
                </p>
              </button>
            </div>
          </div>
          <div className="mr-[10px] mb-[20px] pl-[29px] pr-[10px] pb-[10px] grid grid-cols-3 gap-[10px] mt-[11px] overflow-y-auto">
            <div className={`${cardClass} toner cursor-pointer`}>
              {isDescSelected ? (
                <div className="flex flex-col gap-[7px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                  <p className="truncate font-normal">UniNet iColor 560 T...</p>
                  <p className="truncate font-normal">Magenta EXT Yield</p>
                  <div className="flex flex-row justify-between">
                    <p className="font-bold uppercase">unict560</p>
                    <p className="font-bold uppercase">75%</p>
                  </div>
                </div>
              ) : (
                <>
                  <img src={TonerItem1} alt="" />
                </>
              )}
            </div>
            <div className={`${cardClass} toner cursor-pointer`}>
              {isDescSelected ? (
                <div className="flex flex-col gap-[7px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                  <p className="truncate font-normal">UniNet iColor 560 T...</p>
                  <p className="truncate font-normal">Cyan EXT Yield</p>
                  <div className="flex flex-row justify-between">
                    <p className="font-bold uppercase">unict560</p>
                    <p className="font-bold uppercase">75%</p>
                  </div>
                </div>
              ) : (
                <>
                  <img src={TonerItem2} alt="" />
                </>
              )}
            </div>
            <div className={`${cardClass} toner cursor-pointer`}>
              {isDescSelected ? (
                <div className="flex flex-col gap-[7px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                  <p className="truncate font-normal">UniNet iColor 560 T...</p>
                  <p className="truncate font-normal">Black EXT Yield</p>
                  <div className="flex flex-row justify-between">
                    <p className="font-bold uppercase">unict560</p>
                    <p className="font-bold uppercase">75%</p>
                  </div>
                </div>
              ) : (
                <>
                  <img src={TonerItem3} alt="" />
                </>
              )}
            </div>
            <div className={`${cardClass} toner cursor-pointer`}>
              {isDescSelected ? (
                <div className="flex flex-col gap-[7px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                  <p className="truncate font-normal">UniNet iColor 560 T...</p>
                  <p className="truncate font-normal">Yellow EXT Yield</p>
                  <div className="flex flex-row justify-between">
                    <p className="font-bold uppercase">unict560</p>
                    <p className="font-bold uppercase">75%</p>
                  </div>
                </div>
              ) : (
                <>
                  <img src={TonerItem4} alt="" />
                </>
              )}
            </div>
            {/* <Card className="toner" isDescSelected={isDescSelected} />
            <Card className="media" isDescSelected={isDescSelected} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

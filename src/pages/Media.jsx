import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/card/Card";

export const Media = ({ activeScreenParam }) => {
  const [isDescSelected, setIsDescSelected] = useState(true);

  const handleClick = () => {
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
            <Link to="/overview/add">
              <p className=" text-[16px] font-bold text-[#FFF] leading-[19.844px]">
                Add Consumable
              </p>
            </Link>
          </button>
        </div>
        <div className="bg-[#FFF] h-[278px] rounded-[32px] ml-[10px] mr-[13px]">
          <div className="flex flex-row justify-between pt-2 px-6">
            <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
              Media Balance
            </p>
            <div className="flex flex-row justify-between w-[300px]">
              <button
                className="flex flex-row rounded-full bg-[#573CFA] px-4 py-[11px] gap-2"
                onClick={handleClick}
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
          <div className="px-[29px] grid grid-cols-3 gap-[10px] pt-[11px]">
            <Card className="border-[#FFA74B]" />
            <Card className="border-[#FFA74B]" />
            <Card className="border-[#FFA74B]" />
            <Card className="border-[#FFA74B]" />
          </div>
        </div>
      </div>
    </>
  );
};

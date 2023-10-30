import { Navbar } from "../components/navbar/Navbar";
import { Carousel } from "../components/carousel/Carousel";
import { useState } from "react";

const ProgressBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="progress-bar" onClick={handleClick}>
      <div
        className="progress"
        style={!isClicked ? { width: "10%" } : { width: "100%" }}
      ></div>
    </div>
  );
};

export const AddStepOne = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px]">
        <div className="py-[14px] px-[26px]">
          <p className="text-[#000] text-lg font-normal leading-[22.324px] items-center">
            Add Consumable
          </p>
        </div>
        <div className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px]">
          <div className="flex flex-row justify-between px-[12px] py-[11px]">
            <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center ml-[16px]">
              Step 1 - Insert 12-word phrase
            </p>
          </div>
          <Carousel />
          <ProgressBar />
          <div className="flex justify-center mt-2">
            <p className="text-[#6c6c6c] text-xs font-normal leading-[14.833px] tracking-[0.66px] items-center mx-auto">
              Verifying Code
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

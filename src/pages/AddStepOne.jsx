import { Navbar } from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { Carousel } from "../components/carousel/Carousel";
import { useState } from "react";

export const AddStepOne = () => {
  const [isProgressBarClicked, setIsProgressBarClicked] = useState(false);

  const handleProgressBarClick = () => {
    setIsProgressBarClicked(true);
  };

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
          <div className="flex flex-row justify-between px-[12px] py-[23px]">
            <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center ml-[16px]">
              Step 1 - Insert 12-word phrase
            </p>
          </div>
          <Carousel _visibility={!isProgressBarClicked} />
          <div
            className="progress-bar cursor-pointer"
            onClick={handleProgressBarClick}
          >
            {!isProgressBarClicked ? (
              <div className="progress" style={{ width: "10%" }}></div>
            ) : (
              <Link to="/overview/add/step2">
                <div className="progress" style={{ width: "100%" }}></div>
              </Link>
            )}
          </div>
          {isProgressBarClicked ? (
            <div className="flex justify-center mt-2">
              <p className="text-[#6c6c6c] text-xs font-normal leading-[14.833px] tracking-[0.66px] items-center mx-auto">
                Item loaded successfully!
              </p>
            </div>
          ) : (
            <div className="flex justify-center mt-2">
              <p className="text-[#6c6c6c] text-xs font-normal leading-[14.833px] tracking-[0.66px] items-center mx-auto">
                Verifying Code
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

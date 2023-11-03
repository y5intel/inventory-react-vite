import { Navbar } from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { Carousel } from "../components/carousel/Carousel";
import { useState, useEffect } from "react";

export const AddStepOne = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [isVerifySuccess, setIsVerifySuccess] = useState(false);

  const handleClick = () => {
    window.location.href = `/overview/${
      path === "add" ? "add" : "replace"
    }/step2`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVerifySuccess(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

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
          <div className="flex flex-row justify-between px-[12px] py-[23px]">
            <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center ml-[16px]">
              Step 1 - Insert 12-word phrase
            </p>
          </div>
          <Carousel _visibility={!isVerifySuccess} />

          {isVerifySuccess ? (
            <>
              <div
                className="progress-bar cursor-pointer"
                onClick={handleClick}
              >
                <div className="progress"></div>
              </div>
              <div className="flex justify-center mt-2">
                <p className="text-[#6c6c6c] custom-font-sm items-center mx-auto">
                  Item loaded successfully!
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              <div className="flex justify-center mt-2">
                <p className="text-[#6c6c6c] custom-font-sm items-center mx-auto">
                  Verifying Code
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

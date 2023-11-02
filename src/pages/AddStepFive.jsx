import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import Image from "../assets/image/image 7.png";
import Arrow from "../assets/image/Arrow_left_long.png";
import Token from "../assets/image/recycle token.png";
import { AddStepSix } from "./AddStepSix";

export const AddStepFive = () => {
  const [showModal, setShowModal] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNextClick = () => {
    setIsComplete(true);
    setIsSuccess(true);
  };

  const handleCloseClick = () => {
    setIsComplete(true);
    setIsSuccess(false);
    setShowModal(false);
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
        {!isComplete ? (
          <div
            className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px]"
            style={showModal ? { opacity: "10%" } : { opacity: "100%" }}
          >
            <div className="flex flex-col justify-between px-[12px] pt-[13px] ml-[16px]">
              <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
                Step 5 - Duplicate
              </p>
              <p className="text-[#000] custom-font-sm items-center px-[91px] mt-[20px]">
                <span className="font-bold">There's a duplicate: </span>The old
                consumable item on the left is going to be replaced by the item
                on the right.
              </p>
              <div className="flex justify-center">
                <div className="w-[567px] h-[185px] flex flex-row mt-2 gap-2">
                  <div className="w-[248px] border border-[#B6B6B6] flex flex-col">
                    <div className="flex justify-center">
                      <div className="flex justify-center border border-[#B6B6B6] w-[100px] h-[100px] mt-[7px]">
                        <img src={Image} alt="" />
                      </div>
                    </div>
                    <div className="flex flex-row px-2 py-1 gap-[10px]">
                      <div className="flex flex-col text-[#000] w-[80px] font-bold custom-font-sm gap-[10px]">
                        <p>Name</p>
                        <p>Description</p>
                        <p>SKU</p>
                      </div>
                      <div className="flex flex-col w-[150px] text-[#000] custom-font-sm gap-[10px]">
                        <p className="truncate">UniNet iColor 560 Toner</p>
                        <p>Cyan EXT Yield</p>
                        <p>UNICT560</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[51px] flex items-center">
                    <img src={Arrow} alt="" />
                  </div>
                  <div className="w-[248px] border border-[#B6B6B6] flex flex-col">
                    <div className="flex justify-center">
                      <div className="flex justify-center border border-[#B6B6B6] w-[100px] h-[100px] mt-[7px]">
                        <img src={Image} alt="" />
                      </div>
                    </div>
                    <div className="flex flex-row px-2 py-1 gap-[10px]">
                      <div className="flex flex-col text-[#000] w-[80px] font-bold custom-font-sm gap-[10px]">
                        <p>Name</p>
                        <p>Description</p>
                        <p>SKU</p>
                      </div>
                      <div className="flex flex-col w-[150px] text-[#000] custom-font-sm gap-[10px]">
                        <p className="truncate">UniNet iColor 560 Toner</p>
                        <p>Cyan EXT Yield</p>
                        <p>UNICT560</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mx-[24px] mt-[20px]">
              <Link to="/overview/add/step4">
                <button className="rounded-[25px] w-[132px] h-[50px] bg-[#A2A2A2] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]">
                  Back
                </button>
              </Link>

              <button
                className="rounded-[25px] w-[132px] h-[50px] bg-[#4FC38E] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]"
                onClick={() => setShowModal(true)}
              >
                Recycle Offer
              </button>
              <button
                className="rounded-[25px] w-[132px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]"
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <AddStepSix isSuccess={isSuccess} />
        )}
        {showModal && (
          <div className="fixed top-[200px] left-[200px] ">
            <div className="w-[363px]">
              <div className="border border-[#B6B6B6] rounded-[15px] shadow-lg relative flex flex-col w-full bg-white">
                <div className="p-5">
                  <p className="text-black text-base font-bold leading-[19.844px]">
                    Recycle and get:
                  </p>
                </div>
                <div className="absolute top-[-20px] right-[15px]">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={handleCloseClick}
                  >
                    <span className="text-white text-xl font-bold opacity-7 h-10 w-10 block bg-[#F96262] py-1 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="pb-5 flex flex-row justify-center items-center">
                  <img src={Token} alt="" />
                  <p className="text-black text-base font-bold leading-[19.844px]">
                    20 points
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

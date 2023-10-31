import { Navbar } from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Image from "../assets/image/image 7.png";
import Arrow from "../assets/image/Arrow_left_long.png";
import { useState } from "react";

export const AddStepFive = () => {
  const [isRecycleClicked, setIsRecycleClicked] = useState(false);

  const handleRecycleClick = () => {
    setIsRecycleClicked(true);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px]">
        <div className="py-[14px] px-[26px]">
          <p className="text-[#000] text-lg font-normal leading-[22.324px] items-center">
            Add Consumable
          </p>
        </div>

        <div className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px] relative">
          <div className="flex flex-col justify-between px-[12px] pt-[13px] ml-[16px]">
            <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
              Step 5 - Duplicate
            </p>
            <p className="text-[#000] text-xs font-normal leading-[14.833px] tracking-[0.66px] items-center px-[91px] mt-[20px]">
              <span className="font-bold">There's a duplicate: </span>The old
              consumable item on the left is going to be replaced by the item on
              the right.
            </p>
            <div className="flex justify-center">
              <div className="w-[567px] h-[185px] flex flex-row mt-2 gap-2">
                <div className="w-[248px] border border-[#B6B6B6] flex flex-col">
                  <div className="flex justify-center">
                    <div className="flex justify-center border border-[#B6B6B6] w-[100px] h-[100px] mt-[7px]">
                      <img src={Image} />
                    </div>
                  </div>
                  <div className="flex flex-row px-2 py-1 gap-[10px]">
                    <div className="flex flex-col text-[#616161] w-[80px] text-xs font-bold leading-[14.833px] tracking-[0.66px] gap-[10px]">
                      <p>Name</p>
                      <p>Description</p>
                      <p>SKU</p>
                    </div>
                    <div className="flex flex-col w-[150px] text-[#616161] text-xs font-bold leading-[14.833px] tracking-[0.66px] gap-[10px]">
                      <p className="font-bold truncate">
                        UniNet iColor 560 Toner
                      </p>
                      <p className="font-normal">Cyan EXT Yield</p>
                      <p className="font-normal">UNICT560</p>
                    </div>
                  </div>
                </div>
                <div className="w-[51px] flex items-center">
                  <img src={Arrow} />
                </div>
                <div className="w-[248px] border border-[#B6B6B6] flex flex-col">
                  <div className="flex justify-center">
                    <div className="flex justify-center border border-[#B6B6B6] w-[100px] h-[100px] mt-[7px]">
                      <img src={Image} />
                    </div>
                  </div>
                  <div className="flex flex-row px-2 py-1 gap-[10px]">
                    <div className="flex flex-col text-[#616161] w-[80px] text-xs font-bold leading-[14.833px] tracking-[0.66px] gap-[10px]">
                      <p>Name</p>
                      <p>Description</p>
                      <p>SKU</p>
                    </div>
                    <div className="flex flex-col w-[150px] text-[#616161] text-xs font-bold leading-[14.833px] tracking-[0.66px] gap-[10px]">
                      <p className="font-bold truncate">
                        UniNet iColor 560 Toner
                      </p>
                      <p className="font-normal">Cyan EXT Yield</p>
                      <p className="font-normal">UNICT560</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-[24px] mt-[10px]">
            <Link to="/overview/add/step4">
              <button className="rounded-[25px] w-[132px] h-[50px] bg-[#A2A2A2] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]">
                Back
              </button>
            </Link>

            <button
              className="rounded-[25px] w-[132px] h-[50px] bg-[#4FC38E] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]"
              onClick={handleRecycleClick}
            >
              Recycle Offer
            </button>
            <Link to="/overview/add/step6">
              <button className="rounded-[25px] w-[132px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

import { Navbar } from "../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import Image from "../assets/image/image 7.png";
import { useState } from "react";

export const AddStepFour = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [isReplaceConfirmed, setIsReplaceConfirmed] = useState(false);

  return (
    <>
      <Navbar sidebarActive={true} />
      <div
        className={`bg-[#D9D9D9] w-[800px] h-[428px] ${
          isReplaceConfirmed ? "flex justify-center items-center" : ""
        }`}
      >
        {!isReplaceConfirmed ? (
          <>
            <div className="py-[14px] px-[26px]">
              <p className="text-[#000] text-lg font-normal leading-[22.324px] items-center">
                {path === "add" ? "Add" : "Replace"} Consumable
              </p>
            </div>
            <div className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px]">
              <div className="flex flex-col justify-between px-[12px] pt-[13px] ml-[16px]">
                <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
                  Step 4 - Review Details
                </p>
                <div className="w-[647px] h-[249px] rounded-[32px] mx-[18px] mr-[21px] mt-[10px] px-[23px] border border-black grid grid-cols-2">
                  <div className="flex flex-col custom-font-sm gap-[4px] mt-[50px]">
                    <div className="grid grid-cols-2">
                      <p className="font-bold">Name</p>
                      <p className="font-normal">
                        UNINET iColor 560 Toner Cartridge
                      </p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-bold">Description</p>
                      <p className="font-normal">Cyan EXT Yield</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-bold">SKU</p>
                      <p className="font-normal">UNICT560</p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-bold">Image URL</p>
                      <p className="font-normal truncate">
                        uscutter.com/uninet-icolor-560-toner-cartridge/
                      </p>
                    </div>
                    <div className="grid grid-cols-2">
                      <p className="font-bold">Number of Yields</p>
                    </div>
                    <div className="grid grid-cols-2 w-[260px] mx-auto custom-font-sm gap-[4px] font-normal pl-[30px] pt-2">
                      <p>Pages</p>
                      <p>7,000</p>
                      <p>Coverage</p>
                      <p>5%</p>
                      <p>Sheet Size</p>
                      <p>A4 Paper</p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full py-[15px]">
                    <div className="flex justify-center">
                      <div className="flex justify-center border border-[#B6B6B6] w-[139px] h-[139px]">
                        <img src={Image} alt="" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 pt-[14px] custom-font-sm gap-[4px] ">
                      <p className="font-bold">Total Price</p>
                      <p className="font-normal">$100.00</p>
                      <p className="font-bold">Date of Purchase</p>
                      <p className="font-normal truncate">
                        09/01/2023-09/07/2023
                      </p>
                      <p className="font-bold">Place of Purchase</p>
                      <p className="font-normal">UNINET Store</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mx-[24px] mt-[10px]">
                <Link
                  to={`/overview/${path === "add" ? "add" : "replace"}/step3`}
                >
                  <button className="rounded-[25px] w-[110px] h-[50px] bg-[#A2A2A2] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]">
                    Back
                  </button>
                </Link>

                {path === "add" ? (
                  <Link to={`/overview/add/step5`}>
                    <button className="rounded-[25px] w-[176px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]">
                      Add Consumable
                    </button>
                  </Link>
                ) : (
                  <button
                    className="rounded-[25px] w-[201px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]"
                    onClick={() => setIsReplaceConfirmed(true)}
                  >
                    Replace Consumable
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white w-[489px] h-[119px] py-4 rounded-[30px]">
            <div className="flex flex-col justify-center items-center gap-[17px]">
              <p>Consumable removed!</p>
              <Link to="/overview/recycle">
                <button className="w-[110px] h-[50px] rounded-[25px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black custom-font-sm">
                  Ok
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

import { Navbar } from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

export const AddStepSix = () => {
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
          <div className="flex flex-col justify-between px-[12px] pt-[16px] ml-[16px]">
            <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
              Done!
            </p>
          </div>
          <div className="flex justify-center items-center h-[257px]">
            <div className="flex justify-center items-center bg-[#3FB780] rounded-full text-xs font-normal leading-[14.883px] tracking-[0.66px] w-[300px] h-[25px] text-white">
              Consumable added successfully!
            </div>
          </div>
          <div className="flex justify-center mx-[24px]">
            <Link to="/overview/">
              <button className="rounded-[25px] w-[132px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs font-bold leading-[14.883px] tracking-[0.66px]">
                Done
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

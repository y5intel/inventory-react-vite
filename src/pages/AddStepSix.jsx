import { Link } from "react-router-dom";

export const AddStepSix = (props) => {
  return (
    <>
      <div className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px] relative">
        <div className="flex flex-col justify-between px-[12px] pt-[16px] ml-[16px]">
          <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
            Done!
          </p>
        </div>
        {props.isSuccess === true ? (
          <div className="flex justify-center items-center h-[257px]">
            <div className="flex justify-center items-center bg-[#3FB780] rounded-full text-xs font-normal leading-[14.883px] tracking-[0.66px] w-[276px] h-[25px] text-white">
              Consumable added successfully!
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-[257px]">
            <div className="flex justify-center items-center bg-[#F96262] rounded-full text-xs font-normal leading-[14.883px] tracking-[0.66px] w-[537px] h-[40px] text-white px-[35px]">
              Attention: The transaction is currently in progress. Feel free to
              continue using the printer as we make another attempt to add it in
              the background.
            </div>
          </div>
        )}
        <div className="flex justify-center mx-[24px]">
          <Link to="/overview/">
            <button className="rounded-[25px] w-[102px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]">
              Done
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

// import { useState } from "react";

export const Card = () => {
  return (
    <div className="flex flex-col w-[205px] h-[90px] border border-[#3FB780] rounded-[21px] shadow-[0_4px_4px_0_rgba(0,0,0,0.39)] px-[21px] pt-2  gap-[6px]">
      <p className="truncate text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
        UniNet iColor 560 T...
      </p>
      <p className="truncate text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
        Magenta EXT Yield
      </p>
      <div className="flex flex-row justify-between">
        <p className="text-[#000] text-[14px] font-bold leading-[17.363px] tracking-[0.77px] uppercase">
          unict560
        </p>
        <p className="text-[#000] text-[14px] font-bold leading-[17.363px] tracking-[0.77px] uppercase">
          75%
        </p>
      </div>
    </div>
  );
};

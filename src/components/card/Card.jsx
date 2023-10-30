// import { useState } from "react";
import clsx from "clsx";

export const Card = ({ className }) => {
  const CardClass = clsx(
    "flex flex-col w-full h-[90px] border rounded-[21px] shadow-[0_4px_4px_0_rgba(0,0,0,0.39)] px-[21px] pt-2  gap-[6px]",
    className
  );
  return (
    <div className={CardClass}>
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

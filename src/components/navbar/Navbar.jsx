// import { useState } from "react";
// import Link from "next/link";
// import { Icon } from "@iconify/react";
// import { useRouter } from "next/router";
import Wifi from "../../assets/image/Wifi.png";
import Back from "../../assets/image/Back.png";

export const Navbar = () => {
  return (
    <nav className=" flex flex-row w-[800px] h-[50px]">
      <div className="flex w-[96px] h-[50px] back-button-gradient items-center justify-center">
        <img src={Back} alt="back" />
      </div>
      <div className="flex flex-row w-full h-full bg-[#FFF] py-[5px] justify-between px-[10px] items-center">
        <p className="text-[#000] text-[18px] font-semibold not-italic uppercase leading-[22.324px] tracking-[0.99px]">
          inventory
        </p>
        <div className="flex flex-row gap-[10px] items-center">
          <img src={Wifi} alt="wifi" className="w-[29px] h-[27px]" />
          <p className="text-[#000] text-[14px] font-normal not-italic uppercase leading-[17.363px]">
            12:00pm
          </p>
          <p className="text-[#000] text-[14px] font-normal not-italic uppercase leading-[17.363px]">
            Sun
          </p>
          <p className="text-[#000] text-[14px] font-normal not-italic uppercase leading-[17.363px]">
            Mar 17 '23
          </p>
        </div>
      </div>
    </nav>
  );
};

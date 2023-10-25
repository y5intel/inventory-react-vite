// import { useState } from "react";
// import Link from "next/link";
// import { Icon } from "@iconify/react";
// import { useRouter } from "next/router";
import Wifi from "../../assets/image/Wifi.png";
import Back from "../../assets/image/Back.png";

export const Navbar = () => {
  return (
    <nav className=" flex flex-row w-[800px] h-[50px]">
      <div className="w-[96px] h-[50px]">
        <img src={Back} alt="wifi" />
      </div>
      <div className="flex flex-row w-full h-full bg-[#FFF] py-[5px] justify-between px-[10px]">
        <div className="flex">
          <p className="flex text-[#000] text-[18px] font-semibold not-italic uppercase leading-[22.324px] tracking-[0.99px] items-center">
            inventory
          </p>
        </div>
        <div className="flex flex-row gap-[10px] items-center">
          <img src={Wifi} alt="wifi" className="w-[29px] h-[27px]" />
          <p className="flex text-[#000] text-[14px] font-normal not-italic uppercase leading-[17.363px]  items-center">
            12:00pm
          </p>
          <p className="flex text-[#000] text-[14px] font-normal not-italic uppercase leading-[17.363px]  items-center">
            Sun
          </p>
          <p className="flex text-[#000] text-[14px] font-normal not-italic uppercase leading-[17.363px]  items-center">
            Mar 17 '23
          </p>
        </div>
      </div>
    </nav>
  );
};

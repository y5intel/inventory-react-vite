import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { useState } from "react";

export const RemoveVerify = () => {
  const [isConfirmChecked, setIsConfirmChecked] = useState(false);

  return (
    <>
      <Navbar sidebarActive={true} />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px] flex justify-center items-center">
        {!isConfirmChecked ? (
          <div className="bg-[#FFF] w-[489px] h-[139px] rounded-[32px] px-[26px] py-[16px]">
            <p className="custom-font-md">
              Removing this consumable will also remove the offer tokens. Do you
              want to continue?
            </p>
            <div className="flex fled-row justify-between px-[72px] pt-[17px]">
              <button className="w-[110px] h-[50px] rounded-[25px] bg-[#A2A2A2] px-auto py-auto gap-[10px] text-black custom-font-sm">
                <Link to="/overview/remove">No</Link>
              </button>
              <button
                className="w-[110px] h-[50px] rounded-[25px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black custom-font-sm"
                onClick={() => setIsConfirmChecked(true)}
              >
                Yes
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-[#FFF] w-[489px] h-[119px] rounded-[32px] px-[26px] py-[16px]">
            <div className="flex flex-col justify-center items-center gap-[17px]">
              <p>Consumable removed!</p>
              <button className="w-[110px] h-[50px] rounded-[25px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black custom-font-sm">
                <Link to="/">Yes</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

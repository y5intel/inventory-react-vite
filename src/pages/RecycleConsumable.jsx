import { Navbar } from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Token from "../assets/image/recycle token.png";

export const RecycleConsumable = () => {
  return (
    <>
      <Navbar sidebarActive={true} />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px] py-[21px] px-[24px]">
        <div className="bg-[#FFF] h-[387px] rounded-[32px] p-[18px]">
          <div className="flex flex-col">
            <div className="px-[58px] pt-[50px]">
              <p className="custom-font-md font-bold">
                Earn exclusive rewards by recycling your old consumable!{" "}
              </p>
              <p className="text-[#7A7B7B] text-[13px] font-normal leading-[16.123px]">
                When you recycle this specific product, you'll receive a token
                that can be redeemed for premium software perks and benefits.
              </p>
            </div>
            <div className="w-[363px] mx-auto mt-[26px]">
              <div className="border border-[#B6B6B6] rounded-[15px] shadow-lg flex flex-col w-full bg-white">
                <div className="p-2.5">
                  <p className="text-black text-base font-bold leading-[19.844px]">
                    Recycle and get:
                  </p>
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

          <div className="flex flex-row pt-[41px] justify-between">
            <Link to="/">
              <button className="w-[110px] h-[50px] rounded-[25px] bg-[#A2A2A2] px-auto py-auto text-black custom-font-sm">
                No, thanks!
              </button>
            </Link>
            <Link to="/overview/replace/print">
              <button className="w-[221px] h-[50px] rounded-[25px] bg-[#FFA74B] px-auto py-auto text-black custom-font-sm">
                Recycle old consumable
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

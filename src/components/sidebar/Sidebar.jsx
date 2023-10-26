import Dashboard from "../../assets/image/Dashboard.png";
import DashboardActive from "../../assets/image/Dashboard_active.png";
import Toner from "../../assets/image/Toner.png";
import TonerActive from "../../assets/image/Toner_active.png";
import Media from "../../assets/image/Media.png";
import MediaActive from "../../assets/image/Media_active.png";
import Bubble from "../../assets/image/Bubble.png";
import Home from "../../assets/image/Home.png";
import { useState } from "react";

export const Sidebar = ({ setActiveScreenIdx }) => {
  const [active, setActive] = useState(false);

  const handleActiveSlide = (index) => {
    setActiveScreenIdx(index);
    setActive(!active);
    setTimeout(() => {
      setActive(false);
    }, 5000);
  };

  return (
    <div className="sidebar">
      <div className="flex bg-[#E3E3E3]">
        <div
          className={`flex flex-col mx-2 my-[11px] h-[356px] px-[5px] py-2 rounded-3xl bg-[#FFF] border ${
            active ? "w-[180px]" : "w-[70px]"
          } border-[#45454580] justify-between duration-500`}
        >
          <div className="flex flex-col gap-[20px] mx-[4px]">
            <div
              onClick={() => handleActiveSlide(1)}
              className={`flex rounded-[19px] justify-center items-center p-[6px] border border-[#573CFA] ${
                active && "dashboard-button-active"
              } gap-[10px]`}
            >
              {!active ? (
                <img src={Dashboard} alt="dashboard" className="" />
              ) : (
                <div className="flex flex-row gap-[18px] items-center">
                  <img
                    src={DashboardActive}
                    alt="dashboard-active"
                    className="w-[35px] h-[35px]"
                  />
                  <div className="flex flex-col delay-500">
                    <p
                      className={`${
                        active ? "text-[#FFF]" : "text-[#573CFA]"
                      } uppercase text-base font-bold leading-[19.844px] tracking-[0.88px] `}
                    >
                      OverView
                    </p>
                    <p
                      className={`${
                        active ? "text-[#FFF]" : "text-[#573CFA]"
                      } text-xs font-normal leading-[14.883px] tracking-[0.66px]`}
                    >
                      Inventory
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => handleActiveSlide(2)}
              className={`flex rounded-[19px] justify-center items-center h-[50px] border border-[#4FC38E] ${
                active && "toner-button-active"
              } gap-[10px]`}
            >
              {!active ? (
                <img src={Toner} alt="Toner" className="" />
              ) : (
                <div className="flex flex-row gap-[18px]">
                  <img src={TonerActive} alt="Toner-active" />
                  <div className="flex flex-col delay-500">
                    <p
                      className={`${
                        active ? "text-[#FFF]" : "text-[#4FC38E]"
                      } text-sm font-medium leading-[17.363px] tracking-[0.77px] `}
                    >
                      Toner
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => handleActiveSlide(3)}
              className={`flex rounded-[19px] justify-center items-center h-[50px] border border-[#FFA74B] ${
                active && "media-button-active"
              } gap-[10px]`}
            >
              {!active ? (
                <img src={Media} alt="Media" className="" />
              ) : (
                <div className="flex flex-row gap-[18px]">
                  <img src={MediaActive} alt="Media-active" />
                  <div className="flex flex-col delay-500">
                    <p
                      className={`${
                        active ? "text-[#FFF]" : "text-[#FFA74B]"
                      } text-sm font-medium leading-[17.363px] tracking-[0.77px] `}
                    >
                      Toner
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex mx-[4px]">
            <div className="flex w-[50px] h-[50px] justify-center items-center border border-[#A2A2A2] rounded-[19px] sidebar-item">
              <img src={Bubble} alt="Bubble" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[86px] h-[50px] home-button-gradient items-center justify-center sidebar-item">
        <img src={Home} alt="home" />
      </div>
    </div>
  );
};

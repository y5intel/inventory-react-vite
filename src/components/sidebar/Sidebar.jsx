import Dashboard from "../../assets/image/Dashboard.png";
import DashboardSelected from "../../assets/image/Dashboard_selected.png";
import Toner from "../../assets/image/Toner.png";
import TonerSelected from "../../assets/image/Toner_selected.png";
import Media from "../../assets/image/Media.png";
import MediaSelected from "../../assets/image/Media_selected.png";
import Token from "../../assets/image/Bubble.png";
import Home from "../../assets/image/Home.png";
import { useEffect, useState } from "react";

export const Sidebar = ({
  setActiveScreenParam,
  sidebarActive,
  setSidebarActive,
}) => {
  const [isSelected, setIsSelected] = useState({
    Overview: true,
    Toner: false,
    Media: false,
    Token: false,
  });

  const handleClicked = (param) => {
    setActiveScreenParam(param);

    setIsSelected({
      ...Object.keys(isSelected).reduce((acc, curr) => {
        acc[curr] = curr === param;
        return acc;
      }, {}),
    });

    if (isSelected[param]) {
      setSidebarActive(!sidebarActive);
    } else {
      setSidebarActive(true);
    }
  };

  useEffect(() => {
    let timer;
    if (sidebarActive) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSidebarActive(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [sidebarActive, isSelected]);

  return (
    <div className="sidebar">
      <div className="flex bg-[#E3E3E3]">
        <div
          className={`flex flex-col mx-2 my-[11px] h-[356px] px-[5px] py-2 rounded-3xl bg-[#FFF] border ${
            sidebarActive ? "w-[180px]" : "w-[70px]"
          } border-[#45454580] justify-between duration-500`}
        >
          <div className="flex flex-col gap-[20px] mx-[4px]">
            <div
              onClick={() => handleClicked("Overview")}
              className={`flex rounded-[19px] p-[6px] border border-[#573CFA] cursor-pointer px-auto ${
                isSelected.Overview && "dashboard-button-selected border-none"
              } gap-[10px]`}
            >
              <div className="flex flex-row gap-[18px] items-center">
                {!isSelected.Overview ? (
                  <img src={Dashboard} alt="dashboard" className="" />
                ) : (
                  <img
                    src={DashboardSelected}
                    alt="dashboard-select"
                    className="w-[35px] h-[35px]"
                  />
                )}
                {sidebarActive && (
                  <div className="flex flex-col">
                    <p
                      className={`${
                        isSelected.Overview ? "text-[#FFF]" : "text-[#573CFA]"
                      } uppercase text-base font-bold leading-[19.844px] tracking-[0.88px] `}
                    >
                      OverView
                    </p>
                    <p
                      className={`${
                        isSelected.Overview ? "text-[#FFF]" : "text-[#573CFA]"
                      } text-xs font-normal leading-[14.883px] tracking-[0.66px]`}
                    >
                      Inventory
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div
              onClick={() => handleClicked("Toner")}
              className={`flex rounded-[19px] p-[8px] h-[50px] border border-[#4FC38E] cursor-pointer ${
                isSelected.Toner && "toner-button-selected border-none"
              } gap-[10px]`}
            >
              <div className="flex flex-row gap-[18px] items-center">
                {!isSelected.Toner ? (
                  <img src={Toner} alt="Toner" className="" />
                ) : (
                  <img src={TonerSelected} alt="Toner-select" />
                )}
                {sidebarActive && (
                  <p
                    className={`${
                      isSelected.Toner ? "text-[#FFF]" : "text-[#4FC38E]"
                    } text-sm font-medium leading-[17.363px] tracking-[0.77px] `}
                  >
                    Toner
                  </p>
                )}
              </div>
            </div>
            <div
              onClick={() => handleClicked("Media")}
              className={`flex rounded-[19px] p-[11px] h-[50px] border border-[#FFA74B] cursor-pointer ${
                isSelected.Media && "media-button-selected border-none"
              } gap-[10px]`}
            >
              <div className="flex flex-row gap-[21px] items-center">
                {!isSelected.Media ? (
                  <img src={Media} alt="Media" className="" />
                ) : (
                  <img src={MediaSelected} alt="Media-select" />
                )}
                {sidebarActive && (
                  <p
                    className={`${
                      isSelected.Media ? "text-[#FFF]" : "text-[#FFA74B]"
                    } text-sm font-medium leading-[17.363px] tracking-[0.77px] `}
                  >
                    Media
                  </p>
                )}
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClicked("Token")}
            className={`flex rounded-[19px] p-[13px] h-[50px] mx-[4px] border border-[#A2A2A2] cursor-pointer ${
              isSelected.Token && "token-button-selected border-none"
            } gap-[10px]`}
          >
            <div className="flex flex-row gap-[18px] items-center">
              <img src={Token} alt="Token" className="" />
              {sidebarActive && (
                <p className="text-[#000] text-sm font-medium leading-[17.363px] tracking-[0.77px]">
                  TokenOffers
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[50px] home-button-gradient justify-center items-center gap-[10px] cursor-pointer">
        <img src={Home} alt="home" />
        {sidebarActive && (
          <p className="text-[#fff] text-lg font-normal leading-[22.324px]">
            HOME
          </p>
        )}
      </div>
    </div>
  );
};

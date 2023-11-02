import { useState } from "react";
// import { Card } from "../components/card/Card";
import { Link } from "react-router-dom";
import TonerItem1 from "../assets/image/Toner_item1.png";
import TonerItem2 from "../assets/image/Toner_item2.png";
import TonerItem3 from "../assets/image/Toner_item3.png";
import TonerItem4 from "../assets/image/Toner_item4.png";
import MediaItem1 from "../assets/image/Media_item1.png";
import MediaItem2 from "../assets/image/Media_item2.png";
import MediaItem3 from "../assets/image/Media_item3.png";
import MediaItem4 from "../assets/image/Media_item4.png";
import MediaItem5 from "../assets/image/Media_item5.png";
import MediaItem6 from "../assets/image/Media_item6.png";

export const Overview = ({ activeScreenParam }) => {
  const cardClass =
    "flex flex-col w-full h-[90px] border rounded-[21px] shadow-[0_4px_4px_0_rgba(0,0,0,0.39)] px-[21px] pt-2  gap-[6px]";
  const [isDescSelected, setIsDescSelected] = useState(true);

  const handleViewClick = () => {
    setIsDescSelected(!isDescSelected);
  };

  return (
    <>
      <div className="bg-[#D9D9D9] w-full h-[428px]">
        <div className="flex flex-row justify-between pt-[13px] pb-[7px] px-[17px]">
          <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
            {activeScreenParam}
          </p>
          <Link to="/overview/add">
            <button className="rounded-full bg-[#573CFA] px-4 py-[11px] w-[250px] h-[42px]">
              <p className=" text-[16px] font-bold text-[#FFF] leading-[19.844px]">
                Add Consumable
              </p>
            </button>
          </Link>
        </div>
        <div className="bg-[#FFF] h-[354px] rounded-[32px] ml-[10px] mr-[13px] flex flex-col">
          <div className="flex flex-row justify-between pt-2 pl-[22px] pr-[10px]">
            <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
              All Consumables
            </p>
            <div className="flex flex-row justify-between w-[300px]">
              <button
                className="flex flex-row rounded-full bg-[#573CFA] px-4 py-[11px] gap-2"
                onClick={handleViewClick}
              >
                <p className=" text-[16px] font-normal text-[#FFF] leading-[19.844px]">
                  View:
                </p>
                <p className="text-[16px] font-bold text-[#FFF] leading-[19.844px]">
                  {isDescSelected ? "Description" : "Image"}
                </p>
              </button>
              <button className="rounded-full bg-[#573CFA] px-4 py-[11px]">
                <p className=" text-[16px] font-normal text-[#FFF] leading-[19.844px]">
                  Sort by
                </p>
              </button>
            </div>
          </div>
          <div className="mr-[10px] mb-[20px] pl-[8px] pr-[10px] pb-[10px] grid grid-cols-3 gap-[10px] mt-[11px] overflow-y-auto">
            <Link to="/toner/view">
              <div className={`${cardClass} toner cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[7px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <p className="truncate font-normal">
                      UniNet iColor 560 T...
                    </p>
                    <p className="truncate font-normal">Magenta EXT Yield</p>
                    <div className="flex flex-row justify-between">
                      <p className="font-bold uppercase">unict560</p>
                      <p className="font-bold uppercase">75%</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={TonerItem1} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/toner/view">
              <div className={`${cardClass} toner cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[7px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <p className="truncate font-normal">
                      UniNet iColor 560 T...
                    </p>
                    <p className="truncate font-normal">Cyan EXT Yield</p>
                    <div className="flex flex-row justify-between">
                      <p className="font-bold uppercase">unict560</p>
                      <p className="font-bold uppercase">75%</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={TonerItem2} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/toner/view">
              <div className={`${cardClass} toner cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[7px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <p className="truncate font-normal">
                      UniNet iColor 560 T...
                    </p>
                    <p className="truncate font-normal">Black EXT Yield</p>
                    <div className="flex flex-row justify-between">
                      <p className="font-bold uppercase">unict560</p>
                      <p className="font-bold uppercase">75%</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={TonerItem3} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/toner/view">
              <div className={`${cardClass} toner cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[7px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <p className="truncate font-normal">
                      UniNet iColor 560 T...
                    </p>
                    <p className="truncate font-normal">Yellow EXT Yield</p>
                    <div className="flex flex-row justify-between">
                      <p className="font-bold uppercase">unict560</p>
                      <p className="font-bold uppercase">75%</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={TonerItem4} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/media/view">
              <div className={`${cardClass} media cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[12px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <div className="flex flex-col justify-center flex-shrink-0">
                      <p className="font-normal overflow-hidden text-ellipsis whitespace-break-spaces line-clamp-2">
                        FOREVER Temporary Tattoo Paper for Toner Printers (100
                        pack)
                      </p>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                      <p className="font-bold uppercase truncate">
                        AWTATPAPER100
                      </p>
                      <p className="font-bold">75pgs.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={MediaItem1} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/media/view">
              <div className={`${cardClass} media cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[12px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <div className="flex flex-col justify-center flex-shrink-0">
                      <p className="font-normal overflow-hidden text-ellipsis whitespace-break-spaces line-clamp-2">
                        FOREVER Multi-Trans Full Color Toner Transfer Paper for
                        Hard Surfaces
                      </p>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                      <p className="truncate font-bold uppercase">
                        FOREVMTRANS
                      </p>
                      <p className="font-bold">75pgs.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={MediaItem2} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/media/view">
              <div className={`${cardClass} media cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[12px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <div className="flex flex-col justify-center flex-shrink-0">
                      <p className="font-normal overflow-hidden text-ellipsis whitespace-break-spaces line-clamp-2">
                        UniNet iColor Standard 560 2 Step Laser/LED Heat
                        Transfer Paper
                      </p>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                      <p className="truncate font-bold uppercase">
                        UNICHTSTD560
                      </p>
                      <p className="font-bold">75pgs.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={MediaItem3} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/media/view">
              <div className={`${cardClass} media cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[12px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <div className="flex flex-col justify-center flex-shrink-0">
                      <p className="font-normal overflow-hidden text-ellipsis whitespace-break-spaces line-clamp-2">
                        Versa Sheen Digital White Toner Transfer Paper 8.5" x
                        11" or 11" x 17"
                      </p>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                      <p className="truncate font-bold uppercase">K-AWVSDTP</p>
                      <p className="font-bold">75pgs.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={MediaItem4} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/media/view">
              <div className={`${cardClass} media cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[12px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <div className="flex flex-col justify-center flex-shrink-0">
                      <p className="font-normal overflow-hidden text-ellipsis whitespace-break-spaces line-clamp-2">
                        Paropy CL Trim Free Dark - Laser Paper 8.5" x 11" 50
                        Pack
                      </p>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                      <p className="truncate font-bold uppercase">
                        JTPPCLTFD-8511
                      </p>
                      <p className="font-bold">75pgs.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={MediaItem5} alt="" />
                  </>
                )}
              </div>
            </Link>
            <Link to="/media/view">
              <div className={`${cardClass} media cursor-pointer`}>
                {isDescSelected ? (
                  <div className="flex flex-col gap-[12px] text-[#000] text-[14px] font-normal leading-[17.363px] tracking-[0.77px]">
                    <div className="flex flex-col justify-center flex-shrink-0">
                      <p className="font-normal overflow-hidden text-ellipsis whitespace-break-spaces line-clamp-2">
                        UniNet iColor AquaClear 1 Step Media
                      </p>
                    </div>
                    <div className="flex flex-row justify-between gap-4">
                      <p className="truncate font-bold uppercase">UNICHAC</p>
                      <p className="font-bold">75pgs.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={MediaItem6} alt="" />
                  </>
                )}
              </div>
            </Link>
            {/* <Card className="toner" isDescSelected={isDescSelected} />
            <Card className="media" isDescSelected={isDescSelected} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

import { Navbar } from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const ReplacePrint = () => {
  const [isConfirmPrint, setIsConfirmPrint] = useState(false);
  const [isPrintSuccess, setIsPrintSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPrintSuccess(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handlePrintClick = () => {
    setIsConfirmPrint(true);
  };

  return (
    <>
      <Navbar sidebarActive={true} />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px] ">
        <div className="py-[14px] px-[26px]">
          <p className="text-[#000] text-lg font-normal leading-[22.324px] items-center">
            Replace Consumable
          </p>
        </div>
        <div className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px]">
          {!isConfirmPrint ? (
            <>
              <div className="flex flex-col justify-between px-[26px] py-[16px]">
                <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
                  Print Shipping Label
                </p>
                <div className="px-[80px] pt-[20px] w-full">
                  <div className="flex flex-row gap-[15px]">
                    <div className="w-[297px] h-[225px] border border-black px-2">
                      <p className="text-sm font-normal leading-[17.363px] tracking-[0.77px]">
                        Shipping Label Preview
                      </p>
                    </div>
                    <div className="w-[237px] h-[150px] custom-font-sm">
                      <p>Instructions:</p>
                      <ol className="list-decimal pl-4">
                        <li>
                          Place the used consumables into the fresh consumable
                          containers.
                        </li>
                        <li>
                          Print and affix the shipping label onto the
                          containers.
                        </li>
                        <li>
                          Use your preferred courier service to send the
                          containers; shipping fee is on us!
                        </li>
                        <li>Await an email notification.</li>
                        <li>Redeem your Recycle Tokens.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mx-[31px]">
                <Link to={`/overview/recycle`}>
                  <button className="rounded-[25px] w-[110px] h-[50px] bg-[#A2A2A2] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]">
                    Back
                  </button>
                </Link>

                <button
                  className="rounded-[25px] w-[196px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]"
                  onClick={handlePrintClick}
                >
                  Print Shipping Label
                </button>
              </div>
            </>
          ) : (
            <>
              {!isPrintSuccess ? (
                <div className="flex flex-col px-[26px] py-[16px] justify-between h-[365px]">
                  <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
                    Print Shipping Label
                  </p>
                  <div>
                    <div className="progress-bar cursor-pointer">
                      <div className="progress"></div>
                    </div>
                    <div className="flex justify-center mt-2">
                      <p className="text-[#6c6c6c] custom-font-sm items-center mx-auto">
                        Printing...
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col px-[26px] py-[16px] justify-between h-[365px]">
                  <p className="text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center">
                    Print Shipping Label
                  </p>
                  <div className="flex justify-center">
                    <p className="custom-font-md font-normal">
                      Thank you for recycling your used consumables!
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Link to="/overview/recycle">
                      <button className="rounded-[25px] w-[110px] h-[50px] bg-[#A2A2A2] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]">
                        Back
                      </button>
                    </Link>
                    <Link to="/">
                      <button className="rounded-[25px] w-[110px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]">
                        Finish
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const AddConsumable = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  return (
    <>
      <Navbar sidebarActive={true} />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px]">
        <div className="py-[14px] px-[26px]">
          <p className="flex text-[#000] text-lg font-normal leading-[22.324px] items-center">
            {path === "add" ? "Add" : "Replace"} Consumable
          </p>
        </div>
        <div className="bg-[#FFF] h-[361px] rounded-[32px] ml-[18px] mr-[21px]">
          <div className="flex flex-row justify-between px-[12px] py-[11px]">
            <p className="flex text-[#000] text-base font-normal leading-[19.844px] tracking-[0.88px] items-center ml-[16px]">
              Step 1 - Insert 12-word phrase
            </p>
            <Link to="/">
              <button className="rounded-[25px] bg-[#F96262] px-[10px] py-[11px] gap-[10px] text-white text-lg leading-[22.324px] tracking-[0.99px]">
                Cancel
              </button>
            </Link>
          </div>
          <div className="mx-[38px] px-[16px] pt-[4px]">
            <div className="flex flex-col gap-[17px]">
              <div className="grid grid-cols-3 gap-[56px]">
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 1"
                />
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 2"
                />
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 3"
                />
              </div>
              <div className="grid grid-cols-3 gap-[56px]">
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 4"
                />
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 5"
                />
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 6"
                />
              </div>
              <div className="grid grid-cols-3 gap-[56px]">
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 7"
                />
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 8"
                />
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 9"
                />
              </div>
              <div className="grid grid-cols-3 gap-[56px]">
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 10"
                />
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 11"
                />
                <input
                  type="text"
                  className="block w-full py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center focus:outline-none"
                  placeholder="Word 12"
                />
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to={`/overview/${path === "add" ? "add" : "replace"}/step1`}
                >
                  <button className="rounded-[25px] w-[132px] h-[50px] bg-[#FFA74B] px-auto py-auto gap-[10px] text-black text-xs leading-[14.883px] tracking-[0.66px]">
                    Load Item
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";

export const RemoveConsumable = () => {
  return (
    <>
      <Navbar sidebarActive={true} />
      <div className="bg-[#D9D9D9] w-[800px] h-[428px]">
        <div className="py-[14px] px-[26px]">
          <p className="flex text-[#000] text-lg font-normal leading-[22.324px] items-center">
            Remove/Replace Consumable
          </p>
        </div>
        <div className="bg-[#FFF] h-[329px] rounded-[32px] ml-[18px] mr-[21px]">
          <div className="w-[452px] mx-auto pt-[56px] flex flex-col">
            <p className="text-black custom-font-sm">
              Do you want to remove or replace the consumable below?
            </p>
            <table className="text-[#616161] custom-font-sm mt-4">
              <tbody>
                <tr className="h-[39px]">
                  <td className="font-bold">Name</td>
                  <td className="font-bold">
                    UniNet iColor 560 Toner Cartridge
                  </td>
                </tr>
                <tr className="h-[39px]">
                  <td className="font-bold">Description</td>
                  <td>Cyan EXT Yield</td>
                </tr>
                <tr className="h-[39px]">
                  <td className="font-bold">SKU</td>
                  <td>UNICT560</td>
                </tr>
                <tr className="h-[39px]">
                  <td className="font-bold">Yields</td>
                  <td>7,000 pages @ 5% coverage (A4 size)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row px-[31px] pt-[20px] justify-between">
            <Link to="/">
              <button className="w-[110px] h-[50px] rounded-[25px] bg-[#A2A2A2] px-auto py-auto gap-[10px] text-black custom-font-sm">
                Back
              </button>
            </Link>
            <div className="flex gap-4">
              <button className="w-[121px] h-[50px] rounded-[25px] bg-[#573CFA] px-auto py-auto gap-[10px] text-white custom-font-sm">
                Replace
              </button>
              <Link to="/overview/remove/verify">
                <button className="w-[121px] h-[50px] rounded-[25px] bg-[#573CFA] px-auto py-auto gap-[10px] text-white custom-font-sm">
                  Remove
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

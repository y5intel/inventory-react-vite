import Dashboard from "../../assets/image/Dashboard.png";
import Toner from "../../assets/image/Toner.png";
import Media from "../../assets/image/Media.png";
import Bubble from "../../assets/image/Bubble.png";
import Home from "../../assets/image/Home.png";

export const Sidebar = () => {
  return (
    <div className="">
      <div className="flex bg-[#E3E3E3]">
        <div className="flex flex-col mx-2 my-[11px] h-[356px] px-[5px] py-2 rounded-3xl bg-[#FFF] border border-[#45454580] justify-between">
          <div className="flex flex-col gap-[20px] mx-[4px]">
            <button className="flex w-[50px] h-[50px] justify-center items-center border border-[#573CFA] rounded-[19px]">
              <img src={Dashboard} alt="dashboard" />
            </button>
            <button className="flex w-[50px] h-[50px] justify-center items-center border rounded-[19px]">
              <img src={Toner} alt="Toner" className="flex w-[50px] h-[50px]" />
            </button>
            <button className="flex w-[50px] h-[50px] justify-center items-center border border-[#FFA74B] rounded-[19px]">
              <img src={Media} alt="Media" />
            </button>
          </div>
          <div className="flex mx-[4px]">
            <button className="flex w-[50px] h-[50px] justify-center items-center border border-[#A2A2A2] rounded-[19px]">
              <img src={Bubble} alt="Bubble" />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <button className="">
          <img src={Home} alt="Home" className="" />
        </button>
      </div>
    </div>
  );
};

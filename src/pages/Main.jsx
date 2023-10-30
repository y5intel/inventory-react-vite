import { Overview } from "./Overview";
import { Toner } from "./Toner";
import { Media } from "./Media";

export const Main = ({ activeScreenParam }) => {
  return (
    <>
      {activeScreenParam === "Overview" && (
        <Overview activeScreenParam={activeScreenParam} />
      )}
      {activeScreenParam === "Toner" && (
        <Toner activeScreenParam={activeScreenParam} />
      )}
      {activeScreenParam === "Media" && (
        <Media activeScreenParam={activeScreenParam} />
      )}
    </>
  );
};

import { useAtom } from "jotai";
import { selectedResourceAtom } from "../atom/resources";
import { ActionIcon } from "./action-icon";

export const ResourceCanvasHeader = () => {
  const [selected, setSelected] = useAtom(selectedResourceAtom);

  return (
    <div
      className="flex flex-row h-[5vh] bg-[#ffffff]"
      style={{
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1);",
      }}
    >
      <div className="ml-2 my-auto text-center">
        {selected?.url ?? selected?.name ?? ""}
      </div>
      <div className="flex flex-grow flex-row-reverse my-auto">
        <ActionIcon
          size={30}
          icon="close_19"
          className="hover:cursor-pointer mr-2"
          onClick={() => {
            setSelected(null);
          }}
        />
      </div>
    </div>
  );
};

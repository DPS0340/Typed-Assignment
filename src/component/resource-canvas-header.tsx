import { useAtom } from "jotai";
import { selectedResourceAtom } from "../atom/resources";
import { ActionIcon } from "./action-icon";

export const ResourceCanvasHeader = () => {
  const [selected, setSelected] = useAtom(selectedResourceAtom);

  return (
    <div className="flex flex-row">
      <div className="w-[80%]">{selected?.url ?? ""}</div>
      <div
        className="hover:cursor-pointer"
        onClick={() => {
          setSelected(null);
        }}
      >
        <ActionIcon icon="close_19" />
      </div>
    </div>
  );
};

import { useAtom } from "jotai";
import { selectedResourceAtom } from "../atom/resources";
import { TypedIcon, TypedColor } from "typed-design-system";

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
        <TypedIcon icon="close_19" color={TypedColor.fromHex("#000000")} />
      </div>
    </div>
  );
};

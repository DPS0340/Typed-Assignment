import { ResourceCardParams } from "../type/resource-card";
import { useAtom } from "jotai";
import { selectedResourceAtom } from "../atom/resources";
import { TypedIcon, TypedColor } from "typed-design-system";
import { ActionIcon } from "./action-icon";

export const ResourceCard = ({ element }: ResourceCardParams) => {
  const [selected] = useAtom(selectedResourceAtom);

  const focusStyle = selected?.id === element.id ? "border-[#38a5e1]" : "";

  return (
    <div
      className={
        "flex flex-row bg-[#ffffff] rounded-[10px] border-[1px] border-solid " +
        focusStyle
      }
    >
      <div className="">{element.name}</div>
      <div className="hover:cursor-pointer">
        <ActionIcon icon="close_19" />
      </div>
      <div className="flex flex-row flex-shrink ml-auto mr-0">
        <ActionIcon icon="edit_19" />
        <ActionIcon icon="trash_19" />
      </div>
    </div>
  );
};

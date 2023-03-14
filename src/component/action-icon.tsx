import { TypedIcon, TypedColor } from "typed-design-system";
import { ActionIconParams } from "../type/action-icon";

export const ActionIcon = ({ icon, onClick }: ActionIconParams) => {
  return (
    <div className="flex flex-grow" onClick={onClick}>
      <TypedIcon icon={icon} color={TypedColor.fromHex("#000000")} />
    </div>
  );
};

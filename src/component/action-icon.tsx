import { TypedIcon, TypedColor } from "typed-design-system";
import { ActionIconParams } from "../type/action-icon";

export const ActionIcon = (params: ActionIconParams) => {
  const { onClick, className } = params;
  return (
    <div onClick={onClick} className={className}>
      <TypedIcon {...params} />
    </div>
  );
};

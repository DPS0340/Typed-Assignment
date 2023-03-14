import { ResourceAddButtonParams } from "../type/resource-add-button";

export const ResourceAddButton = ({
  name,
  onClick,
  children,
}: ResourceAddButtonParams) => {
  return (
    <div
      onClick={onClick}
      className="flex-grow hover:cursor-pointer radius-[5px] border-[1px] border-solid border-[#E5E5E5] m-1"
    >
      <div className="m-[5%] text-center">{name}</div>
      {children}
    </div>
  );
};

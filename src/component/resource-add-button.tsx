import { ResourceAddButtonParams } from "../type/resource-add-button";

export const ResourceAddButton = ({
  name,
  children,
  onClick,
}: ResourceAddButtonParams) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col flex-grow hover:cursor-pointer rounded-[5px] border-[1px] border-solid border-[#E5E5E5] m-1"
    >
      <div className="m-[5%] text-center">{name}</div>
      {children}
    </div>
  );
};

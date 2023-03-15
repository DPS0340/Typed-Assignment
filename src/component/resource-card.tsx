import { ResourceCardParams } from "../type/resource-card";
import { useAtom } from "jotai";
import { resourcesAtom, selectedResourceAtom } from "../atom/resources";
import { ActionIcon } from "./action-icon";
import { useEffect, useRef, useState } from "react";
import { onEnter } from "../utils/on-enter";

export const ResourceCard = ({ element }: ResourceCardParams) => {
  const [selected, setSelected] = useAtom(selectedResourceAtom);
  const [resources, setResources] = useAtom(resourcesAtom);
  const [name, setName] = useState(element.name);
  const [isEdit, setIsEdit] = useState(false);

  const hideHandler = useRef<number>();

  useEffect(() => {
    setName(element.name);
  }, [element.name]);

  const focusStyle =
    selected?.id === element.id ? "border-[#38a5e1] " : "border-[#ffffff]";
  const nameView = (
    <div className="hover:cursor-pointer" onClick={() => setSelected(element)}>
      {element.name}
    </div>
  );

  const changeName = async () => {
    if (selected?.id == element.id) {
      setSelected({ ...selected, name });
    }
    setResources(
      resources.map((resource) => {
        if (resource.id === element.id) {
          return {
            ...resource,
            name,
          };
        }
        return resource;
      })
    );
  };

  const nameEditor = (
    <textarea
      onKeyDown={onEnter(changeName)}
      onMouseEnter={() => {
        if (hideHandler.current) {
          clearTimeout(hideHandler.current);
          hideHandler.current = undefined;
        }
      }}
      onMouseOut={() => {
        if (!hideHandler.current) {
          hideHandler.current = setTimeout(() => {
            changeName();
            setIsEdit(false);
          }, 300);
        }
      }}
      value={name}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setName(e.target.value);
      }}
    />
  );

  return (
    <div
      className={
        "flex flex-col bg-[#ffffff] rounded-[10px] border-[1px] border-solid mb-3 p-2 " +
        focusStyle
      }
      onClick={() => setSelected(element)}
    >
      {isEdit ? nameEditor : nameView}
      <div className="flex flex-row-reverse flex-shrink">
        <ActionIcon
          className="hover:cursor-pointer"
          icon="trash_19"
          size={30}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.stopPropagation();
            console.log({ selected, element });
            if (selected?.id === element.id) {
              setSelected(null);
            }

            setResources(
              resources.filter((resource) => resource.id !== element.id)
            );
          }}
        />
        <ActionIcon
          className="hover:cursor-pointer"
          icon="edit_19"
          size={30}
          onClick={() => setIsEdit(true)}
        />
      </div>
    </div>
  );
};

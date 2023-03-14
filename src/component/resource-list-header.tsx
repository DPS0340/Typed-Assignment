import { useAtom } from "jotai";
import { resourcesAtom } from "../atom/resources";
import { ResourceCard } from "./resource-card";
import { ResourceAddButton } from "./resource-add-button";

export const ResourceListHeader = () => {
  const [setResources] = useAtom(resourcesAtom);

  const onUrlAdd = () => {};
  const onImageAdd = () => {};

  return (
    <div className="flex flex-row">
      <ResourceAddButton name="URL 추가" onClick={onUrlAdd}>
        <></>
      </ResourceAddButton>
      <ResourceAddButton name="URL 추가" onClick={onImageAdd}>
        <></>
      </ResourceAddButton>
    </div>
  );
};

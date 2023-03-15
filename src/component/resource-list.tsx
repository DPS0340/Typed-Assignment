import { useAtom } from "jotai";
import { resourcesAtom } from "../atom/resources";
import { ResourceCard } from "./resource-card";
import { ResourceListHeader } from "./resource-list-header";

export const ResourceList = () => {
  const [resources] = useAtom(resourcesAtom);

  return (
    <div className="flex flex-col w-[20vw] h-[100vh] bg-[#F7F7F7]">
      <ResourceListHeader />
      <div className="overflow-scroll scrollbar-hide m-2">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} element={resource}></ResourceCard>
        ))}
      </div>
    </div>
  );
};

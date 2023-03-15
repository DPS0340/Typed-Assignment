import { useAtom } from "jotai";
import * as React from "react";
import { selectedResourceAtom } from "../atom/resources";
import { ResourceCanvasHeader } from "./resource-canvas-header";

export const ResourceCanvas: React.FC = () => {
  const [selected] = useAtom(selectedResourceAtom);

  if (!selected) {
    return <div className="flex flex-1 flex-grow"></div>;
  }

  let content: JSX.Element;

  if (selected.type === "image") {
    content = (
      <img
        className="w-[100%] h-[95vh] object-contain m-auto"
        src={selected.image}
      ></img>
    );
  } else {
    content = (
      <iframe className="w-[100%] h-[95vh] m-auto" src={selected.url}></iframe>
    );
  }

  return (
    <div className="flex-1 flex-grow flex flex-col">
      <ResourceCanvasHeader />
      {content}
    </div>
  );
};

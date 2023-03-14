import { useAtom } from "jotai";
import * as React from "react";
import { selectedResourceAtom } from "../atom/resources";
import { ResourceCanvasHeader } from "./resource-canvas-header";

export const ResourceCanvas: React.FC = () => {
  const [selected, setSelected] = useAtom(selectedResourceAtom);

  if (!selected) {
    return <div className="flex flex-1 flex-grow"></div>;
  }

  let content: JSX.Element;

  if (selected.type === "image") {
    content = <img width="70vw" height="100vh" src={selected.url}></img>;
  } else {
    content = <iframe width="70vw" height="100vh" src={selected.url}></iframe>;
  }

  return (
    <div className="flex flex-col">
      <ResourceCanvasHeader />
      {content}
    </div>
  );
};

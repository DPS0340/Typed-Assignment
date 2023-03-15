import { useState } from "react";
import { ResourceAddButton } from "./resource-add-button";
import { ResourceAddPanel } from "./resource-add-panel";

export const ResourceListHeader = () => {
  const [showUrlPanel, setShowUrlPanel] = useState(false);
  const [showImagePanel, setShowImagePanel] = useState(false);

  return (
    <div className="flex flex-row p-2">
      <ResourceAddButton
        name="URL 추가"
        onClick={() => {
          setShowImagePanel(false);
          setShowUrlPanel(!showUrlPanel);
        }}
      ></ResourceAddButton>
      <ResourceAddButton
        name="이미지 추가"
        onClick={() => {
          setShowUrlPanel(false);
          setShowImagePanel(!showImagePanel);
        }}
      ></ResourceAddButton>
      <ResourceAddPanel
        type="url"
        show={showUrlPanel}
        setShow={setShowUrlPanel}
      />
      <ResourceAddPanel
        type="image"
        show={showImagePanel}
        setShow={setShowImagePanel}
      />
    </div>
  );
};

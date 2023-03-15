import { ResourceAddPanelParams } from "../type/resource-add-panel";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import { sleep } from "../utils/sleep";
import { getRandomInt } from "../utils/random";
import { useAtom } from "jotai";
import { SnackbarDatum } from "../type/snackbar";
import { resourcesAtom } from "../atom/resources";
import { Resource } from "../type/resources";
import { v4 as uuidv4 } from "uuid";
import { enqueueSnackbar } from "notistack";
import { onEnter } from "../utils/on-enter";

export const ResourceAddPanel = ({
  type,
  show,
  setShow,
}: ResourceAddPanelParams) => {
  const [url, setUrl] = useState("");
  const [resources, setResources] = useAtom(resourcesAtom);
  const imageUploadRef = useRef<HTMLInputElement>(null);

  const addSnackBar = (snack: SnackbarDatum) =>
    enqueueSnackbar(snack.message, {
      variant: snack.severity,
      autoHideDuration: 10000,
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
    });

  const submitUrl = async () => {
    if (!url) {
      return;
    }

    if (!url.startsWith("https://") && !url.startsWith("http://")) {
      const snack: SnackbarDatum = {
        severity: "error",
        message: "URL은 https:// 또는 http:// Scheme이어야 합니다.",
      };

      addSnackBar(snack);
      return;
    }

    const replacedUrl = url
      .replace("youtube.com/watch?v=", "youtube.com/embed/")
      .replace("youtu.be/", "youtube.com/embed/");

    await sleep(getRandomInt(300, 1000));
    const dice = getRandomInt(1, 10);
    const success = dice <= 8;

    const snack: SnackbarDatum = {
      severity: success ? "success" : "error",
      message: success
        ? "URL 추가에 성공했습니다."
        : "URL 추가에 실패했습니다.",
    };

    addSnackBar(snack);

    setShow(false);
    setUrl("");

    if (!success) {
      return;
    }

    const resource: Resource = {
      id: uuidv4(),
      type: "url",
      name: replacedUrl,
      url: replacedUrl,
    };

    setResources([...resources, resource]);
  };

  if (type === "url") {
    return (
      <input
        type="text"
        onKeyDown={onEnter(submitUrl)}
        className={`absolute w-[18.7vw] mt-[4rem] ml-3 mr-auto border border-black rounded-md p-2 ${
          !show ? "hidden" : ""
        }`}
        value={url}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUrl(e.target.value);
        }}
      />
    );
  }

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files: rawFiles } = e.target;
    console.log({ rawFiles });

    if (!rawFiles || !rawFiles?.length) {
      return;
    }

    const files = Array.from(rawFiles);

    const results: Resource[] = [];

    console.log({ results });

    await Promise.all(
      files.map(async (file) => {
        await sleep(getRandomInt(300, 1000));
        const dice = getRandomInt(1, 10);
        const success = dice <= 8;
        const { name } = file;

        const snack: SnackbarDatum = {
          severity: success ? "success" : "error",
          message: success
            ? "이미지 추가에 성공했습니다."
            : "이미지 추가에 실패했습니다.",
        };

        enqueueSnackbar(snack.message, {
          variant: snack.severity,
          autoHideDuration: 10000,
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
        });

        if (!success) {
          return;
        }

        const url = URL.createObjectURL(file);

        const result: Resource = {
          id: uuidv4(),
          type: "image",
          name: name,
          image: url,
        };
        results.push(result);
      })
    );

    console.log({ results });

    setResources([...resources, ...results]);

    setShow(false);
  };

  return (
    // https://stackoverflow.com/a/49408555/11853111
    <div
      className={`absolute 
        w-[18.7vw] mt-[4rem] ml-3 mr-auto
    ${!show ? "hidden" : ""}`}
    >
      <input
        type="file"
        onChange={onImageChange}
        style={{ display: "none" }}
        accept="image/png, image/jpeg. image/jpg"
        multiple
        ref={imageUploadRef}
      />
      <Button
        variant="contained"
        onClick={() => {
          imageUploadRef.current && imageUploadRef.current.click();
        }}
        style={{ width: "100%" }}
      >
        이미지 추가
      </Button>
    </div>
  );
};

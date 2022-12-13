import { useState } from "react";
import DropZone from "../components/DropZone";
import PreviewImage from "../components/PreviewImage";

export default function Home() {
  const [processedfile, setProcessedFile] = useState<string>("");

  return (
    <>
      <DropZone setFile={setProcessedFile} />
      {processedfile && <PreviewImage file={processedfile} />}
    </>
  );
}

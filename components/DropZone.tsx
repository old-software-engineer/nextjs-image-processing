import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface dropProps {
  setFile: (value: string) => void;
}

const DropZone = ({ setFile }: dropProps) => {
  const [showGenerate, setShowGenerate] = useState("");
  const [dropBoxMsg, setDropBoxMsg] = useState("Drop your image here");
  const preventActions = (e: DragEvent | any) => {
    e.preventDefault();
  };

  const processImage = (e: Event | any) => {
    e.preventDefault();
    const img = document.createElement("img");

    img.onload = function () {
      if (img.width > 500 || img.height > 500) {
        toast.error("Please upload image with 500x500 dimensions");
      } else {
        setShowGenerate(img.src);
        setDropBoxMsg("Click to generate image with watermark");
        setFile("");
      }
    };

    img.src = URL.createObjectURL(e.dataTransfer.files[0]);
  };
  const showImage = () => {
    setFile(showGenerate);
    setShowGenerate("");
    setDropBoxMsg("Drop another image");
  };
  return (
    <>
      <ToastContainer />
      <div
        className="drop-container"
        onDragOver={preventActions}
        onDrop={processImage}
      >
        <h4>{dropBoxMsg}</h4>
      </div>
      {showGenerate && (
        <div className="button-div">
          <button className="button" onClick={showImage}>
            Generate
          </button>
        </div>
      )}
    </>
  );
};

export default DropZone;

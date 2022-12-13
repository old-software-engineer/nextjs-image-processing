import Image from "next/image";
import React from "react";

interface imageType {
  file: string;
}
const PreviewImage = ({ file }: imageType) => {
  const watermarkedText = "This is watermarked text";
  return (
    <div className="processed-data">
      <div className="watermarked-image">
        <Image src={file} width={500} height={500} alt="Watermarked image" />
        <span className="watermarked-text">{watermarkedText}</span>
      </div>
    </div>
  );
};

export default PreviewImage;

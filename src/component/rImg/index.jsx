import React from "react";

export const RImg = ({
  handleImgClick,
  externalClassName,
  src,
  alt,
  width = "100%",
  height = "100%",
  innerImgWidth,
  innerImgHeight,
  innerImgClassName,
}) => {
  return (
    <div
      onClick={handleImgClick}
      className={`${externalClassName} imgContainer`}
      style={{ width, height }}
    >
      <img
        className={`${innerImgClassName}`}
        style={{ width: innerImgWidth, height: innerImgHeight }}
        src={src}
        alt={alt}
      />
    </div>
  );
};



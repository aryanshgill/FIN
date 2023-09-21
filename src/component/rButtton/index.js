import React from 'react'

export const RButton = (props) => {
    const {
        buttonName,
        handleButtonClick,
        externalClassName,
        bgColor,
        color,
        border,
        text,
      } = props;
      return (
        <button
          className={`defaultButtonClass ${text || ""} ${border || "border-none"} ${
            bgColor || "bg-red"
          } ${color || "text-black"} rounded-lg ${externalClassName}`}
          onClick={handleButtonClick}
        >
          {buttonName}
        </button>
      );
    };

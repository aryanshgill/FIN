import React from "react";
import "./styles.scss";

const RInput = (props) => {
  const {
    externalClassName,
    onChange,
    value,
    placeHolder = "Enter Text",
    isPhoneNumber = false,
    type = "text",
    name,
  } = props;

  const renderInput = () => {
    return (
      <div className="defaultInputbox">
        <input
          name={name}
          className={` defaultInput ${externalClassName}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
      </div>
    );
  };

  const renderPhoneInput = () => {
    return (
      <div className="defaultPhoneWrapper">
        <span className="defaultCountryCode">+91</span>
        <input
          name={name}
          className={`defaultInput ${externalClassName}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
      </div>
    );
  };

  return (
    <>
    {!isPhoneNumber && renderInput()}
    {isPhoneNumber && renderPhoneInput()}
  </>
  );
};

export default RInput;

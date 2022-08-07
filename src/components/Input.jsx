import React, { useState } from "react";

export const Input = ({
  type,
  placeholder,
  label,
  is_group,
  optionsArray,
  name,
  initialValue,
  state,
  is_required,
}) => {
  const [inputValue, setInputValue] = useState(
    initialValue ? initialValue : ""
  );
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return is_group ? (
    optionsArray.map((check) => {
      return (
        <>
          <input
            type={type}
            placeholder={placeholder}
            label={label}
            name={name}
            required={is_required}
            value={inputValue}
            onChange={inputHandler}
          />
          {check}
        </>
      );
    })
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      label={label}
      onChange={inputHandler}
      value={inputValue}
    />
  );
};

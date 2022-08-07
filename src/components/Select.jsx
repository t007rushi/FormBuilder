import React, { useState } from "react";

export const Select = ({ options, name }) => {
  const [selectedOption, setSelectedOptions] = useState("");
  const selectOptionHandler = (e) => {
    setSelectedOptions(e.target.value);
  };
  return (
    <div>
      <select
        name={name}
        id={name}
        value={selectedOption}
        onChange={selectOptionHandler}
      >
        {options.map((op) => {
          return <option value={op}>{op}</option>;
        })}
      </select>
    </div>
  );
};

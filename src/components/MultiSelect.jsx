import React, { useState } from "react";

export const MultiSelect = ({ selectOptions }) => {
  const [selected, setSelected] = useState([]);
  const [selectedOp, setSelectedOp] = useState(selectOptions);
  const selectedoptionsHandler = (e) => {
    e.stopPropagation();
    setSelected([...selected, e.target.value]);
    setSelectedOp([...selectedOp.filter((op) => op !== e.target.value)]);
  };

  const selectedOptionRemoveHandler = (option) => {
    setSelected([...selected.filter((op) => op !== option)]);
    setSelectedOp([...selectedOp, option]);
  };

  return (
    <div>
      <div style={{ border: "1px solid black", padding: "5px" }}>
        <span style={{ display: "flex", gap: "5px" }}>
          {selected.map((selectedTag) => {
            return (
              <span
                style={{
                  backgroundColor: "skyblue",
                  padding: "3px",
                  borderRadius: "10px",
                }}
              >
                {selectedTag}
                <button
                  style={{ backgroundColor: "skyblue", border: "none" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectedOptionRemoveHandler(selectedTag);
                  }}
                >
                  X
                </button>
              </span>
            );
          })}
        </span>

        {selectedOp.length !== 0 && (
          <input
            style={{ outline: "none", border: "none" }}
            type="text"
            list="datalist"
            value=""
            onChange={selectedoptionsHandler}
            placeholder={"Select"}
          />
        )}
      </div>

      <datalist name="datalist" id="datalist">
        {selectedOp.map((optionValue) => (
          <option>{optionValue}</option>
        ))}
      </datalist>
    </div>
  );
};

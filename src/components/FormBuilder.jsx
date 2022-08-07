import React from "react";
import { formRenderFunction } from "../utils/formRenderFunction";

export const FormBuilder = ({ formContent, onSubmit, formStyle }) => {
  return (
    <form>
      <div style={formStyle}>
        {Object.keys(formContent).map((key, index) => {
          return formRenderFunction(formContent[key], key);
        })}
        <div className="form-btn">
          <button onClick={onSubmit}>SUBMIT</button>
          <button onClick={() => {}}>CANCEL</button>
        </div>
      </div>
    </form>
  );
};

# FORMBUILDER Using React

## Basic Usage

```js import React from 'react';
import ReactDOM from "react-dom";
import { FormBuilder } from "./components/FormBuilder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormBuilder />
  </React.StrictMode>
);
```

## Prop

```js
var formItems = [
   Name: {
      field: "input",
      type: "text",
      label: "user name",
      placeholder: "Enter your last name",
      is_required : true,
    },
    password: {
      field: "input",
      type: "password",
      label: "Password",
      placeholder: "*********",
      is_required : true,
    },
];

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

<FormBuilder
  formContent={formItems}
  formStyle={formStyle}
  onSubmit={() => {
    return validateForm();
  }}
/>;
```

## Form Params

| Name        | type              | Require? | Description                                                                                               |
| ----------- | ----------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| formContent | object            | Required | All form fields collection with types `keys are field name` and `values are implementation specification` |
| formStyle   | object            | optional | style object for `CSS styling` of form                                                                    |
| onSubmit    | Callback function | Required | `function called` on form submission                                                                      |

## FormContent object description

- Just start writing your fields keeping in mind instead of
  describing like `key:value` diffrerently as in JSON
  just write simply key as field Name to display on Screen

| Name         | type    | Require? | Description                                                 |
| ------------ | ------- | -------- | ----------------------------------------------------------- |
| [objectKey]  | object  | Required | form field name                                             |
| field        | string  | Required | defines field tag                                           |
| type         | string  | Required | input field type                                            |
| label        | string  | optional | label of field                                              |
| placeholder  | string  | optional | field placeholder                                           |
| is_required  | boolean | optional | defines compulsary fields to fill before submiting the form |
| is_group     | boolean | optional | to define multiple checkbox or radio inputs to map          |
| optionsArray | array   | optional | multiple options of group ,depends on is_group value        |

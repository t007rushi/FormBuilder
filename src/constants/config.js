export const config = {
  gender: {
    is_group: true,
    field: "input",
    name: "gender",
    optionsArray: ["male", "female"],
    type: "radio",
    label: "Select Gender",
    is_required: true,
  },
  firstName: {
    field: "input",
    type: "text",
    label: "user name",
    placeholder: "Enter your first name",
  },
  lastName: {
    field: "input",
    type: "text",
    label: "user name",
    placeholder: "Enter your last name",
  },
  password: {
    field: "input",
    type: "password",
    label: "Password",
    placeholder: "*********",
  },
  fruits: {
    is_group: true,
    optionsArray: ["Apple", "Mango", "Banana"],
    field: "input",
    type: "checkbox",
    label: "checkbox Group",
  },
  read_terms: {
    is_group: false,
    field: "input",
    type: "checkbox",
    label: "terms & conditions",
  },
  rank: {
    field: "select",
    name: "rank",
    options: ["first", "second", "third"],
  },
  description: {
    field: "textarea",
  },
  number: {
    field: "input",
    type: "number",
  },
  another_name: {
    field: "input",
    type: "text",
    label: "What should we call you",
    placeholder: "Chiku",
  },
  Date: {
    field: "input",
    type: "date",
    label: "Date Field",
    placeholder: "00-00-00",
  },
  multiSelectedfruits: {
    is_group: true,
    selectOptions: ["Apple", "Mango", "Banana", "Peru"],
    field: "multi-select",
    label: "Fruits to select from Group",
  },
};

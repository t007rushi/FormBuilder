import { Input } from "../components/Input";
import { MultiSelect } from "../components/MultiSelect";
import { Select } from "../components/Select";

export const formRenderFunction = (Val, key) => {
    switch (Val.field) {
      case "input": {
        return (
          <div>
            {key} : <Input {...Val} />
          </div>
        );
      }
      case "select": {
        return (
          <div>
            {key} : <Select {...Val} />
          </div>
        );
      }
      case "multi-select": {
        return (
          <div>
            {key} : <MultiSelect {...Val} />
          </div>
        );
      }
      default: {
        return "";
      }
    }
  };
import "./App.css";
import { FormBuilder } from "./components/FormBuilder";
import { config, formStyle } from "./constants";

function App() {
  return (
    <div className="App">
      <FormBuilder
        formContent={config}
        formStyle={formStyle}
        onSubmit={() => console.log("Submit sucessfully")}
      />
    </div>
  );
}

export default App;

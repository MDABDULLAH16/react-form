import "./App.css";
import ActionForm from "./components/ActionForm/ActionForm";
import ControlledForm from "./components/ControlledForm/ControlledForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UncontrolledField from "./components/UncontrolledField/UncontrolledField";

const App = () => {
  return (
    <div>
      <h1>React Form Explore</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <ActionForm></ActionForm> */}
      {/* <ControlledForm></ControlledForm> */}
      <UncontrolledField></UncontrolledField>
    </div>
  );
};

export default App;

import "./App.css";

import Tab from "./Tab";
import Toggle from "./Toggle";

function App() {


  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 40
    }}>
    <Tab />
    <Toggle />
    </div>
  );
}

export default App;

import "./App.css";

import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import NumberFlowActivity from "./components/NumberFlow/NumberFlowActivity";
import NumberFlowCountdown from "./components/NumberFlow/NumberFlowCountdown";
import { useEffect, useState } from "react"

function Countdown() {
  const [seconds, setSeconds] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(seconds => seconds - 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <NumberFlowCountdown seconds={seconds} />
}

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
      <NumberFlowActivity />
      <Countdown />


    </div>
  );
}

export default App;

import "./App.css";

import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import NumberFlowActivity from "./components/NumberFlow/NumberFlowActivity";
import NumberFlowCountdown from "./components/NumberFlow/NumberFlowCountdown";
import MotionExample from "./components/NumberFlow/MotionExample";
import { useEffect, useState } from "react"

function Countdown() {
  const [seconds, setSeconds] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(seconds => seconds - 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <NumberFlowCountdown seconds={seconds} />
}

function MotionExampleContainer() {
  const [value, setValue] = useState(543);

  return  <div onClick={() => setValue(Math.floor(Math.random() * (1000 - -100 + 1)) + -100)}>
    <MotionExample  value={value} />
  </div>
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

      <MotionExampleContainer />


    </div>
  );
}

export default App;

import NumberFlow, { type Value } from "@number-flow/react";
import { useCycle } from "../../hooks";
import { CSSProperties } from "react";

const values: Value[] = [543, 12000, -3200];

export default function NumberFlowActivity() {
  const [value, cycleValue] = useCycle(values);


  return (
    <div
      onClick={cycleValue}
      style={
        {
          "--number-flow-char-height": "0.85em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          fontSize: "4rem",
          fontWeight: 500,
        } as CSSProperties
      }
    >
      <NumberFlow value={value} trend={0} format={{ notation: "compact" }} />
      <p className="font-normal text-sm">Click anywhere to change values</p>
    </div>
  );
}

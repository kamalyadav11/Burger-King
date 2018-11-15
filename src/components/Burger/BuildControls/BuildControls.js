import React from "react";
import BuildControl from "./BuildControl/BuildControl";

import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" }
];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

export default BuildControls;

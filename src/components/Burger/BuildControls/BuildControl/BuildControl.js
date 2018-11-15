import React from "react";

import "./BuildControl.css";

const BuildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button className="Less">More</button>
      <button className="More">Less</button>
    </div>
  );
};

export default BuildControl;

import React from "react";
import "./SwitchButton.css";

const SwitchButton = ({ setNightModeToggle }) => {
  return (
    <input
      className="switch__theme-selector"
      type="range"
      min="1"
      max="2"
      onChange={(e) => setNightModeToggle(e.target.value)}
      defaultValue="1"
    />
  );
};

export default SwitchButton;

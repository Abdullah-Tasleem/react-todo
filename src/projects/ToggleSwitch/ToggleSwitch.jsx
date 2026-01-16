import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <h1>Toogle Switch <IoIosSwitch style={{ color: "purple" }} /></h1>
      <div
        className="toggle-switch"
        onClick={handleToggleSwitch}
        style={{ backgroundColor: isOn ? "#4caf50" : "" }}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="switch-state">{isOn ? "on" : "off"}</span>
        </div>
      </div>
    </>
  );
};

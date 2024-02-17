import React from "react";
import { useTheme } from "../../themeContext/themeContext";
import "./index.css";
const Togglor = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={"toggler"} onClick={toggleTheme}>
      <div className={"icon"}>🌙</div>
      <div className={"icon"}>🔆</div>
      <div
        className={"ball"}
        style={theme === "light" ? { left: "2px" , transition:"all 0.2s ease"} : { right: "2px" ,transition:"all 0.2s ease"}}
      />
    </div>
  );
};

export default Togglor;

import { useState } from "react";

function Tooltip({ position }) {
  const [isVisible, setIsVisible] = useState(false);

  function handleMouseEnter() {
    setIsVisible(true);
  }

  function handleMouseLeave() {
    setIsVisible(false);
  }

  const tooltipStyle = {
    position: "absolute",
    top: position === "top" ? "-40px" : position === "bottom" ? "40px" : 0,
    left: position === "left" ? "-135px" : position === "right" ? "145px" : 0,
    background: "black",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    visibility: isVisible ? "visible" : "hidden",
    transition: "visibility 0s, opacity 0.5s ease",
    opacity: isVisible ? 1 : 0,
    zIndex: 1,
    transform:
      position === "left" || position === "right" ? "translateY(20%)" : "",
  };

  const arrowStyle = {
    position: "absolute",
    content: '""',
    width: 0,
    height: 0,
    borderTop: "10px solid black",
    borderRight: "10px solid transparent",
    borderBottom: "0px solid transparent",
    borderLeft: "10px solid transparent",
    top: position === "top" ? "33.8px" : position === "bottom" ? "-7px" : 0,
    left: position === "left" ? "111px" : position === "right" ? "-9px" : 0,
    transform: position === "bottom" && "rotate(180deg)",
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="hover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </div>
      <div style={tooltipStyle}>
        <div style={arrowStyle} />
        I'm a tooltip!
      </div>
    </div>
  );
}

export default Tooltip;

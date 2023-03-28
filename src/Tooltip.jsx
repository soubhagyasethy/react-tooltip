import { useState } from "react";

// Define a Tooltip component that receives a position prop
function Tooltip({ position }) {
  // Declare a state variable called isVisible and a function to update it called setIsVisible, both initialized to false
  const [isVisible, setIsVisible] = useState(false);

  // Define a function to set the isVisible state variable to true when the user hovers over the tooltip element
  function handleMouseEnter() {
    setIsVisible(true);
  }

  // Define a function to set the isVisible state variable to false when the user stops hovering over the tooltip element
  function handleMouseLeave() {
    setIsVisible(false);
  }

  // Define the CSS styles for the tooltip element using the position prop to determine its position on the page
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

  // Define the CSS styles for the arrow that points towards the element that the tooltip is associated with
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

  // Return the tooltip element and the element that the tooltip is associated with
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

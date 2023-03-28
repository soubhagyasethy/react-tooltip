import { useState } from "react";
import Tooltip from "./Tooltip";

function App() {
  // Declare a state variable called position and a function to update it called setPosition, both initialized to an empty string
  const [position, setPosition] = useState("");

  // Render the four buttons and the Tooltip component, passing the position state variable as a prop to the Tooltip component
  return (
    <div className="app">
      <div className="buttons">
        <button onClick={() => setPosition("top")}>Top</button>
        <button onClick={() => setPosition("bottom")}>Bottom</button>
        <button onClick={() => setPosition("left")}>Left</button>
        <button onClick={() => setPosition("right")}>Right</button>
      </div>
      {/* Tooltip component with `position` prop passed in */}
      <Tooltip position={position} />
    </div>
  );
}

export default App;

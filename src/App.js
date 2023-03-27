import { useState } from "react";
import Tooltip from "./Tooltip";

function App() {
  const [position, setPosition] = useState("");

  return (
    <div className="app">
      <div className="buttons">
        <button onClick={() => setPosition("top")}>Top</button>
        <button onClick={() => setPosition("bottom")}>Bottom</button>
        <button onClick={() => setPosition("left")}>Left</button>
        <button onClick={() => setPosition("right")}>Right</button>
      </div>
      <Tooltip position={position} />
    </div>
  );
}

export default App;

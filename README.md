# react-tooltip

A simple and customizable tooltip component built with ``React`.

Live preview: https://tooltip-component.netlify.app/

Demo: 

![React App](https://user-images.githubusercontent.com/82697602/227897010-7842931a-3cd9-4332-930c-088905b35833.gif)


## Features

- Supports positioning on `top`, `bottom`, `left`, and `right `.
- Easy to use and customize.

## Installation

- To use the Tooltip component in your React project, you can simply copy the `Tooltip.jsx` file into your project and import it in the component where you want to use it.

## Usage

- The Tooltip component takes a position prop which determines the position of the tooltip relative to the hover element.
- The position prop can be set to one of the following values: `top, bottom, left, or right.`
- Here's an example usage of the Tooltip component in App.jsx:

```
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

```

## Props

- position - Determines the position of the tooltip relative to the hover element. Valid values are `top`, `bottom`, `left`, and `right `.
  Styling
- The Tooltip component is designed to be easily customizable with CSS. You can style the tooltip and the arrow using the `tooltipStyle` and `arrowStyle` objects respectively in the `Tooltip.jsx` file.

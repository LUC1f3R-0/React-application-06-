import React from "react";
import padsData from "./pad";
import Pad from "./Pad.jsx";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    setPads(prev => prev.map(item => item.id === id ? { ...item, on: !item.on } : item));
  }

  const buttonElement = pads.map(err => (
    <Pad
      key={err.id}
      id={err.id}
      color={err.color}
      on={err.on}
      label=""
      func={toggle}
    />
  ));

  return (
    <main>
      <div className="pad-container">
        {buttonElement}
      </div>
    </main>
  );
}

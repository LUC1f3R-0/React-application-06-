import React from "react"
import padsData from "./pad"
import Pad from "./Pad.jsx"

export default function App() {
  const [pads, setPads] = React.useState(padsData)

  const buttonElement = pads.map(err =>
    <Pad key={err.id}
      color={err.color}
      on={err.on}
      label=""
    />
  )

  return (
    <main>
      <div className="pad-container">
        {buttonElement}
      </div>
    </main>
  )
}
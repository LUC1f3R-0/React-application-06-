import React from "react"

export default function Pad({ color, on, label }) {
    const [one, setOne] = React.useState(on)

    function click() {
        setOne(prev => !prev)
    }

    return (
        <button style={{ backgroundColor: color }} className={one ? "on" : undefined} onClick={click}>{label}</button>
    )

}
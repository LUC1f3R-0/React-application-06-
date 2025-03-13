import React from "react"

export default function Pad({ id, color, on, label, func }) {
    return (
        <button style={{ backgroundColor: color }} className={on ? "on" : undefined} onClick={() => func(id)}>{label}</button>
    )

}
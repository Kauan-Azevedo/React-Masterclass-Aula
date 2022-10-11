import React, { useState } from "react";
import { Sub } from "./Sub"


export const Super = (props) => {

    const [label, setLabel] = useState("Gerado");
    const [num, setNum] = useState(0);

    const handleClick = (valor, msg) => {
        setNum(valor)
        setLabel(msg)
    }

    return (
        <div>w
            <h3>{label}: {num}</h3>
            <Sub onClicar={handleClick}></Sub>
        </div>
    )
}

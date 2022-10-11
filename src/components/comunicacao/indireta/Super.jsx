import React from "react";
import { Sub } from "./Sub"


export const Super = (props) => {

    const handleClick = (valor) => {
        console.log("Ação!!!")
        console.log(valor)
    }

    return (
        <div>
            <h3>Valor</h3>
            <Sub onClicar={handleClick}></Sub>
        </div>
    )
}

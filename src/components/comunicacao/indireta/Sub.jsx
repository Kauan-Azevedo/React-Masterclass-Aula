import React from "react";
import { button, button_primary } from "../../../assets/button.module.css"

export const Sub = (props) => {

    return (
        <button className={`${button} ${button_primary}`} onClick={() => { props.onClicar(Math.random()) }}>Alterar</button>
    )
}

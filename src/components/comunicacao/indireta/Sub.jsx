import React from "react";
import { button, button_primary } from "../../../assets/button.module.css"

export const Sub = (props) => {

    const acao = () => {
        props.onClicar(
            Math.floor(Math.random() * 100),
            'Passado de Filho para Pai'
        )
    }

    return (
        <button className={`${button} ${button_primary}`} onClick={acao}> Alterar</button >
    )
}

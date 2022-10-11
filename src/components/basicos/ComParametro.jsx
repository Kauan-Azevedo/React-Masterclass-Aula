import React from "react"

export const ComParametro = (props) => {

    // Props são somente leitura
    // props.titulo = "Outro titulo"

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.subtitulo}</p>
        </div>
    )
}

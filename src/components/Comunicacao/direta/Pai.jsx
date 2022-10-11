import React from "react"
import { Filho } from "./Filho"


export const Pai = (props) => {
    return (
        <div>
            <Filho {...props}><strong>Pedro</strong></Filho>
            <Filho {...props}><strong>Maria</strong></Filho>
            <Filho {...props}><strong>João</strong></Filho>
        </div>
    )
}

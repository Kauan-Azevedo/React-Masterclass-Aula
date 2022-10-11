import React from "react"
import { ComFilhos } from "./components/basicos/ComFilhos"
import { Primeiro } from "./components/basicos/Primeiro"
import { ComParametro } from './components/basicos/ComParametro'
import { Card } from "./components/Card"
import { Repeticao } from "./components/basicos/Repetição"
import { Condicional } from "./components/basicos/Condicional"
import { Pai } from "./components/Comunicacao/direta/Pai"
import { Super } from "./components/Comunicacao/indireta/Super"

export default function App() {
    return (
        <div className="App">
            <div className="cards-container">
                <Card title="#07 - Comunicação Indireta(Filho->Pai)">
                    <Super />
                </Card>
                <Card title="#06 - Comunicação Direta(Pai->Filho)">
                    <Pai sobrenome="Oliveira" />
                </Card>
                <Card title="#05 - Componente c/ Condicional">
                    <Condicional number={2} />
                </Card>
                <Card title="#04 - Componente c/ Repetição">
                    <Repeticao />
                </Card>
                <Card title="#03 - Componente c/ Filhos">
                    <ComFilhos>
                        <p>filho 1</p>
                        <p>filho 2</p>
                        <p>filho 3</p>
                        <p>filho 4</p>
                        <p>filho 5</p>
                    </ComFilhos>
                </Card>
                <Card title="#02 - Componente c/ Parametro">
                    <ComParametro titulo="Passa parametro" subtitulo="Passando parametro" />
                </Card>
                <Card title="#01 - Componente">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}

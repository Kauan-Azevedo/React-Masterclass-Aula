import React from "react"
import { ComFilhos } from "./components/basicos/ComFilhos"
import { Primeiro } from "./components/basicos/Primeiro"
import { ComParametro } from './components/basicos/ComParametro'
import { Card } from "./components/Card"
import { Repeticao } from "./components/basicos/Repetição"
import { Condicional } from "./components/basicos/Condicional"

export default function App() {
    return (
        <div className="App">
            <div className="cards-container">
                <Card title="Primeiro Componente - Componente">
                    <Primeiro />
                </Card>
                <Card title="Segundo Componente - Componente c/ Parametro">
                    <ComParametro titulo="Passa parametro" subtitulo="Passando parametro" />
                </Card>
                <Card title="Terceiro Componente - Componente c/ Filhos">
                    <ComFilhos>
                        <p>filho 1</p>
                        <p>filho 2</p>
                        <p>filho 3</p>
                        <p>filho 4</p>
                        <p>filho 5</p>
                    </ComFilhos>
                </Card>
                <Card title="Quarto Componente - Componente c/ Repetição">
                    <Repeticao />
                </Card>
                <Card title="Quinto Componente - Componente c/ Condicional">
                    <Condicional number={2} />
                </Card>
            </div>
        </div>
    )
}

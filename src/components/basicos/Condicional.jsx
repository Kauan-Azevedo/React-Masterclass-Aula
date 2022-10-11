
export const Condicional = (props) => {

    return (
        <div>
            <h2>o Número {props.number} é </h2>
            {props.number % 2 == 0 ? <span>Par</span> : <span>Impar</span>}
        </div>
    )
}

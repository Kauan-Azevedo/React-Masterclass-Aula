import card from "./card.module.css"


export const Card = (props) => {

    return (
        <div className={card.card}>
            <h2 className={card.title}>{props.title}</h2>
            <div className={card.text}>{props.children}</div>
        </div>
    )
}

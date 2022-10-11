import card from "./card.module.css"


export const Card = (props) => {
    let random = ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F', '#90BE6D', '#43AA8B', '#43AA8B', '#4D908E', '#577590', '#277DA1']
    let choose = Math.floor(Math.random() * 10)


    return (
        <div className={card.card} style={{ border: `2px solid ${random[choose]}` }}>
            <h2 className={card.title} style={{ backgroundColor: random[choose] }}>{props.title}</h2>
            <div className={card.text}>{props.children}</div>
        </div>
    )
}

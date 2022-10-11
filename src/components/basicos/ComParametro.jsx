
export const ComParametro = ({ titulo, subtitulo }) => {
    return (
        <div>
            <h2>{titulo ?? "Titulo not found."}</h2>
            <p>{subtitulo ?? "Subtitulo not found."}</p>
        </div>
    )
}

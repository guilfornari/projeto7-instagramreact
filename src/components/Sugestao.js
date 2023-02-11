export default function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.userIcon} alt={props.user} />
                <div className="texto">
                    <div className="nome">{props.user}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}
export default function Post(props) {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userIcon} alt={props.user} />
                    {props.user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.postImage} alt={props.imageAlt} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.mainLikeIcon} alt={props.mainLikeUser} />
                    <div className="texto">
                        Curtido por <strong>{props.mainLikeUser}</strong> e <strong>outras {props.amountLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from "react"

export default function Post(props) {
    const [saved, setSaved] = React.useState(props.bookMark)
    const [liked, setLiked] = React.useState(props.heartMark)
    const [totalLikes, setTotalLikes] = React.useState(props.amountLikes)

    function clickBookMark() {
        (saved === "bookmark") ? setSaved("bookmark-outline") : setSaved("bookmark");
    }

    function clickHeart() {
        if (liked === "heart") {
            setLiked("heart-outline");
            setTotalLikes(totalLikes - 1);
        } else {
            setLiked("heart");
            setTotalLikes(totalLikes + 1);
        }
    }

    function clickImage() {
        if (liked === "heart-outline") {
            setLiked("heart");
            setTotalLikes(totalLikes + 1);
        }
    }

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
                <img onClick={clickImage} src={props.postImage} alt={props.imageAlt} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon onClick={clickHeart} class={liked} name={liked}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={clickBookMark} name={saved}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.mainLikeIcon} alt={props.mainLikeUser} />
                    <div className="texto">
                        Curtido por <strong>{props.mainLikeUser}</strong> e <strong>outras {totalLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from "react";

export default function Usuario(props) {
    const [userName, setUserName] = React.useState(props.user);
    const [userIcon, setUserIcon] = React.useState(props.icon);

    function changeUserName() {
        const checkName = prompt("Qual é o seu nome?");
        (checkName !== "") ? setUserName(checkName) : alert("Escreve algo!");
    }

    function changeUserIcon() {
        const checkLink = prompt("Insira um novo link para a imagem");
        (checkLink !== "") ? setUserIcon(checkLink) : alert("Tem que digitar um link!");
    }

    return (
        <div className="usuario">
            <img onClick={changeUserIcon} src={userIcon} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>{userName}</strong>
                    <ion-icon onClick={changeUserName} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}


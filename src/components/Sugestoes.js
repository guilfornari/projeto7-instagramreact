import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const dynamicSugestions = [
        { user: "bad.vibes.memes", userIcon: "/assets/img/bad.vibes.memes.svg", reason: "Segue você" },
        { user: "chibirdart", userIcon: "/assets/img/chibirdart.svg", reason: "Segue você" },
        { user: "razoesparaacreditar", userIcon: "/assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram" }];
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {dynamicSugestions.map((dynamicSugestion) => (<Sugestao
                key={dynamicSugestion.user}
                user={dynamicSugestion.user}
                userIcon={dynamicSugestion.userIcon}
                reason={dynamicSugestion.reason} />))}

        </div>
    )
}
import Story from "./Story";

export default function Stories() {
    const dynamicStories = [
        { user: "9gag", userIcon: "/assets/img/9gag.svg" },
        { user: "meowed", userIcon: "/assets/img/meowed.svg" },
        { user: "barked", userIcon: "/assets/img/barked.svg" },
        { user: "nathanwpylestrangeplanet", userIcon: "/assets/img/nathanwpylestrangeplanet.svg" }];

    return (
        <div className="stories">

            {dynamicStories.map((dynamicStory) => (<Story key={dynamicStory.user}
                user={dynamicStory.user}
                userIcon={dynamicStory.userIcon}
                altImage={dynamicStory.user} />))}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
import Post from "./Post";

export default function Posts() {
    const dynamicPosts = [
        {
            user: "meowed",
            userIcon: "/assets/img/meowed.svg",
            postImage: "/assets/img/gato-telefone.svg",
            imageAlt: "gato-telefone",
            mainLikeIcon: "/assets/img/respondeai.svg",
            mainLikeUser: "respondeai",
            amountLikes: "101.523"
        },
        {
            user: "barked",
            userIcon: "/assets/img/barked.svg",
            postImage: "/assets/img/dog.svg",
            imageAlt: "dog",
            mainLikeIcon: "/assets/img/adorable_animals.svg",
            mainLikeUser: "adorable_animals",
            amountLikes: "99.159"
        },
        {
            user: "Wawa",
            userIcon: "/assets/img/wawawicomics.svg",
            postImage: "/assets/img/tokay-gecko-portrait.png",
            imageAlt: "tokay",
            mainLikeIcon: "/assets/img/razoesparaacreditar.svg",
            mainLikeUser: "razoesparaacreditar",
            amountLikes: "543.999"
        }
    ];
    return (
        <div className="posts">
            {dynamicPosts.map((dynamicPost) => (<Post key={dynamicPost.user}
                user={dynamicPost.user}
                userIcon={dynamicPost.userIcon}
                postImage={dynamicPost.postImage}
                imageAlt={dynamicPost.imageAlt}
                mainLikeIcon={dynamicPost.mainLikeIcon}
                mainLikeUser={dynamicPost.mainLikeUser}
                amountLikes={dynamicPost.amountLikes} />))}
        </div>
    )
}
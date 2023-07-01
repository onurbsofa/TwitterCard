export function TwitterFollowCard({name, userName, isFollowing}){
    const imgSrc = `https://unavatar.io/${userName}.com`
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src={imgSrc} 
                    alt="el avatar de reddit" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}
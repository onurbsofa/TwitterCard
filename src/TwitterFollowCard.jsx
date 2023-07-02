import{ useState } from 'react'
export function TwitterFollowCard({children, userName,initialIsFollowed}){

   const [isFollowed, setIsFollowed] = useState(initialIsFollowed)//valor inicial del estado del componente para que sea dinamico
    /*hook de estado destrucring de objeto useState retorna un array con dos elementos el primero es el estado y el segundo es una funcion para actualizar el estado*/
    const text = isFollowed ? 'Siguiendo' : 'Seguir'//if ternario 
    const buttonClassName = isFollowed ? 'tw-followCard-button isFollowed' : 'tw-followCard-button'

    const handleButtonClick = () => {
        setIsFollowed(!isFollowed)
    }//manejador de estados del componente

    const imgSrc = `https://unavatar.io/${userName}.com`
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src={imgSrc} 
                    alt="el avatar de reddit" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button 
                    className={buttonClassName} 
                    onClick={handleButtonClick}
                > 
                    {text}
                </button>
            </aside>
        </article>
    )
}
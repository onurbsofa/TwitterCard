import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App (){
    //el esatdo inicial es una prop del componente que no cambia si modificamos el estado del componente padre , en este caso el componente padre es App.jsx y el hijo es TwitterFollowCard.jsx.
    //Siempre que se modifique el estado del componente padre se renderiza el componente hijo con el estado inicial ya definido, no cambiara porque el valor se lo damos inicialmente al hijo no al padre
   //Objeto con las props para pasar al componente

    const users = [
        {
            userName: "midudev",
            name: "Miguel Ángel Durán",
            isFollowed: true
        },
        {
            userName: "bofoweb",
            name: "bruno",
            isFollowed: false
        },
        {
            userName: "Reddit",
            name: "Robotito",
            isFollowed: true
        },
    ]
    return(
        <section className='App'>
           {
            users.map( user =>{
                const {userName, name, isFollowed} = user
                return(
                    <TwitterFollowCard
                        key={userName}//identificador unico para cada componente porque es un array
                        userName={userName}
                        initialIsFollowed={isFollowed}>
                        {name}
                    </TwitterFollowCard>
                )
            })
           }
        </section>
    )
}
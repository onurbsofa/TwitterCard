import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App (){
    //el esatdo inicial es una prop del componente que no cambia si modificamos el estado del componente padre , en este caso el componente padre es App.jsx y el hijo es TwitterFollowCard.jsx.
    //Siempre que se modifique el estado del componente padre se renderiza el componente hijo con el estado inicial ya definido, no cambiara porque el valor se lo damos inicialmente al hijo no al padre
    const miduProps = { userName: "midudev"}// Objeto con las props para pasar al componente
    return(
        <section className='App'>
            <TwitterFollowCard    
            userName= "bofoweb"
            initialIsFollowed={true}//valor inicial del estado del componente para que sea dinamico asi funciona twitter
            > 
            Bruno
            </TwitterFollowCard>
            <TwitterFollowCard 
            userName= "Reddit"
            >
            Robotito
            </TwitterFollowCard>
            <TwitterFollowCard
            {...miduProps} // rest operator en las props malas practicas pero aveces es necesario
            >
            MiduLove
            </TwitterFollowCard>
        </section>
    )
}
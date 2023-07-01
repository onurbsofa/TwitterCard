import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App (){
    return(
        
        <section className='App'>
            <TwitterFollowCard  
            isFollowing={false} 
            name = "Bruno" 
            userName= "bofoweb"
            />
            <TwitterFollowCard 
            isFollowing 
            name = "Robotito" 
            userName= "Reddit"
            />
            <TwitterFollowCard 
            isFollowing 
            name = "MiduLove" 
            userName= "midudev"
            />
        </section>
    )
}
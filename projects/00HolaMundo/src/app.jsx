import "./app.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
    // Pasarle la definión de la función y dentro del objeto que se hagaconst formatUserName = (userName) => `@${userName}`; // Añade el @ al principio del nombre de usuario
    
    const formatUserName = (userName) => `@${userName}` // Añade el @ al principio del nombre de usuario

    return(
        <>
            <section className="App">
                <TwitterFollowCard formatUserName={formatUserName} userName="midudev">
                    Miguel Ángel Duran
                </TwitterFollowCard>
                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    userName="pheralb" name="Pablo Gonzalez">
                    Pablo Gonzalez
                </TwitterFollowCard>
            </section>
        </>
    )
}
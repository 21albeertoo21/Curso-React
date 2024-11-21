import { StrictMode } from "react"
import "./app.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App() {
    return(
        <>
            <section className="App">
                <TwitterFollowCard userName="midudev" name="Miguel Ángel"></TwitterFollowCard>
                <TwitterFollowCard userName="pheralb" name="Pablo Gonzalez"></TwitterFollowCard>
            </section>
        </>
    )
}
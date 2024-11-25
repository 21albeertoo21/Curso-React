import { Square } from './Square'

export function WinnerModal ({ winner, restartGame }) {
    if (winner == null) return null

    const winnerText = winner == false ? "Empate" : `Ganó:`
    return (
        <section className="winner">
        <div className="text">
            <h2>{winnerText}</h2>

            <header className="win">
                {/* Si tenemos un winner, mostrar el cuadrado */}
                {winner && <Square>{winner}</Square>}
            </header>

            <footer>
                <button onClick={restartGame}>
                    Empezar de nuevo
                </button>
            </footer>
        </div>
        </section>
    )
}
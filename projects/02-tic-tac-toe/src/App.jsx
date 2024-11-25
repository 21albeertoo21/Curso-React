import './App.css'
import { useState } from 'react'
import confetti from "canvas-confetti"

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner } from './logic/board'
import { checkEndGame } from './logic/board'
import { WinnerModal } from './components/Winner'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) // Estado del tablero
  const [turn, setTurn] = useState(TURNS.X) // Estado del turno
  const [winner, setWinner] = useState(null) // Estado del ganador, 
  //null es que no hay ganador,

  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index]) return // Si ya hay un valor en el cuadrado, no hacer nada

    const newBoard = [...board] // Copia del tablero
    newBoard[index] = turn // Actualiza el tablero
    setBoard(newBoard) // Actualiza el estado del tablero

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return(
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={restartGame}>
        Reiniciar
      </button>
      <section className='game'>
        {
          board.map((square, index) => {
              return (
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                  isSelected={false}
                >
                  {square}
                </Square>
              )
          })
        } 
      </section>

      <section className="turn">
        <Square isSelected={turn===TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn===TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {/*Renderizado condicional*/}
      
      <WinnerModal restartGame={restartGame} winner={winner}></WinnerModal>

    </main>
  )
}

export default App

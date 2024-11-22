import './App.css'
import { useState } from 'react'

const TURNS = { // Constantes para los turnos
  X: 'x',
  O: 'o'
}

const Square = ({ children, updateBoard, isSelected, index }) => {
  
  const className= `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => { // Función para manejar el click en el cuadrado
    updateBoard(index)
  } 
  return(
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) // Estado del tablero
  const [turn, setTurn] = useState(TURNS.X) // Estado del turno
  const [winner, setWinner] = useState(null) // Estado del ganador

  const updateBoard = (index) => {
    const newBoard = [...board] // Copia del tablero
    newBoard[index] = turn // Actualiza el tablero
    setBoard(newBoard) // Actualiza el estado del tablero

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return(
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
              return (
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
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

    </main>
  )
}

export default App

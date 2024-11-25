import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
        const [a, b, c] = combo
        if ((boardToCheck[a]) &&
        (boardToCheck[a] == boardToCheck[b]) && 
        (boardToCheck[a] == boardToCheck[c]))
        {
            return boardToCheck[a] // Devuelve x u o
        }
    }
    // Si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // Si todos los cuadrados están llenos, empate
    return newBoard.every((square) => square !== null)
}
export const Square = ({ children, updateBoard, isSelected, index }) => {
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
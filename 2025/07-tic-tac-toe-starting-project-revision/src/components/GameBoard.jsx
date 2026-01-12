export function GameBoard({boardState, onMove}) {
    return (
        <ol id="game-board">
            {boardState.map((row, rowIndex) => <li>
                <ol>
                    {row.map((col, colIndex) => <li><button onClick={() => onMove(rowIndex, colIndex)}>{col}</button></li>)}
                </ol>
            </li>)}
        </ol>
    );
}
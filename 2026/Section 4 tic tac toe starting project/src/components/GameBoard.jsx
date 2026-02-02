export default function GameBoard({ boardState, onMove, children, ...props }) {
    return <div id="game-board">
        <ol>
            {boardState.map((boardStateRow,rowIndex) => {
                return <li>
                    <ol>{boardStateRow.map((boardStateCol, colIndex) => {
                        return <li>
                            <button onClick={() => onMove(rowIndex, colIndex)}>{boardStateCol}</button>
                        </li>
                    })}
                    </ol>
                </li>;
            })}
        </ol>
    </div>
}
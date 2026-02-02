const DEFAULT_BOARD_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ log, onMove, children, ...props }) {
    const updatedGameboard = [...DEFAULT_BOARD_STATE];
    
    // Derive the board state from the logs
    for (const logEntry of log) {
        for (const [playerSymbol, moveArray] of Object.entries(logEntry)) {
            const row = moveArray[0];
            const col = moveArray[1];
            updatedGameboard[row][col] = playerSymbol;
        }
    }
    
    return <div id="game-board">
        <ol>
            {updatedGameboard.map((boardStateRow,rowIndex) => {
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
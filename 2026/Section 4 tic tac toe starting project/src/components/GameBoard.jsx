const DEFAULT_BOARD_STATE = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ log, onMove, children, ...props }) {
    const updatedGameboard = DEFAULT_BOARD_STATE.map(innerArray => [...innerArray]);

    // Derive the board state from the logs
    for (const logEntry of log) {
        const row = logEntry.move[0];
        const col = logEntry.move[1];
        updatedGameboard[row][col] = logEntry.symbol;
    }

    function handlePlayerMove(row, col) {
        if (updatedGameboard[row][col] != null) return;

        onMove(updatedGameboard, row, col);
    }

    return <section id="game-board">
        <ol>
            {updatedGameboard.map((boardStateRow, rowIndex) => {
                return <li>
                    <ol>{boardStateRow.map((boardStateCol, colIndex) => {
                        return <li>
                            <button onClick={() => handlePlayerMove(rowIndex, colIndex)}>{boardStateCol}</button>
                        </li>
                    })}
                    </ol>
                </li>;
            })}
        </ol>
    </section>
}   
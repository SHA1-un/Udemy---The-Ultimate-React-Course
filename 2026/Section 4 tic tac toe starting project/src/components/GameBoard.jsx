export default function GameBoard({ boardState, children, ...props }) {
    return <div id="game-board">
        <ol>
            {boardState.map(boardStateRow => {
                return <li>
                    <ol>{boardStateRow.map(boardStateCol => {
                        return <li>
                            <button>{boardStateCol}</button>
                        </li>
                    })}
                    </ol>
                </li>;
            })}
        </ol>
    </div>
}
export function GameOver({ winner, isDraw, onRematch }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {isDraw ?
                <p>Draw!</p> :
                <p>{winner} won!</p>
            }

            <p><button onClick={onRematch}>Rematch!</button></p>
        </div>
    );
}
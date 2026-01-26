export default function Player({ playerName, playerSymbol, children, ...props }) {
    return (
        <li>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{playerSymbol}</span>
        </li>

    );
}

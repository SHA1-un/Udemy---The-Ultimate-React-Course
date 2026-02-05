export default function GameLog({log, players}) {
    return <section id="log">
        <ol>
            {log.map(entry => {
                const row = entry.move[0];
                const col = entry.move[1];
                return <li>
                    {`${players[entry.symbol]}: (${row + 1}, ${col + 1})`}
                </li>
            })}
        </ol>

    </section>
}
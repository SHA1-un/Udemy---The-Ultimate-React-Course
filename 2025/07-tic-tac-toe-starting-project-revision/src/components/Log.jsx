export function Log({log}) {
    return (
        <div id="log">
            <ol>
                {log.map(entry => <li>{entry}</li>)}
            </ol>
        </div>
    );
}
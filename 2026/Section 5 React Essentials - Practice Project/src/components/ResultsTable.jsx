export default function ResultsTable({entries}) {
    return <table id="result">
        <thead>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </thead>
        <tbody>
            {entries.map(entry => <tr>{entry}</tr>)}
        </tbody>
    </table>
}
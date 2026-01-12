export function Results({ dataArray }) {
    return (
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Investment Capital</th>
            </thead>
            <tbody>
                {dataArray.map((entry, index) => {
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{entry.investment_value}</td>
                            <td>{entry.interest_year}</td>
                            <td>{entry.total_interest}</td>
                            <td>{entry.investment_capital}</td>
                        </tr>
                    );
                })}

            </tbody>
        </table>
    );
}
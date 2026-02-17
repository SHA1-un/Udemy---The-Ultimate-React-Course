import { formatter } from "../util/investment";

/**
 * @typedef annualDataRow
 * @property {number} year
 * @property {number} interest
 * @property {number} valueEndOfYear
 * @property {number} annualInvestment
 * 
 * @param {object} props
 * @param {annualDataRow[]} props.rows
 * @returns 
 */
export default function ResultsTable({rows}) {
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {rows.map(row => {
                let dataCells = [];
                for(const property in row) {
                    const value = row[property];
                    dataCells.push(<td>{value}</td>);
                }
                return <tr>
                    {...dataCells}
                </tr>
            })}
        </tbody>
    </table>
}
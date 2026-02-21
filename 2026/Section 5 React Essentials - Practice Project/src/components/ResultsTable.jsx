import { formatter } from "../util/investment";

/**
 * @typedef calculatedAnnualDataRow
 * @property {number} year
 * @property {number} interest
 * @property {number} valueEndOfYear
 * @property {number} annualInvestment
 * 
 * @param {object} props
 * @param {calculatedAnnualDataRow[]} props.rows
 * @returns 
 */
export default function ResultsTable({ rows }) {
    console.log("rows");
    console.log(rows);


    /** @param {calculatedAnnualDataRow[]} rows */
    function generateData(rows) {
        /** @type {tableDataRow[]}  */
        const _rows = [];
        let totalInterestYTD = 0;

        for (const row of rows) {
            totalInterestYTD += row.interest;
            const investedCapital = row.valueEndOfYear-totalInterestYTD;

            _rows.push({
                year: row.year,
                investmentValue: formatter.format(row.valueEndOfYear), 
                yearlyInterest: formatter.format(row.interest),
                totalInterest: formatter.format(totalInterestYTD),
                investedCapital: formatter.format(investedCapital),
            });
        }

        return _rows;
    }
    const tableRows = generateData(rows);

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
            {tableRows.map(row => {
                let dataCells = [];
                for (const property in row) {
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

/**
 * @typedef tableDataRow
 * @property {number} year
 * @property {number} investmentValue
 * @property {number} yearlyInterest
 * @property {number} totalInterest
 * @property {number} investedCapital
 **/
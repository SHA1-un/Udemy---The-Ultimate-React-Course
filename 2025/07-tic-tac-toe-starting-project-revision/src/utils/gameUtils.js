
export function hasGameEnded(boardState) {
    let isGameOver = false;
    const rowArray = boardState.map(row => row);
    const colArray = [getArrayCol(boardState, 0), getArrayCol(boardState, 1), getArrayCol(boardState, 2)]
    const diagOne = boardState.map((row, index) => row[index]); // top left to bottom right
    const diagTwo = boardState.map((row, index) => row[row.length - 1 - index]); // top right to bottom left
    
    // Then we need to check if there are any consecutive player symbols
    // This can be done by adding all of the arrays to one big array and iterating though them all until one with 3 of the same symbols are found.
    const allRows = [...rowArray, ...colArray, diagOne, diagTwo];
    const flattenedAllRows = flattenTwoDimArray(allRows);
    const hasAvailableMoves = flattenedAllRows.some(element => element === "");
    const isDraw = !hasAvailableMoves;

    for (const row of allRows) {
        const rowString = row.join("").toLowerCase();
        isGameOver = rowString === "xxx" || rowString === "ooo";
        
        if (isGameOver) break;
    }

    return {isGameOver: isGameOver || isDraw, isDraw };
}

function getArrayCol(TwoDimArray, colIndex) {
    return TwoDimArray.map(row => row[colIndex]);
}

function flattenTwoDimArray(twoDimArray) {
    return twoDimArray.reduce((acc, arr) => {
        acc.push(...arr)
        return acc;
    }, [])
}
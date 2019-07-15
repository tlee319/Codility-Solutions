function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numberOfSameValueRows = 0;
    const numColumns = A[0].length;
    const numRows = A.length
    
    for (let x = 0; x < A.length; x++) {
        if (checkForSameValues(A[x])) {
            numberOfSameValueRows++;
        }
    }
    
    if (2 * numberOfSameValueRows > numRows) {
        return numberOfSameValueRows;
    }
    
    const pairs = getPairs(A);
    let maxPairs = 0;
    Object.keys(pairs).forEach(pair => {
        const numPairs = pairs[pair];
        if (numPairs > maxPairs) {
            maxPairs = numPairs;
        }
    })
    
    return maxPairs;
}

function getComplement(row) {
    return row.map(value => {
        return value === 0 ? 1 : 0;
    })
}

function getPairs(A) {
    let pairs = {};
    for (let x = 0; x < A.length; x++) {
        const row = A[x];
        
        if (pairs[row]) {
            pairs[row]++;
        }
        else if (pairs[getComplement(row)]) {
            pairs[getComplement(row)]++;
        }
        else {
            pairs[row] = 1;
        }
    }
    
    return pairs;
}

function checkForSameValues(values) {
    const firstValue = values[0]
    for (let x = 1; x < values.length; x++) {
        if (values[x] !== firstValue) {
            return false;
        }
    }
    
    return true;
}
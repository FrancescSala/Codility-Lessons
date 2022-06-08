function solution(A) {
    let numZeros = 0;
    return A.reduce((accum, elem) => {
        if (accum === -1) return -1;
        if (elem === 0) {
            numZeros++;
            return accum;
        };
        // elem is 1
        accum += numZeros;
        return (accum > 1000000000) ? -1 : accum;
    }, 0);
    // Note: given the condition to return -1 if exceeding certain value, it wold be more eficient
    // not to make a reduce,, but to have a loop, with the possibility to break
}
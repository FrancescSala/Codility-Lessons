function solution(A) {
    // we need to count the number of zeros, and at every 1 found increase the count of passing cars 
    // by the amount of zeros encountered so far.
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
    // Note: given the requirement to return -1 if exceeding certain value, it would be more efficient
    // not to use a reduce, but to use a loop, with the possibility to break.
}
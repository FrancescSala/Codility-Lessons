function solution(A) {
    if (A.length === 0) return 0;
    let B = A.sort();
    let numDiff = 1;
    for (let i = 1; i < B.length; i++)
        if (B[i] !== B[i-1]) numDiff++;
    return numDiff;
}
function solution(A, K) {
    let x = K % A.length;       // shifting the entire array >=1 time is the same as not shifting
    if (x === 0) return A;
    return A.slice(A.length-x).concat(A.slice(0,A.length-x)); // instead of shifting 1 position K times, let's go to the final situation in one step
}

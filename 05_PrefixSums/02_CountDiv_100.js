function solution(A, B, K) {
    let j = A % K;
    let first = (j === 0) ? A : A + K - j;  // first number after A, divisible by K
    return (first > B) ? 0 : Math.floor((B - first)/K) + 1;
}

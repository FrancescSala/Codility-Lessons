function solution(A) {
    let N = A.length;
    let frequencies = Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        if (A[i] < 1 || A[i] > N) return 0;
        if (++frequencies[A[i]-1] > 1) return 0;
    }
    //return (frequencies.some(elem => elem !== 1)) ? 0 : 1;  
    // no need to make the statement above. Arrived to this point it will always evaluate to 1, 
    // we can  return 1 directly
    return 1;
}

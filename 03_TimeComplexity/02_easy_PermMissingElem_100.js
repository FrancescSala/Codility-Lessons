function solution(A) {
    A.sort((x,y) => x - y);
    let i = 0;
    while (i < A.length && A[i] === i+1) i++;
    return ++i;
}

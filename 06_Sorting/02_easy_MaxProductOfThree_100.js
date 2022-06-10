function solution(A) {
    let B = A.sort((x,y) => y - x);
    return Math.max(B[0] * B[1] * B[2], B[0] * B[B.length-1] * B[B.length-2]);
}




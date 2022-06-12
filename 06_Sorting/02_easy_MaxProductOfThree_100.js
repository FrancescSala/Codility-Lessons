function solution(A) {
    let B = A.sort((x,y) => y - x);
    return Math.max(B[0] * B[1] * B[2], B[0] * B[B.length-1] * B[B.length-2]);
    // if the Javascript version supports it, also .at can be used.
    // This return is to contemplate cases with negative values. For example [3, 4, 5, -6, -10]
    // negative x negative is positive: the max product is 3 x (-6) x (-10) = 180
}




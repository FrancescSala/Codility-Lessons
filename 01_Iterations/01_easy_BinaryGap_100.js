function solution(N) {
    let binN = N.toString(2);  // binary representation of N, as a string
    let sol = 0;            // max length of a solution
    let counter = 0;        // length of current binary gap
    for (let j = 1; j <= binN.length; j++) {    // binN[0] is always 1, we can skip
        if (binN[j] === '1') {
            if (counter > sol) sol = counter;
            counter = 0;
        } else counter++;
        if (j > binN.length - sol + counter) break; // no need to arrive until the end
    }
    return sol;
}

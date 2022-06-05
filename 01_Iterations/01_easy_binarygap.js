function binaryGap(N) {
    let binN = N.toString(2);  // binary representation of N, as a string
    let sol = 0;            // max length of a binaryGap
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

console.log(9, ' - ',binaryGap(9));         // expected result 2
console.log(529, ' - ',binaryGap(529));     // expected result 4
console.log(20, ' - ',binaryGap(20));       // expected result 1
console.log(15, ' - ',binaryGap(15));       // expected result 0
console.log(32, ' - ',binaryGap(32));       // expected result 0
console.log(1041, ' - ',binaryGap(1041));   // expected result 5
console.log(66561, ' - ',binaryGap(66561));   // expected result 9

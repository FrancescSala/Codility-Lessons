function cyclicRotation(A, K) {
    let x = K % A.length;       // shifting the entire array >=1 time is the same as not shifting
    if (x === 0) return A;
    return A.slice(A.length-x).concat(A.slice(0,A.length-x)); // instead of shifting 1 position K times, let's go to the final situation in one step
}

console.log(cyclicRotation([3, 8, 9, 7, 6],3)); 
console.log(cyclicRotation([0, 0, 0],1));
console.log(cyclicRotation([1, 2, 3, 4],4));
console.log(cyclicRotation([1, 2, 3, 4],8));
console.log(cyclicRotation([1, 2, 3, 4],9));
console.log(cyclicRotation([1, 2, 3, 4, 5, 6, 7, 8, 9],3));

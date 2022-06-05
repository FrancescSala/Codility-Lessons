function permMissingElement(A) {
    A.sort((x,y) => x - y);
    let i = 0;
    while (i < A.length && A[i] === i+1) i++;
    return ++i;
}

console.log(permMissingElement([2,3,1,5]));
console.log(permMissingElement([2,3,1,5,6 ,7, 9, 8, 11, 10]));


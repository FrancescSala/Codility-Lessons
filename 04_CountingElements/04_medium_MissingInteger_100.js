function solution(A) {
    // we will use persence[i] to indicate they i is present in A
    let  presence = Array(100000);   // note that we do not initialize the array
    A.forEach(elem => {if (elem > 0) presence[elem] = true}); // ignore elements minor that one. Used true but could have used any other value not undefined
    let result = presence.findIndex((elem, index) => index > 0 && elem === undefined);
    return (result === -1) ? 100001 : result; // if A contains all integers 0..1000000, then the first absent is 100001
}

// it is efficient in time, but occupies quite a lot of memory as the integers in the array are in the range [1..100000]

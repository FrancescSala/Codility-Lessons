function solution(A) {
    let  presence = Array(100000);   // note that we do not initialize the rarray
    A.forEach(elem => {if (elem >0) presence[elem] = true});
    let result = presence.findIndex((elem, index) => index > 0 && elem === undefined);
    if (result === -1) result = 100001;
    return result;
}

// it is efficient in time, but occupies quite a lot of memory as the integers in the array are in the range [1..100000]

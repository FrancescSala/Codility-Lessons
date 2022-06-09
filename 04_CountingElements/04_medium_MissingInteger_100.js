function solution(A) {
    let  presence = Array(100000);
    A.forEach(elem => {if (elem >0) presence[elem] = true});
    let result = presence.findIndex((elem, index) => index > 0 && elem === undefined);
    if (result === -1) result = 100001;
    return result;
}

function solution(S, P, Q) {
    const IMPACT_FACTOR = {A : 1, C: 2, G: 3, T: 4};
    let closest1ToTheLeft = Array(S.length).fill(0); // for each position in S, this will indicate the closest position in S with an 'A'
    let closest2ToTheLeft = Array(S.length).fill(0); // idem for 'C'
    let closest3ToTheLeft = Array(S.length).fill(0); // idem for 'G'
    function initArray(A,value) {
        A.forEach((elem,index,arr) => {
            let impact = IMPACT_FACTOR[S[index]];
            if (impact === value) arr[index] = index;
            else if (index === 0) arr[index] = -1;
            else arr[index] = arr[index-1];
        });    
    }
    initArray(closest1ToTheLeft, 1);
    initArray(closest2ToTheLeft, 2);
    initArray(closest3ToTheLeft, 3);
    // the three above are our prefix sums. Now let's use them
    
    let resultSet = Array(P.length);
    for (let i = 0; i < P.length; i++) {
        if (closest1ToTheLeft[Q[i]] >= P[i]) resultSet[i] = 1;      //  (closest1ToTheLeft[Q[i]] >= P[i]) means there is an 'A' in the slice
        else if (closest2ToTheLeft[Q[i]] >= P[i]) resultSet[i] = 2; // analogous 'C'
        else if (closest3ToTheLeft[Q[i]] >= P[i]) resultSet[i] = 3; // analogous 'G'
        else resultSet[i] = 4;                                      // if no 'A', 'C' nor 'G', the slice contains only 'T'
    }
    return resultSet;
}

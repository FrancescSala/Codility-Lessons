function solution(S, P, Q) {
    const IMPACT_FACTOR = {A : 1, C: 2, G: 3, T: 4};
    let closest1ToTheLeft = Array(S.length).fill(0); // for each position in S, this will indicate the closest position in S with an 'A'
    let closest2ToTheLeft = Array(S.length).fill(0); // idem for 'C'
    let closest3ToTheLeft = Array(S.length).fill(0); // idem for 'G'
    closest1ToTheLeft.forEach((elem,index,arr) => {
        let impact = IMPACT_FACTOR[S[index]];
        if (impact === 1) 
            arr[index] = index;
        else if (index === 0) 
            arr[index] = -1;
        else arr[index] = arr[index-1];
    });
    closest2ToTheLeft.forEach((elem,index,arr) => {
        let impact = IMPACT_FACTOR[S[index]];
        if (impact === 2) 
            arr[index] = index;
        else if (index === 0) 
            arr[index] = -1;
        else arr[index] = arr[index-1];
    });
    closest3ToTheLeft.forEach((elem,index,arr) => {
        let impact = IMPACT_FACTOR[S[index]];
        if (impact === 3) 
            arr[index] = index;
        else if (index === 0) 
            arr[index] = -1;
        else arr[index] = arr[index-1];
    });
 
    let resultSet = Array(P.length);
    for (let i = 0; i < P.length; i++) {
        if (closest1ToTheLeft[Q[i]] >= P[i]) resultSet[i] = 1;      //  (closest1ToTheLeft[Q[i]] >= P[i]) means there is an 'A' in the slice
        else if (closest2ToTheLeft[Q[i]] >= P[i]) resultSet[i] = 2; // analogous 'C'
        else if (closest3ToTheLeft[Q[i]] >= P[i]) resultSet[i] = 3; // analogous 'G'
        else resultSet[i] = 4;                                      // if no 'A', 'C' nor 'G', the slice contains only 'T'
    }
    return resultSet;
}
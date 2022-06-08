function solution(X, A) {
    let stepFound = Array(X+1).fill(false);
    let pendingSteps = X;
    let arrivalTime = -1;
    for (let i = 0; i < A.length; i++) {
        if (!stepFound[A[i]]) {
            stepFound[A[i]] = true;
            pendingSteps--;
        }
        if (pendingSteps === 0) {
            arrivalTime = i;
            break;
        }
    }
    return arrivalTime;
}

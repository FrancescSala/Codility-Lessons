function solution(A) {
    let sumLeft = Array(A.length);
    A.reduce((accum,elem,index) => {
        sumLeft[index] = accum;
        return accum + elem;
    },0);
    let sumRight = Array(A.length);
    A.reduceRight((accum,elem,index) => {
        sumRight[index] =accum + elem;
        return sumRight[index];
    },0);
    
    return A.reduce((accum,elem,index) => {
        if (index === 0) return accum;
        let v = Math.abs(sumLeft[index]-sumRight[index]);
        return Math.min(accum, v);
    }, Infinity);
}

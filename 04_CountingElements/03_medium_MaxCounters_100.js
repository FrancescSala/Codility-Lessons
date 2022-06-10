class freqTable {
    constructor () {
        this.frequencies = {};
        this.max = 0;
    }

    add(elem) {
        if (this.frequencies.hasOwnProperty(elem)) {
            this.frequencies[elem]++;
        } else this.frequencies[elem] = 1;
        if (this.frequencies[elem] > this.max) this.max = this.frequencies[elem];
    }

    maxFreq() {
        return this.max;
    }
}


function solution(N, A) {
    // first calculate the maximum after the last max counter operation
    let ft = new freqTable();
    let from = 0;
    let myMax = 0;
    let j = A.indexOf(N+1);
    while (j !== -1) {
        for (let i = from; i < j; i++) 
            ft.add(A[i]);
        myMax += ft.maxFreq();
        ft = new freqTable();
        from = j + 1;
        j = A.indexOf(N+1,from);
    }
    // create the actual counters and initialize them to the max until that point
    let counters = Array(N).fill(myMax);
    // and finally do the last operations, increemnting by one the remaining counters
    for (let i = from; i < A.length; i++) 
            counters[A[i]-1]++;
    return counters;
}


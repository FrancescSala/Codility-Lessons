/*
function solution(A) {
    let values = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0 && !values.includes(A[i])) values.push(A[i]);
    }
    //values.sort((x,y) =>  x - y);
    let sol = 1;
    while (values.includes(sol)) sol++;
    // write your code in JavaScript (Node.js 8.9.4)
    return sol;
}
*/

// 7 + 19 + 3 + 3

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*
function solution(A) {
    let B = A.filter ((elem, index, arr) => arr.indexOf(elem) === index); // eliminate duplicates
    B.sort((x,y) => x - y);
    if (B[0] > 1) return 1;
    for (let i = 0; i < B.length; i++)
        if (B[i] !== i+1) return i+1;
    return B.length +1;
}

function solution(A) {
    let sol = 1;
    while (A.includes(sol)) sol++;
    return sol;

}
*/


class Interval {
    constructor(a,b = a) {
        this.low = Math.min(a,b);
        this.high = Math.max(a,b);
        this.next = null;
    }

    getLow(){
        return this.low;
    }

    getHigh() {
        return this.high;
    }

    setLow(a) {
        this.low = Math.min(a,this.low);
    }
    
    setHigh(b) {
        this.high = Math.max(b,this.high);
    }
}

// sorted list of intervals
class IntervalList  {       
    constructor() {
        this.first = null;
    }
    
    add(value) {
        if (this.first === null) {
            this.first = new Interval(value);
            return;
        }
        let previous = null;
        let current = this.first;
        let stop = false
        // search the place of value
        while (current !== null && !stop) {
            if (this._within(value,current)) return;  // nothing to be done
            stop = (previous === null && this._inferior(value,current)) || current === null || (previous !== null && this._superior(value,previous) && this._inferior(value,current));
            if (!stop) {
                previous = current;
                current = current.next;
            }
        }
        if (previous === null) { // add at the start of the list
            if (this._adjacentInferior(value,current)) {
                current.setLow(value);
                return;
            }
            let i = new Interval(value);
            i.next = current;
            this.first = i;
            return;    
        }
        if (current == null) { // add to the end of the list
            if (this._adjacentSuperior(value,previous)) {
                previous.setHigh(value);
                return;
            }
            let i = new Interval(value);
            previous.next = i;
            return;    
        }
        // add between previous and current
        if (this._adjacentSuperior(value,previous)) {
            previous.setHigh(value);
            if (this._canMerge(previous,current)) {
                this._merge(previous,current);
                return;
            }
        }
        if (this._adjacentInferior(value,current)) {
            current.setLow(value);
            if (this._canMerge(previous,current)) {
                this._merge(previous,current);
                return;
            }
        }
        let i = new Interval(value);
        i.next = current;
        previous.next = i;
    }

    firstGap() {
        if (this.first === null) return 1;
        return (this.first.getLow() > 1) ? 1 : this.first.getHigh() + 1;
    }

    _within(value,interval) {
        return ((interval.getLow() <= value) && (value  <= interval.getHigh()));
    }

    _adjacent(value,interval) {
        return (value === interval.getLow() -1 || value === interval.getHigh() + 1);
    }

    _adjacentInferior(value,interval) {
        return (value === interval.getLow() -1);
    }

    _adjacentSuperior(value,interval) {
        return (value === interval.getHigh() + 1);
    }
    
    _inferior(value,interval) {
        return (value < interval.getLow());
    }
    
    _superior(value,interval) {
        return (value > interval.getHigh());        
    }

    _canMerge(intervalInf,intervalSup) {
        return (intervalInf.getHigh() >= intervalSup.getLow());
    }

    _merge(intervalInf,intervalSup) {
        intervalInf.setHigh(intervalSup.getHigh());
    }
}

function solution(A) {
    let intervals = new IntervalList();
    for (let i = 0; i<A.length; i++) {
        if (A[i]>0) intervals.add(A[i]);
    }
    return intervals.firstGap();    
}



console.log(solution([1,3,6,4,1,2]));
console.log(solution([22]));
//console.log(solution([1,3,2]));
class frequencyTable {
    constructor() {
        this.collection = {};
    }

    addElement (elem) {
        if (this.collection.hasOwnProperty(elem)) 
            this.collection[elem]++;
        else this.collection[elem] = 1;
    }
    
    getElement(elem) {
        return (this.collectiion.hasOwnProperty(elem)) ? this.collectiion[elem] : 0;
    }

    getUnpaired() {
        return Object.keys(this.collection).filter(elem => this.collection[elem] % 2 === 1);
    }
}

function oddOccurrenciesInArray(A) {
    let freqTable = new frequencyTable();
    A.forEach(element => freqTable.addElement (element));
    return Number.parseInt(freqTable.getUnpaired()[0]);
}

console.log(oddOccurrenciesInArray([0, 1, 2, 3, 4, 3, 2, 1, 0]));



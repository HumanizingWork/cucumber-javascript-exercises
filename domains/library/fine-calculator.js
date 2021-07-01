class FineCalculator {
    #finePerDay;

    constructor(finePerDay) {
        this.#finePerDay = finePerDay;
    }

    calculateFine(daysOverdue) {
        return this.#finePerDay * daysOverdue;
    }
}

module.exports = FineCalculator;

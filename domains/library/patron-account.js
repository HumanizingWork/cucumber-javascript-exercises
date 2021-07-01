class PatronAccount {
    name;
    #balance = 0;

    constructor(name) {
        this.name = name;
    }

    get balance() {
        return this.#balance;
    }

    chargeAccount(amount) {
        this.#balance += amount;
    }
}

module.exports = PatronAccount;
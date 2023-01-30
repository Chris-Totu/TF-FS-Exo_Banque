import { Account } from "./Account.js";
export class Savings extends Account {
    constructor(numAccount, balance, holder, dateLastDebit) {
        super(numAccount, balance, holder);
        this._dateLastDebit = dateLastDebit;
    }
    // Getters
    get dateLastDebit() {
        return this._dateLastDebit;
    }
    // Méthods
    debit(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        if (amount > this._balance) {
            throw new Error("Amount is too high");
        }
        this._balance -= amount;
        this._dateLastDebit = new Date();
    }
    applyInterest() {
        const interest = this._balance * 0.03;
    }
    toString() {
        return super.toString() + ' [TYPE COMPTE EPARGNE]';
    }
}

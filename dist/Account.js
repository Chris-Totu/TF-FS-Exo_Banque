export class Account {
    constructor(numAccount, balance, holder) {
        this._numAccount = numAccount;
        this._balance = balance;
        this._holder = holder;
    }
    //Getters
    get balance() {
        return this._balance;
    }
    get holder() {
        return this._holder;
    }
    get numAccount() {
        return this._numAccount;
    }
    //Setters
    set holder(newHolder) {
        this._holder = newHolder;
    }
    // Méthodes
    deposit(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        this._balance += amount;
    }
    debit(amount) {
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        this._balance -= amount;
    }
    applyInterest(interest) {
    }
    toString() {
        return `Compte de ${this._holder.toString()} | Numéro de compte : ${this._numAccount} | Solde : ${this._balance}`;
    }
}

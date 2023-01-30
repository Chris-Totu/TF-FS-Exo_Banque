export class Account {
    constructor(numAccount, balance, holder) {
        this._numAccount = numAccount;
        this._balance = balance;
        this._holder = holder;
    }
    //Getters
    getNumAccount() {
        return this._numAccount;
    }
    getBalance() {
        return this._balance;
    }
    getHolder() {
        return this._holder;
    }
    //Setters
    setHolder(holder) {
        this._holder = holder;
    }
    //Methods
    deposit(amount) {
        if (amount < 0) { }
        else {
            this._balance += amount;
        }
    }
    removing(amount) {
        if (this._balance - amount < 0) {
            alert('Credit insufisant');
        }
        else {
            this._balance -= amount;
        }
    }
    toString() {
        return `Compte de ${this._holder.toString()} | Numéro de compte : ${this._numAccount} | Solde : ${this._balance}`;
    }
}

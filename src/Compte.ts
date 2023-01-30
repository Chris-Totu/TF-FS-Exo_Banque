import { Person } from "./Personne";

export class Account{
    protected _numAccount: string;
    protected _balance: number;
    protected _holder: Person;

    constructor(numAccount: string, balance: number, holder: Person){
        this._numAccount = numAccount;
        this._balance = balance;
        this._holder = holder;
    }

    //Getters
    getNumAccount(){
        return this._numAccount;
    }

    getBalance(){
        return this._balance;
    }

    getHolder(){
        return this._holder;
    }

    //Setters
    setHolder(holder : Person){
        this._holder = holder;
    }

    
    //Methods
    deposit(amount: number){
        if (amount < 0){}
        else{this._balance += amount;}
    }

    removing(amount: number){
        if (this._balance - amount < 0) {
            alert('Credit insufisant');
        }
        else{
            this._balance -= amount;
        }
    }

    toString(){
        return `Compte de ${this._holder.toString()} | Numéro de compte : ${this._numAccount} | Solde : ${this._balance}`
    }
}
import { Account } from "./Account.js";
import { Person } from "./Person.js";

export class Savings extends Account{
    private _dateLastDebit: Date;

    constructor(numAccount: string, balance: number, holder: Person, dateLastDebit: Date){
        super(numAccount, balance, holder);
        this._dateLastDebit = dateLastDebit;
    }

    // Getters
    public get dateLastDebit() : Date {
        return this._dateLastDebit;
    }
    
    // Méthods
	debit(amount: number) {
		if (amount < 0) {
			throw new Error("Amount must be positive");
		}

		if (amount > this._balance) {
			throw new Error("Amount is too high");
		}

		this._balance -= amount;
		this._dateLastDebit = new Date();
	}

	applyInterest(){
		const interest = this._balance * 0.03;
	}

    toString(): string {
        return super.toString() + ' [TYPE COMPTE EPARGNE]';
    }
}
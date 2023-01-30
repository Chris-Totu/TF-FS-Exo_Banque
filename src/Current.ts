import {Person} from "./Person.js";
import {Account} from "./Account.js";

export class Current extends Account{
    private _minLimitCredit: number; //Limite négative du solde sur compte courant.

    constructor(numAccount: string, balance: number, holder: Person, minLimitCredit: number){
        super(numAccount, balance, holder);

        if (balance < minLimitCredit) {
			throw new RangeError("Balance must be greater than credit line");
			// throw { errorMessage: "Ceci est une erreur" };
		}

		if (minLimitCredit < 0) {
			throw new RangeError("Credit line must be positive");
		}

		this._minLimitCredit = minLimitCredit;
        //autre:
        //this._minLimitCredit = minLimitCredit < 0 ? 0 : minLimitCredit;

    }    

    // Getters
    public get minLimitCredit() {
        return this._minLimitCredit;
    }
    
    //Setters
    public set minLimitCredit(newLimitCredit: number) {
        if (newLimitCredit < 0) {
			throw new Error ("Credit line must be positive");
		}
		this._minLimitCredit = newLimitCredit;
    }
    
    
    //Methods
    debit(amount: number){
        if (amount < 0) {
			throw new Error("Amount must be positive");
		}

		if (amount > this._balance + this._minLimitCredit) {
			throw new Error("Debit impossible, amount to high");
		}

		this._balance -= amount;
	}

    applyInterest(){
		const interest = (this._balance > 0) ? this._balance * 0.015 : this._balance * 0.04;
		this.deposit(interest);
	}

    toString(): string {
        return super.toString() + ' [TYPE COMPTE COURANT]';
    }

}
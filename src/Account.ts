import { Person } from "./Person";

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
	public get balance(){
		return this._balance;
	}

	public get holder(){
		return this._holder;
	}

    public get numAccount(){
		return this._numAccount;
	}
    //Setters
	public set holder(newHolder : Person) {
		this._holder = newHolder;
	}

	// Méthodes
	deposit(amount: number) {
		if (amount < 0) {
			throw new Error("Amount must be positive");
		}

		this._balance += amount;
	}

	debit(amount: number) {
		if (amount < 0) {
			throw new Error("Amount must be positive");
		}

		this._balance -= amount;
	}

	applyInterest(interest: number) {
	}
    
    toString(){
        return `Compte de ${this._holder.toString()} | Numéro de compte : ${this._numAccount} | Solde : ${this._balance}`
    }
}
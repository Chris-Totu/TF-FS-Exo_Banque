import {Person} from "./Personne.js";
import {Account} from "./Compte.js";

export class Current extends Account{
    private _minLimitCredit: number; //Limite négative du solde sur compte courant.

    constructor(numAccount: string, balance: number, holder: Person, minLimitCredit: number){
        super(numAccount, balance, holder);
        this._minLimitCredit = minLimitCredit < 0 ? 0 : minLimitCredit;
    }    

    //Getters
    getMinLimitCredit(){
        return this._minLimitCredit;
    }

    //Setters
    setMinLimitCredit(limit: number){
        if (isNaN(limit) || limit < 0) {
            throw new Error("Limite de credit doit etre un nombre positif.")
        }
        else{
            this._minLimitCredit = limit;
        }
    }

    //Methods
    removing(amount: number){
        if (this.getBalance() - amount < this._minLimitCredit) {
            alert("Impossible de retirer une somme en dessous de la limite de crédit.");
        }
        else{
            this._balance -= amount;
        }
    }

    toString(): string {
        return super.toString() + ' [TYPE COMPTE COURANT]';
    }

}
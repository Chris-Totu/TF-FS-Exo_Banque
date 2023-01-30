import { Account } from "./Compte.js";
import {Person} from "./Personne.js";

export class Savings extends Account{
    private _dateLastRemoval: Date;

    constructor(numAccount: string, balance: number, holder: Person, dateLastRemoval: Date){
        super(numAccount, balance, holder);
        this._dateLastRemoval = dateLastRemoval;
    }

    //Getters
    getDateLastRemoval(){
        return this._dateLastRemoval;
    }

    toString(): string {
        return super.toString() + ' [TYPE COMPTE EPARGNE]';
    }
}
import { Account } from "./Compte.js";
export class Savings extends Account {
    constructor(numAccount, balance, holder, dateLastRemoval) {
        super(numAccount, balance, holder);
        this._dateLastRemoval = dateLastRemoval;
    }
    //Getters
    getDateLastRemoval() {
        return this._dateLastRemoval;
    }
    toString() {
        return super.toString() + ' [TYPE COMPTE EPARGNE]';
    }
}

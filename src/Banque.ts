import { Account } from "./Compte.js";
import {Current} from "./Courant.js";
import {Savings} from "./Epargne.js";
import {Person} from "./Personne.js";

export class Bank{
    private _nameBank: string;
    private _accounts: Account[];

    constructor(nameBank: string){
        this._nameBank = nameBank;
        this._accounts = [];
    }

    //Methods
    //Ajout d'un compte à la banque.
    addAccount(account: Account){
        this._accounts.push(account);
    }

    //Renvoie les infos liés à un numero de compte (passé par 'numAccountLookFor') si il existe.
    getAccount(numAccountLookFor: string){
        let infosAccount: any;
        let isPresent: boolean = false;
        
        this._accounts.forEach(account => {
            if (account.getNumAccount() === numAccountLookFor) {
              isPresent = true;
              infosAccount = account;
            }
          });

        if (isPresent) {
            return infosAccount;
        }
        else {
            alert(`Aucun compte avec le numéro ${numAccountLookFor} dans la banque.`);
        }
    }

    //Renvoie la somme des soldes positifs des comptes appartenant au titulaire.
    getSumAccounts(holder: Person){
        let sum: number = 0;
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i].getHolder() == holder && this._accounts[i].getBalance() > 0) {
                sum += this._accounts[i].getBalance();
            }
        }

        return sum;
    }


    toString(){
        let allAccounts: string = "";
        
        for (let i = 0; i < this._accounts.length; i++) {
            allAccounts += this._accounts[i].toString() + '\n';
        }
        
        return `La banque "${this._nameBank}" a ${this._accounts.length} ${this._accounts.length > 1 ? "comptes" : "compte"} à son actif.\n${allAccounts}`
    }
}
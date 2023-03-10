import { Account } from "./Account.js";
import {Current} from "./Current.js";
import {Savings} from "./Saving.js";
import {Person} from "./Person.js";

export class Bank{
    private _nameBank: string;
    private _accounts: Account[];

    constructor(nameBank: string){
        this._nameBank = nameBank;
        this._accounts = [];
    }
    // Propriétés
    public get name() {
        return this._nameBank;
    }

    // Méthodes
    public getAccount(accountNumber: string) {
        const account = this._accounts.find((account) => {
            return account.numAccount === accountNumber;
        });

        if (!account) {
            throw new Error("Account not found");
        }

        return account;
    }

    public addAccount(account: Account) {
        // Recherche d'un compte ayant le numéro de compte
        const accountExist = this._accounts.find((currentAccount) => {
            return currentAccount.numAccount === account.numAccount;
        });

        if (accountExist) {
            throw new Error("Account already exist");
        }

        this._accounts.push(account);
    }

    public sumBalanceAccount(owner: Person) {
        const sumBalance = this._accounts.reduce((total, account) => {
            if (account.holder === owner && account.balance > 0) {
                total += account.balance;
            }

            return total;
        }, 0);

        return sumBalance;
    }

    calculInterest(interst: number) {
        for (const account of this._accounts) {
            account.applyInterest(interst);
        }
    }

    //<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//
    //<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//
    // //Methods
    // //Ajout d'un compte à la banque.
    // addAccount(account: Account){
    //     this._accounts.push(account);
    // }

    // //Renvoie les infos liés à un numero de compte (passé par 'numAccountLookFor') si il existe.
    // getAccount(numAccountLookFor: string){
    //     let infosAccount: any;
    //     let isPresent: boolean = false;
        
    //     this._accounts.forEach(account => {
    //         if (account.getNumAccount() === numAccountLookFor) {
    //           isPresent = true;
    //           infosAccount = account;
    //         }
    //       });

    //     if (isPresent) {
    //         return infosAccount;
    //     }
    //     else {
    //         alert(`Aucun compte avec le numéro ${numAccountLookFor} dans la banque.`);
    //     }
    // }

    // //Renvoie la somme des soldes positifs des comptes appartenant au titulaire.
    // getSumAccounts(holder: Person){
    //     let sum: number = 0;
    //     for (let i = 0; i < this._accounts.length; i++) {
    //         if (this._accounts[i].getHolder() == holder && this._accounts[i].getBalance() > 0) {
    //             sum += this._accounts[i].getBalance();
    //         }
    //     }

    //     return sum;
    // }
    //<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//
    //<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//<>//


    toString(){
        let allAccounts: string = "";
        
        for (let i = 0; i < this._accounts.length; i++) {
            allAccounts += this._accounts[i].toString() + '\n';
        }
        
        return `La banque "${this._nameBank}" a ${this._accounts.length} ${this._accounts.length > 1 ? "comptes" : "compte"} à son actif.\n${allAccounts}`
    }
}
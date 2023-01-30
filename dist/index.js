import { Person } from "./Person.js";
import { Current } from "./Current.js";
import { Bank } from "./Bank.js";
import { Savings } from "./Saving.js";
//création de deux personnes:
const person1 = new Person('Debris', 'Julien', new Date('2001-01-01'));
const person2 = new Person('Chiah', 'Julie', new Date('1996-01-01'));
//création de trois comptes courants:
const accountDebris_1 = new Current('BE060635', 5000000, person1, 0);
const accountDebris_2 = new Current('BE666666', 2000000, person1, 0);
const accountChiah_1 = new Current('BE0010203', 10, person2, 10);
//création de deux comptes épargnes:
const savingAccDebris = new Savings('BE00001', 5000, person1, new Date('2023-28-28'));
const savingAccChiah = new Savings('BE00002', 10000, person2, new Date('2023-02-02'));
//Affichage des infos des trois comptes courants:
console.log(accountDebris_1.toString());
console.log(accountChiah_1.toString());
console.log(accountDebris_2.toString());
//Affichage des infos des deux comptes épargnes:
console.log(savingAccDebris.toString());
console.log(savingAccChiah.toString());
//création d'une banque:
const belfius = new Bank('Belfius');
//Affichage infos Banque Belfius
console.log(belfius.toString());
//Ajout des trois comptes courants à la banque:
belfius.addAccount(accountDebris_1);
belfius.addAccount(accountDebris_2);
belfius.addAccount(accountChiah_1);
//Ajout des deux comptes épargnes à la banque:
belfius.addAccount(savingAccDebris);
belfius.addAccount(savingAccChiah);
//Affichage infos Banque Belfius:
console.log(belfius.toString());
//Affichage des infos du compte 'BE060635' dans la banque Belfius:
let accountTest = 'BE060635';
console.log('Infos compte BE060635 : \n' + belfius.getAccount(accountTest));
//Affichage de la somme des soldes positifs des comptes appartenant au titulaire Debris Julien:
console.log('Somme soldes Debris Julien: ' + belfius.sumBalanceAccount(person1));
//Test retrait de 7M sur le compte courant de chiah:
console.log(`-ok ici-`);
accountChiah_1.debit(7000000);

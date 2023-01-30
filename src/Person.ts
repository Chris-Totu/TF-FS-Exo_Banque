export class Person{
    private _name: string;
    private _surname: string;
    private _birthDate: Date;

    constructor(name: string, surname: string, birthDate: Date){
        this._name = name;
        this._surname = surname;
        this._birthDate = birthDate;
    }

    toString(){
        return `${this._name} - ${this._surname}`;
    }

}
export class Person {
    constructor(name, surname, birthDate) {
        this._name = name;
        this._surname = surname;
        this._birthDate = birthDate;
    }
    toString() {
        return `${this._name} - ${this._surname}`;
    }
}

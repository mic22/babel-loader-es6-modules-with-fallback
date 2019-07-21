export class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    setName(name) {
        this.name = name;
    }

    toString() {
        const { name, surname } = this;

        return `${name} ${surname}`;
    }
}
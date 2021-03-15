class Customer {

    constructor(name, phone, email) {
        this._name = name;
        this._phone = phone;
        this._email = email;

        Object.freeze(this);
    }

    get name() {
        return this._name;
    }

    get phone() {
        return this._phone;
    }

    get email() {
        return this._email;
    }


}
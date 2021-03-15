class CustomersList {

    constructor() {
        this._customers = []
    }

    addCustomer(customer) {
        this._customers.push(customer);
    }

    get customers() {
        return [].concat(this._customers)
    }

    erase() {
        this._customers = [];
    }
}
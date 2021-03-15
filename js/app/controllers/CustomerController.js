class CustomerController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputName = $('#customer-name')
        this._inputPhone = $('#customer-phone')
        this._inputEmail = $('#customer-email')

        this._customerList = new CustomersList();

        this._customerView = new CustomerView($('#customerView'));

    }

    addCustomer(event) {
        event.preventDefault();

        this._customerList.addCustomer(this._createCustomer());
        this._clearForm();
        this._customerView.update(this._customerList);

    }

    deleteCustomer() {

        this._customerList.erase();
        this._customerView.update(this._customerList);

    }

    _createCustomer() {
        return new Customer(this._inputName.value,
            this._inputPhone.value,
            this._inputEmail.value)
    }

    _clearForm() {

        this._inputName.value = '';
        this._inputPhone.value = '';
        this._inputEmail.value = '';

        this._inputName.focus();
    }

}
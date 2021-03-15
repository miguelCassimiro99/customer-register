class CustomerView {

    constructor(element) {
        this._element = element;
    }

    template(model) {
            return `
          <table class="table">
          <thead>
              <tr>
                  <th>NAME</th>
                  <th>PHONE</th>
                  <th>EMAIL</th>
              </tr>
          </thead>
          <tbody>
            ${model.customers.map(c => `
                <tr>
                  <td>${c.name}</td>
                  <td>${c.phone}</td>
                  <td>${c.email}</td>
                </tr>
              `).join('')}
          </tbody>
        </table>
    `
  }

  update(model) {
    this._element.innerHTML = this.template(model);
  }
}
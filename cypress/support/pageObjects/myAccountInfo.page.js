class MyAccountInfoPage {

    get editButton() {
        return cy.get('.btnEditar.btn.btn01');
    }

    get cancelButton() {
        return cy.get('.btn.btn02.btnCancelar');
    }

    get saveButton() {
        return cy.get('.btn.btn01');
    }

    get firstNameInput() {
        return cy.get('[name="txtNombre"]');
    }

    get lastNameInput() {
        return cy.get('[name="txtApellido"]');
    }

    get successMessage() {
        return cy.get('.msg.ok').contains('Datos guardados correctamente.');
    }

    edit(firstName, lastName) {
        this.editButton.click();
        this.firstNameInput.clear();
        this.firstNameInput.type(firstName);
        this.lastNameInput.clear();
        this.lastNameInput.type(lastName);
        this.saveButton.click();
      }
}

export default new MyAccountInfoPage();
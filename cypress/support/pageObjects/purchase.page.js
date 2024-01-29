

class Purchase {

    get purchaseButton() {
        return cy.get('a.btn.btn01.btnFinalizar')
    }

    get continueButton() {
        return cy.get('button.btn.btn01.btnContinuar')
    }

    get addAddressButton() {
        return cy.get('a.btnAgregar')
    }

    get countryButton() {
        return cy.get('select[name="cboPais"]')
    }
    
    get departmentButton() {
        return cy.get('select[name="cboDepartamento"]')
    }

    get locationButton() {
        return cy.get('select[name="cboLocalidad"]')
    }

    get addressInput() {
        return cy.get('input[name="txtCalle"]')
    }

    get portNumberInput() {
        return cy.get('input[name="txtNumeroPuerta"]')
    }

    get saveAddressButton() {
        return cy.get('button.btn.btn01.btnGuardar')
    }
    
    get abitabPaidMethod() {
        return cy.get('span.nom').contains('Abitab')
    }

    get finalizePurchase() {
        return cy.get('button[type="submit"].btn.btn04.btnFinalizar')
    }

    newPurchase = () => {
        this.purchaseButton.click()
        this.continueButton.click()
    }

}

export default new Purchase;
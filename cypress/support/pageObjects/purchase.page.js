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

    get continuePurchaseButton() {
        return cy.get('button.btnContinuar')
    }

    newPurchase = (purchaseData) => {
        this.purchaseButton.click();
        this.continueButton.click();
        this.addAddressButton.click();
        this.countryButton.select(purchaseData.country);
        this.departmentButton.select(purchaseData.department);
        this.locationButton.select(purchaseData.location);
        this.addressInput.type(purchaseData.address);
        this.portNumberInput.type(purchaseData.number);
        this.saveAddressButton.click({ multiple: true }, {force: true});
        this.continuePurchaseButton.click();
        this.abitabPaidMethod.click();
        this.continueButton.click({ multiple: true });
    };    
}

export default new Purchase;
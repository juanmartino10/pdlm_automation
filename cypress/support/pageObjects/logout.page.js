class Logout {

    get AccountButton() {
        return cy.get('[aria-label="Mi cuenta"]')
    }

    get LogoutButton() {
        return cy.get('a.tit:contains("Salir")')
    }

    newLogout = () => {
        this.AccountButton.click()
        this.LogoutButton.first().click()
    }

}

export default new Logout()
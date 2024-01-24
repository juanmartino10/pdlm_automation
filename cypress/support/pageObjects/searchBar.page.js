class SearchBar {

    getSearchBarButton() {
        return cy.get('.btnMostrarBuscador')
    }

    getSearchBarInput() {
        return cy.get('.tt-input')
    }

    getDeclineNotification() {
        return cy.get('#btnNoIdWpnPush');
    }

    newSearch = (instrument) => {
        this.getDeclineNotification().click()
        this.getSearchBarButton().click()
        this.getSearchBarInput().type(instrument + '{enter}')
    }
}

export default new SearchBar();
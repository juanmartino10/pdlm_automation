class SearchBar {

    get SearchBarButton() {
        return cy.get('.btnMostrarBuscador')
    }

    get SearchBarInput() {
        return cy.get('.tt-input')
    }

    get DeclineNotification() {
        return cy.get('#btnNoIdWpnPush');
    }

    newSearch = (instrument) => {
        this.DeclineNotification.click()
        this.SearchBarButton.click()
        this.SearchBarInput.type(instrument + '{enter}')
    }
}

export default new SearchBar();
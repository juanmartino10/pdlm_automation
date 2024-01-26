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
        this.DeclineNotification.click({force: true})
        this.SearchBarInput.click().type(instrument + '{enter}')
    }
}

export default new SearchBar();
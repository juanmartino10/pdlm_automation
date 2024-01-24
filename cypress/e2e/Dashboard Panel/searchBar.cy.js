import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import searchBarPage from "../../support/pageObjects/searchBar.page";

describe("Check search bar functionality", () => {

    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
    });

    it("Search Drums", () => {
        const instrument = "Bateria"
        searchBarPage.newSearch(instrument)
        cy.get('#catalogoProductos').should('include.text', 'Batería'); 

    });

    it("Search Guitar", () => {
        const instrument = "Guitarra"
        searchBarPage.newSearch(instrument)
        cy.get('#catalogoProductos').should('include.text', 'Guitarra'); 
    });

    it("Search Piano", () => {
        const instrument = "Piano"
        searchBarPage.newSearch(instrument)
        cy.get('#catalogoProductos').should('include.text', 'Piano'); 
    });
})
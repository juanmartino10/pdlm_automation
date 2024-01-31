import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import searchBarPage from "../../support/pageObjects/searchBar.page";
import productInStorePage from "../../support/pageObjects/productInStore.page";


describe("Purchase suite", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
    });

    it("@Smoke - Locate product in store", () => {
        const instrument = "Guitarra Ibañez";
        searchBarPage.newSearch(instrument);
        productInStorePage.locateProduct();
        productInStorePage.branchOffices.should('have.length.greaterThan', 0);
    })
})
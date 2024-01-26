import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import logoutPage from "../../support/pageObjects/logout.page";

describe("Logout TestSuite", () => {

    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
    });

    it("Success logout", () => {
        logoutPage.newLogout()
        logoutPage.AccountButton.find('.nombre, .apellido').should('not.be.visible');
    })
})
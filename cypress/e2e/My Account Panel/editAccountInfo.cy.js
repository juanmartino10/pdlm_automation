import LoginPage from "../../support/pageObjects/login.page.js";
import loginData from "../../test-data/login.js";
import HomePage from "../../support/pageObjects/home.page.js"
import deepLinks from "../../test-data/deepLinks.js";
import EditAccountInfoData from "../../test-data/editAccountInfo.js";
import MyAccountInfoPage from "../../support/pageObjects/myAccountInfo.page.js";

describe("Edit Account Information", () => {

    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
    });

    it("@Smoke - Edit first name and last name account", () => {
        HomePage.myAccountOptionsButtonPostLogin.click({ multiple: true, force: true });
        HomePage.myDataButton.click({ multiple: true, force: true });
        MyAccountInfoPage.edit(EditAccountInfoData.firstName, EditAccountInfoData.lastName);
        cy.url().should("eq", deepLinks.linkPostEditAccountInfo);
        MyAccountInfoPage.successMessage.should('be.visible');
    });
})
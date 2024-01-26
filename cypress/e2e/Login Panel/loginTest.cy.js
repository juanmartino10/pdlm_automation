import loginPage from "../../support/pageObjects/login.page";
import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";

describe("Login TestSuite", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it("@Smoke - Success Login", () => {
    LoginPage.login(loginData.validEmail, loginData.validPassword);
  });

  it("@Smoke - Invalid Login", () => {
    LoginPage.login(loginData.invalidEmail, loginData.validPassword);
    loginPage.MessageError.should('be.visible')
  });

});
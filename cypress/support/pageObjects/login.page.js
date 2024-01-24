class LoginPage {

  getAsideButton() {
    return cy.get('#btnMainMenuMobile');
  }

  getAccountButton() {
    return cy.get('a.btnItem.btnMiCuenta');
  }
    getEmailInput () {
      return cy.get('input[name="txtEmail"]');
    }
  
    getPasswordInput () {
      return cy.get('input[name="txtPassword"]');
    }
  
    getLoginButton() {
      return cy.get('button.btnIngresar');
    }

    getMessageError() {
      return cy.get('div.msg.err p')
    }
  
    login(email, password) {
      this.getAsideButton().click()
      this.getAccountButton().click({ force: true, multiple: true });
      this.getEmailInput().type(email)
      this.getPasswordInput().type(password);
      this.getLoginButton().click({ multiple: true });
    }
  }
  
  export default new LoginPage();
class LoginPage {

  get AsideButton() {
    return cy.get('#btnMainMenuMobile');
  }

  get AccountButton() {
    return cy.get('a.btnItem.btnMiCuenta');
  }
    get EmailInput () {
      return cy.get('input[name="txtEmail"]');
    }
  
    get PasswordInput () {
      return cy.get('input[name="txtPassword"]');
    }
  
    get LoginButton() {
      return cy.get('button.btnIngresar');
    }

    get MessageError() {
      return cy.get('div.msg.err p')
    }
  
    login(email, password) {
      this.AsideButton.click()
      this.AccountButton.click({ force: true, multiple: true });
      this.EmailInput.type(email)
      this.PasswordInput.type(password);
      this.LoginButton.click({ multiple: true });
    }
  }
  
  export default new LoginPage();
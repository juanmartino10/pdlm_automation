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

    get loginWithFacebookButton() {
      return cy.get('.btn.btnLoginFacebook');
    }

    get loginWithGoogleButton() {
      return cy.get('.btn.btnLoginGoogle');
    }

    get loginWithoutPasswordButton() {
      return cy.get('.btn.btn02.btnLoginPIN');
    }

    get forgotPasswordButton() {
      return cy.get('.btnOlvideContrasena');
    }

    get registerNewAccountButton() {
      return cy.get('.btnCrearCuenta');
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
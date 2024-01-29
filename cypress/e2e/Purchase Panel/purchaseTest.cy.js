import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import cartPage from "../../support/pageObjects/cart.page";
import searchBarPage from "../../support/pageObjects/searchBar.page";
import purchasePage from "../../support/pageObjects/purchase.page";
import purchaseData from "../../test-data/purchaseData"


describe("Purchase suite", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
    });

    it("@Smoke - Purchase flow", () => {
        const instrument = "Bateria Mapex";
        searchBarPage.newSearch(instrument);
        cartPage.addToCartUsingSearchBar();
        purchasePage.newPurchase()
        purchasePage.addAddressButton.click()
        purchasePage.countryButton.select(purchaseData.country)
        purchasePage.departmentButton.select(purchaseData.department)
        purchasePage.locationButton.select(purchaseData.location)
        purchasePage.addressInput.type(purchaseData.address)
        purchasePage.portNumberInput.type(purchaseData.number)
        purchasePage.saveAddressButton.click()
        purchasePage.continueButton.click({ multiple: true })
        purchasePage.abitabPaidMethod.click()
        purchasePage.continueButton.click({ multiple: true })
        purchasePage.finalizePurchase.should('be.visible')
    });
})
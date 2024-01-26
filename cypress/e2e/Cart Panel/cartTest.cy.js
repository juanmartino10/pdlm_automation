import LoginPage from "../../support/pageObjects/login.page";
import loginData from "../../test-data/login";
import cartPage from "../../support/pageObjects/cart.page";
import searchBarPage from "../../support/pageObjects/searchBar.page";

describe("Cart suite", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
    });

    it("Add product to cart using search bar", () => {
        const instrument = "Bateria Mapex";
        searchBarPage.newSearch(instrument);
        cartPage.addToCartUsingSearchBar();
        cartPage.externalShoppingCartOpened.should('contain.text', instrument);
    });

    it("Add product to cart using catalog button", () => {
        const category = "Guitarras y Bajos";
        let currentCartItemCount;
        cartPage.externalShoppingCartOpened.invoke('text').then((text) => {
            currentCartItemCount = parseInt(text.trim());
        });
        cartPage.addToCartUsingCatalogButton(category);
        cartPage.cartWithItem.should('exist').and('not.be.empty');
    });
    
});

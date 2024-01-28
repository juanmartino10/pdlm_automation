import homePage from "./home.page";

class Cart {
    get cardItem() {
        return cy.get('div.it');
    }

    get purchaseButton() {
        return cy.get('#btnComprar.btn01');
    }

    get keepBuyingButton() {
        return cy.get('.btnCerrar.btn02');
    }

    get categoryList() {
        return cy.get('.lstStd label.it');
    }

    get cartWithItem() {
        return cy.get('.row.producto');
    }

    get externalCartButton() {
        return homePage.shoppingCartButton;
    }

    get externalCatalogButton() {
        return homePage.catalogDesktopButton;
    }

    get externalShoppingCartOpened() {
        return homePage.shoppingCartOpened;
    }

    get deleteItemButton() {
        return cy.get('button.btnQuitar')   
    }

    addToCartUsingSearchBar = () => {
        this.cardItem.first().click();
        this.purchaseButton.click();
        this.keepBuyingButton.click();
        this.externalCartButton.click();
    }

    addToCartUsingCatalogButton = (categoryName) => {
        this.externalCatalogButton.click();
        this.categoryList.contains('.tit', categoryName).parent('label.it').click();
        this.cardItem.first().click();
        this.purchaseButton.click()
        this.keepBuyingButton.click();
        this.externalCartButton.click();
    }
}

export default new Cart();

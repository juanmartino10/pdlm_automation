import cartPage from "./cart.page";

class ProductInStore {

    get locateInStoreButton() {
        return cy.get('#btnUbicarTienda')
    }

    get branchOffices() {
        return cy.get('div.stockContent');
    }

    get externalCardItem() {
        return cartPage.cardItem;
    }

    locateProduct = () => {
        this.externalCardItem.first().click()
        this.locateInStoreButton.click()
    }

}

export default new ProductInStore;
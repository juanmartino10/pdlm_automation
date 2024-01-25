class SearchBar {
    
    get myAccountOptionsButton() {
        return cy.get('.btnItem.btnMiCuenta')
    }

    get myDataButton() {
        return cy.get('[href="/mi-cuenta/mis-datos"]');
    }

    get myAddressButton() {
        return cy.get('[href="/mi-cuenta/direcciones"]');
    }

    get myPurchasesButton() {
        return cy.get('[href="/mi-cuenta/compras"]');
    }

    get wishListButton() {
        return cy.get('[href="/mi-cuenta/wish-list"]');
    }

    get logOutButton() {
        return cy.get('[href="/salir"]');
    }

    get shoppingCartButton() {
        return cy.get('.btnItem.btnMiCompra');
    }

    get helpButton() {
        return cy.get('.ayuda.toolsItem');
    }

    get changeCurrencyButton() {
        return cy.get('.cambioMoneda');
    }

    get uyuCurrencyActivated() {
        return cy.get('.it.cambioMonedaWrapper.on');
    }

    get usdCurrencyActivated() {
        return cy.get('.it.cambioMonedaWrapper.on');
    }

    get storesButton() {
        return cy.get('#tiendas');
    }

    get catalogDesktopButton() {
        return cy.get('.it.catalogo.fn-desktopOnly');
    }

    get guitarsAndBasesPictureLink() {
        return cy.get('[data-id="51"]');
    }

    get keyboardsPictureLink() {
        return cy.get('[data-id="52"]');
    }

    get activeBoxesPictureLink() {
        return cy.get('[data-id="362"]');
    }

    get cdAndVinylPictureLink() {
        return cy.get('[data-id="54"]');
    }

    get headphonesPictureLink() {
        return cy.get('[data-id="55"]');
    }

    get accessoriesPictureLink() {
        return cy.get('[data-id="56"]');
    }

    get percussionPictureLink() {
        return cy.get('[data-id="57"]');
    }

    get proAudioPictureLink() {
        return cy.get('[data-id="58"]');
    }

    get homeAudioPictureLink() {
        return cy.get('[data-id="59"]');
    }

    get ukulelePictureLink() {
        return cy.get('[data-id="60"]');
    }

    get illuminationPictureLink() {
        return cy.get('[data-id="61"]');
    }

    get djAndProductionPictureLink() {
        return cy.get('[data-id="62"]');
    }
}

export default new SearchBar();
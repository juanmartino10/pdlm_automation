import LoginPage from "../../support/pageObjects/login.page.js";
import loginData from "../../test-data/login";
import HomePage from "../../support/pageObjects/home.page.js"
import deepLinks from "../../test-data/deepLinks.js";
import baseLinks from "../../test-data/baseLinks.js";

describe("Check redirect buttons", () => {

    beforeEach(() => {
        cy.visit("/");
        LoginPage.login(loginData.validEmail, loginData.validPassword);
    });

    it("@Smoke - Check Catalog button", () => {
        HomePage.catalogDesktopButton.click();
        cy.url().should("eq", baseLinks.catalogUrl);
    });

    it("@Smoke - Check Blog button", () => {
        HomePage.blogButton.click();
        cy.url().should("eq", deepLinks.blogUrl);
    });

    it("@Smoke - Check Brands button", () => {
        HomePage.brandsButton.click();
        cy.url().should("eq", deepLinks.brandsUrl);
    });

    it("@Smoke - Check Stores button", () => {
        HomePage.storesButton.click();
        cy.url().should("include", deepLinks.storesUrl);
    });

    it("@Smoke - Check Shopping Cart button", () => {
        HomePage.shoppingCartButton.click();
        HomePage.shoppingCartOpened.should('be.visible');
    });

    it("@Smoke - Check Guitars and Bases Picture button", () => {
        HomePage.guitarsAndBasesPictureLink.click();
        cy.url().should("eq", deepLinks.guitarsAndBasesUrlFromHomePictureLink);
    });

    it("@Smoke - Check Keyboards Picture button", () => {
        HomePage.keyboardsPictureLink.click();
        cy.url().should("eq", deepLinks.keyboardsUrlFromHomePictureLink);
    });

    it("@Smoke - Check Active Boxes Picture button", () => {
        HomePage.activeBoxesPictureLink.click();
        cy.url().should("eq", deepLinks.activeBoxesUrlFromHomePictureLink);
    });

    it("@Smoke - Check CD and Vinyls Picture button", () => {
        HomePage.cdAndVinylPictureLink.click();
        cy.url().should("eq", deepLinks.cdAndVinylUrlFromHomePictureLink);
    });

    it("@Smoke - Check Headphones Picture button", () => {
        HomePage.headphonesPictureLink.click();
        cy.url().should("eq", deepLinks.headphonesUrlFromHomePictureLink);
    });

    it("@Smoke - Check Accesories Picture button", () => {
        HomePage.accessoriesPictureLink.click();
        cy.url().should("eq", deepLinks.accesoriesUrlFromHomePictureLink);
    });

    it("@Smoke - Check Percussion Picture button", () => {
        HomePage.percussionPictureLink.click();
        cy.url().should("eq", deepLinks.percussionInstrumentsUrlFromHomePictureLink);
    });

    it("@Smoke - Check Pro Audio Picture button", () => {
        HomePage.proAudioPictureLink.click();
        cy.url().should("eq", deepLinks.proAudioUrlFromHomePictureLink);
    });

    it("@Smoke - Check Home Audio Picture button", () => {
        HomePage.homeAudioPictureLink.click();
        cy.url().should("eq", deepLinks.homeAudioUrlFromHomePictureLink);
    });

    it("@Smoke - Check Ukuleles Picture button", () => {
        HomePage.ukulelePictureLink.click();
        cy.url().should("eq", deepLinks.ukulelesUrlFromHomePictureLink);
    });

    it("@Smoke - Check Illumination Picture button", () => {
        HomePage.illuminationPictureLink.click();
        cy.url().should("eq", deepLinks.illuminationUrlFromHomePictureLink);
    });

    it("@Smoke - Check DJ and Production Picture button", () => {
        HomePage.djAndProductionPictureLink.click();
        cy.url().should("eq", deepLinks.djAndProductionUrlFromHomePictureLink);
    });
})
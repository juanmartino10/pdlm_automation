import baseLinks from "../test-data/baseLinks.js";

const deepLinks = {
    blogUrl: `${baseLinks.baseUrl}/blog`,
    brandsUrl: `${baseLinks.baseUrl}/marcas`,
    storesUrl: `${baseLinks.baseUrl}/tiendas`,
    forgotPasswordUrl: `${baseLinks.baseUrl}/recuperar-contrasena`,

    //links from picture links - home
    guitarsAndBasesUrlFromHomePictureLink: `${baseLinks.baseUrl}/guitarras-y-bajos`,
    keyboardsUrlFromHomePictureLink: `${baseLinks.baseUrl}/teclados`,
    activeBoxesUrlFromHomePictureLink: `${baseLinks.baseUrl}/audio-pro/cajas-acusticas-activas`,
    cdAndVinylUrlFromHomePictureLink: `${baseLinks.baseUrl}/cds-y-vinilos`,
    headphonesUrlFromHomePictureLink: `${baseLinks.baseUrl}/auriculares`,
    accesoriesUrlFromHomePictureLink: `${baseLinks.catalogUrl}?grp=59`,
    percussionInstrumentsUrlFromHomePictureLink: `${baseLinks.baseUrl}/instrumentos-de-percusion`,
    proAudioUrlFromHomePictureLink: `${baseLinks.catalogUrl}?grp=213`,
    homeAudioUrlFromHomePictureLink: `${baseLinks.baseUrl}/audio-domestico`,
    ukulelesUrlFromHomePictureLink: `${baseLinks.baseUrl}/ukeleles`,
    illuminationUrlFromHomePictureLink: `${baseLinks.baseUrl}/iluminacion`,
    djAndProductionUrlFromHomePictureLink: `${baseLinks.catalogUrl}?grp=212`,

    //links from catalog page
    guitarsAndBasesUrlFromCatalog: `${baseLinks.catalogUrl}/guitarras-y-bajos`,
    keyboardsUrlFromCatalog: `${baseLinks.catalogUrl}/teclados`,
    percussionInstrumentsUrlFromCatalog: `${baseLinks.catalogUrl}/percusion`,
    windInstrumentsUrlFromCatalog: `${baseLinks.catalogUrl}/instrumentos-de-viento`,
    cdAndVinylUrlFromCatalog: `${baseLinks.catalogUrl}/cds-y-vinilos`,
    stringInstrumentsUrlFromCatalog: `${baseLinks.catalogUrl}/instrumentos-de-cuerda`,
    djUrlFromCatalog: `${baseLinks.catalogUrl}/dj`,
    proAudioUrlFromCatalog: `${baseLinks.catalogUrl}/audio-pro`,
    homeAudioUrlFromCatalog: `${baseLinks.catalogUrl}/audio-domestico`,
    headphonesUrlFromCatalog: `${baseLinks.catalogUrl}/auriculares`,
  };
  
  export default deepLinks;
Feature('InvisibleElements');
let url = 'http://127.0.0.1:8000/login';
Before((I, locatorsForCRM)=>{
    I.amOnPage(url);
    locatorsForCRM.loginInCRM('salinko@dott.pro', 'salinko@dott.pro');
});

Scenario('invisible elements supervisor', (I, locatorsForCRM) => {
    let searchID = 'div.nav.navbar-brand';
    I.seeTextEquals('Поиск лида по ID', searchID);
    I.waitForElement('div.container.search-leads-container', 5);
    I.seeElement('div.container.search-leads-container');
    I.dontSeeElement(locatorsForCRM.locators.leftMenuAdmin);
    I.dontSeeElement(locatorsForCRM.locators.leftMenu_Autocall);
    I.dontSeeElement(locatorsForCRM.locators.leftMenu_Statistics);
    I.dontSeeElement(locatorsForCRM.locators.leftMenu_integration);
});

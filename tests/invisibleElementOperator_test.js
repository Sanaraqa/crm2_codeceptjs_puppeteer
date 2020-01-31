Feature('InvisibleElementOperator');
let url = 'http://127.0.0.1:8000/login';
Before((I, locatorsForCRM)=>{
    I.amOnPage(url);
    locatorsForCRM.loginInCRM('balahonova@dott.pro', 'balahonova@dott.pro');
});

Scenario('Invisible element operator', (I, locatorsForCRM) => {
    I.waitForElement('div.modal-content > div.timers-div', 5);
    I.seeElement('div.modal-content > div.timers-div');
    I.click("div.timers-div div.j-start-time.fa.fa-play");
    I.dontSeeElement(locatorsForCRM.locators.leftMenuAdmin);
    I.dontSeeElement(locatorsForCRM.locators.leftMenu_Statistics);
    I.dontSeeElement(locatorsForCRM.locators.leftMenu_integration);
    I.dontSeeElement(locatorsForCRM.locators.leftMenu_Supervisor);
});

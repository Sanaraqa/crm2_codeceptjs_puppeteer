Feature('Footer functionalityButton');
    let url = 'http://127.0.0.1:8000/login';
        Before((I, locatorsForCRM)=>{
            I.amOnPage(url);
                locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});

Scenario('find records', (I, locatorsForCRM) => {
            locatorsForCRM.footer();
            I.seeElement('#search_main-data-grid > div');
            I.click('#search_main-data-grid > div');
            I.seeElement('#searchmodfbox_main-data-grid');
});

/*xScenario('summary', (I, locatorsForCRM) => {
            locatorsForCRM.footer();
            I.seeElement('td#summary-data-button');
            I.click('td#summary-data-button');
            I.seeElement('div#summary-data-choice');
                I.click('#summary-data-choice > div:nth-child(2)');
                            I.waitForElement('body > div.grid-totals-modal.modal.ui-draggable.in > div > div', 5);
                            I.seeElement('body > div.grid-totals-modal.modal.ui-draggable.in > div > div');
                            I.click('body > div.grid-totals-modal.modal.ui-draggable.in > div > div > div.modal-header.ui-draggable-handle > button');
            I.click('td#summary-data-button');
            I.seeElement('div#summary-data-choice');
                I.click('#summary-data-choice > div:nth-child(1)');
                            I.seeElement('div#goods-totals-tbl_wrapper');
});*/

Scenario.only('хз тест', async (I, locatorsForCRM)=>{

    I.waitForElement(locatorsForCRM.locators.leftMainDivElement, 5);
    let allTextsFromMainLeftMenu = await I.grabTextFrom(locatorsForCRM.locators.leftMainDivElement);
    let leftMenuOnArr = allTextsFromMainLeftMenu.split('\n');
    console.log(leftMenuOnArr);
    if (leftMenuOnArr[0] === "Админ"){

    }
    

});
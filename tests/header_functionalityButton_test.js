Feature('Header functionalityButton');
    let url = 'http://127.0.0.1:8000/login';
    Before((I, locatorsForCRM)=>{
    I.amOnPage(url);
    locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});


Scenario('1. mass.sample', (I, locatorsForCRM) => {

    I.waitForElement(locatorsForCRM.locators.headMainElement, 5);
    I.seeElement(locatorsForCRM.locators.headMainElement);
    I.waitForElement('#grid-multi-filtr', 5); // элемент Масс.выборки
    I.seeElement('#grid-multi-filtr'); // элемент Масс.выборки
    I.click('#grid-multi-filtr');
    I.waitForElement('#multi-filtr-dialog',1);
    I.seeElement('#multi-filtr-dialog');

});


Scenario('2.right menu personal area test', async (I, locatorsForCRM)=>{
    I.waitForElement(locatorsForCRM.locators.headMainElement, 5);
    I.seeElement(locatorsForCRM.locators.headMainElement);
    I.seeElement(locatorsForCRM.locators.rightMenu_personalArea);

    const rights = await I.grabTextFrom('div.nav_menu > nav > ul');
    console.log(rights.split('\n'));
    const clickRight = rights.split('\n')[0].trim();

    I.click(clickRight, locatorsForCRM.locators.rightMenu_personalArea);
    I.waitForElement(locatorsForCRM.locators.rightMenu_openDropdownMenu, 1);
    I.click(locatorsForCRM.locators.personalArea);
    I.waitForNavigation();
    I.waitForElement(locatorsForCRM.locators.personalAreaMainElement, 5);
    I.seeElement(locatorsForCRM.locators.personalAreaMainElement);
});


Scenario('3.right menu bookmark', async (I, locatorsForCRM)=>{
    locatorsForCRM.rightMenu_userProfile();

    const rights = await I.grabTextFrom('div.nav_menu > nav > ul');
    console.log(rights.split('\n'));
    const clickRight = rights.split('\n')[0].trim();

    I.click(clickRight, locatorsForCRM.locators.rightMenu_personalArea);
    I.waitForElement(locatorsForCRM.locators.rightMenu_openDropdownMenu, 1);

    const allElementDropDown = await I.grabTextFrom(locatorsForCRM.locators.rightMenu_openDropdownMenu);
    console.log(allElementDropDown.split('\n'));
    const bookmarkLocator = allElementDropDown.split('\n')[2].trim();

    if(bookmarkLocator === 'ЗАКЛАДКИ'){
        I.click(bookmarkLocator);
        I.waitForNavigation();
        I.waitForElement(locatorsForCRM.locators.bookmarkBasicElement, 5);
        I.seeElement(locatorsForCRM.locators.bookmarkBasicElement);
    }

});


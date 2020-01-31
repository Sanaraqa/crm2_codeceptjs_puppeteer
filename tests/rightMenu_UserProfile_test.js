Feature('RightMenu UserProfile');
    let url = 'http://127.0.0.1:8000/login';
        Before((I, locatorsForCRM)=>{
            I.amOnPage(url);
                locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');


/*Scenario('Персональный кабинет', async (I, locatorsForCRM, rightMenuPageObject) => {

            locatorsForCRM.rightMenu_userProfile();


            I.waitForElement(rightMenuPageObject.mainLocatorsRightMenu.rightMenu_personalArea, 5);
            I.seeElement(rightMenuPageObject.mainLocatorsRightMenu.rightMenu_personalArea);
            I.click(rightMenuPageObject.mainLocatorsRightMenu.rightMenu_personalArea);
            I.waitForElement(rightMenuPageObject.mainLocatorsRightMenu.rightMenu_openDropdownMenu, 2);

            let grabsAllElements = await I.grabTextFrom(rightMenuPageObject.mainLocatorsRightMenu.rightMenu_openDropdownMenu);
            console.log(grabsAllElements);*/

   /* I.click(locatorsForCRM.locators.personalArea);
    I.waitForElement(locatorsForCRM.locators.rightMenu_openDropdownMenu, 1);
           I.waitForElement(rightMenuPO.locatorsPersonalArea.mainElementsPersonalArea_information, 5);
            I.seeElement(rightMenuPO.locatorsPersonalArea.mainElementsPersonalArea_information);
            I.waitForElement(rightMenuPO.locatorsPersonalArea.mainElementsPersonalArea_changePassword, 5);
            I.seeElement(rightMenuPO.locatorsPersonalArea.mainElementsPersonalArea_changePassword);*/
});

/*Scenario('settings', (I, locatorsForCRM) => {
            locatorsForCRM.rightMenu_userProfile();
                I.see('Настройки');
                I.click('body > div.container.body > div > div.top_nav > div.nav_menu > nav > ul > li.open > ul > li:nth-child(4)');
                    I.waitForNavigation();
                I.seeElement('body > div.container.body > div > div.right_col > div:nth-child(1)');
                I.seeElement('body > div.container.body > div > div.right_col > div:nth-child(2)');
});

Scenario ('reference', (I, locatorsForCRM)=>{
            locatorsForCRM.rightMenu_userProfile();
                I.see('Справка');
                I.waitForElement('body > div.container.body > div > div.top_nav > div.nav_menu > nav > ul > li.open > ul > li:nth-child(5)', 5);
                I.click('body > div.container.body > div > div.top_nav > div.nav_menu > nav > ul > li.open > ul > li:nth-child(5)');
                    I.waitForNavigation();
                I.seeElement('div.help-categories-block.col-md-3.col-sm-3.col-xs-12');

});

Scenario ('messages', (I, locatorsForCRM)=>{
            locatorsForCRM.rightMenu_userProfile();
                I.waitForElement('body > div.container.body > div > div.top_nav > div.nav_menu > nav > ul > li.open > ul > li:nth-child(6)', 5);
                I.see('Сообщения');
                I.click('body > div.container.body > div > div.top_nav > div.nav_menu > nav > ul > li.open > ul > li:nth-child(6)');
                    I.waitForNavigation();
                I.seeElement('div.messages-left-block');
                I.seeElement('div.messages-content');
});

Scenario('show new messages', (I)=>{
            I.waitForElement('#msgs-list', 5);
            I.seeElement('#msgs-list');
            I.click('#msgs-list');
            I.wait(1);
            I.see('Показать все');
            I.click('Показать все');
            I.click('body > div.container.body > div > div.right_col.admin-settigs-wrap > div:nth-child(1) > div > div.x_title > h2 > a');
                    I.waitForNavigation();
                I.seeElement('div.messages-left-block');
                I.seeElement('div.messages-content');
});*/

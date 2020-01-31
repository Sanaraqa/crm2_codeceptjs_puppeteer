Feature('AdminSettings');
let url = 'http://127.0.0.1:8000/login';
Before((I, locatorsForCRM) => {
    I.amOnPage(url);
    locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com')
});

Scenario('1. countries settings - СТРАНЫ - Настройки для стран в системе', async (I, locatorsForCRM) => {
    let countriesSettings = 'СТРАНЫ - Настройки для стран в системе';

    locatorsForCRM.enterToAdminSettings();
    locatorsForCRM.adminSettingsClick();

    let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
    console.log(allElementsSettings);
    let arrElement = allElementsSettings.split('\n');
    let countriesSettingsElement = allElementsSettings.split('\n')[0].trim();

    if (countriesSettingsElement === 'СТРАНЫ - Настройки для стран в системе') {
        I.click(countriesSettingsElement);
        I.waitForNavigation();
        I.waitForElement('div.col-md-6.col-sm-6.col-xs-12', 5);
        I.seeElement('div.col-md-6.col-sm-6.col-xs-12');
    } else {

        console.log(allElementsSettings.split('\n'));
        for (let i = 0; i < arrElement.length; i++) {
            if (arrElement[i].trim() === countriesSettings) {
                console.log(i);
                I.click(countriesSettings);
                I.waitForNavigation();
                I.waitForElement('div.col-md-6.col-sm-6.col-xs-12', 5);
                I.seeElement('div.col-md-6.col-sm-6.col-xs-12');
            }
        }

    }

});


Scenario('2. ГРУППЫ ПОЛЬЗОВАТЕЛЕЙ - Настройки для групп пользователей', async (I, locatorsForCRM) => {
    let groupUsers = 'ГРУППЫ ПОЛЬЗОВАТЕЛЕЙ - Настройки для групп пользователей';

    locatorsForCRM.enterToAdminSettings();
    locatorsForCRM.adminSettingsClick();

    let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
    let arrElement = allElementsSettings.split('\n');
    console.log(arrElement);
    let groupUsersElement = allElementsSettings.split('\n')[1].trim();

    if (groupUsersElement === 'ГРУППЫ ПОЛЬЗОВАТЕЛЕЙ - Настройки для групп пользователей') {
        I.click(groupUsers);
        I.waitForNavigation();
        I.waitForElement('div.x_content > div', 5);
        I.seeElement('div.x_content > div');
    } else {

        for (let i = 0; i < arrElement.length; i++) {
            if (arrElement[i].trim() === groupUsers) {
                console.log(i);
                I.click(groupUsers);
                I.waitForNavigation();
                I.waitForElement('div.x_content > div', 5);
                I.seeElement('div.x_content > div');
            }
        }
    }
});

/*Scenario('3. НЕДОЗВОНЫ', async (I, locatorsForCRM) => {
    let underCall = 'НЕДОЗВОНЫ';
    let underCallDropDawnButton = 'div.right_col.admin-settigs-wrap > div:nth-child(7) > div > div.x_title > ul';

    locatorsForCRM.enterToAdminSettings();
    locatorsForCRM.adminSettingsClick();

    let allElementsSettings = await I.grabTextFrom('div.right_col.admin-settigs-wrap');
    let arrElement = allElementsSettings.split('\n');
    console.log(arrElement);
    let groupUsersElement = allElementsSettings.split('\n')[2].trim();

    if (groupUsersElement === 'НЕДОЗВОНЫ') {
        I.click(underCallDropDawnButton);
        I.waitForNavigation();
        I.waitForElement('div.x_content > div', 5);
        I.seeElement('div.x_content > div');
    } else {

        for (let i = 0; i < arrElement.length; i++) {
            if (arrElement[i].trim() === underCall) {
                console.log(i);
                I.click(underCallDropDawnButton);
                I.waitForNavigation();
                I.waitForElement('div.x_content > div', 5);
                I.seeElement('div.x_content > div');
            }
        }
    }*/

    Scenario('4. Настройки офферов', async (I, locatorsForCRM) => {
        let offersSettings = 'Настройки офферов';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[3].trim();

        if (groupUsersElement === 'Настройки офферов') {
            I.click(offersSettings);
            I.waitForNavigation();
            I.waitForElement('div.right_col', 5);
            I.seeElement('div.right_col');
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === offersSettings) {
                    console.log(i);
                    I.click(offersSettings);
                    I.waitForNavigation();
                    I.waitForElement('div.right_col', 5);
                    I.seeElement('div.right_col');
                }
            }
        }
    });

    Scenario('5. КОЛОНКИ ЛИДОВ', async (I, locatorsForCRM) => {
        let columnLeads = 'КОЛОНКИ ЛИДОВ - Настройки для колонок в списке лидов';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[4].trim();

        if (groupUsersElement === 'КОЛОНКИ ЛИДОВ - Настройки для колонок в списке лидов') {
            I.click(columnLeads);
            I.waitForNavigation();
            I.waitForElement('body > div.container.body > div > div.right_col > div', 5);
            I.seeElement('body > div.container.body > div > div.right_col > div');
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === columnLeads) {
                    console.log(i);
                    I.click(columnLeads);
                    I.waitForNavigation();
                    I.waitForElement('body > div.container.body > div > div.right_col > div', 5);
                    I.seeElement('body > div.container.body > div > div.right_col > div');
                }
            }
        }
    });

    Scenario('6. Причины паузы', async (I, locatorsForCRM) => {
        let pauseReason = 'Причины паузы - Список причин паузы в работе операторов';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[5].trim();

        if (groupUsersElement === 'Причины паузы - Список причин паузы в работе операторов') {
            I.click(pauseReason);
            I.waitForNavigation();
            I.waitForElement('body > div.container.body > div > div.right_col > div', 5);
            I.seeElement('body > div.container.body > div > div.right_col > div');
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === pauseReason) {
                    console.log(i);
                    I.click(pauseReason);
                    I.waitForNavigation();
                    I.waitForElement('body > div.container.body > div > div.right_col > div', 5);
                    I.seeElement('body > div.container.body > div > div.right_col > div');
                }
            }
        }
    });

    Scenario('7. Наборы настроек', async (I, locatorsForCRM) => {
        let setSettings = 'Наборы настроек';
        let mainElementOnPage = '#tabContent';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[6].trim();

        if (groupUsersElement === 'Наборы настроек') {
            I.click(setSettings);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === setSettings) {
                    console.log(i);
                    I.click(setSettings);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });

    Scenario('8. Настройки автодозвона', async (I, locatorsForCRM) => {
        let autoCallSettings = 'Настройки автодозвона';
        let mainElementOnPage = 'div.right_col';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[7].trim();

        if (groupUsersElement === 'Настройки автодозвона') {
            I.click(autoCallSettings);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === autoCallSettings) {
                    console.log(i);
                    I.click(autoCallSettings);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });

    Scenario('9. Настройки предиктива', async (I, locatorsForCRM) => {
        let settingsPredictive = 'Настройки предиктива';
        let mainElementOnPage = 'body > div.container.body > div > div.right_col > div:nth-child(5)';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[8].trim();

        if (groupUsersElement === 'Настройки автодозвона') {
            I.click(settingsPredictive);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsPredictive) {
                    console.log(i);
                    I.click(settingsPredictive);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });

        Scenario('10. Настройки автодозвона', async (I, locatorsForCRM) => {
        let settingsAutoCall = 'Настройки автодозвона';
        let mainElementOnPage = 'body > div.container.body > div > div.right_col > div:nth-child(5)';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[11].trim();

        if (groupUsersElement === 'Настройки автодозвона') {
            I.click(settingsAutoCall);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsAutoCall) {
                    console.log(i);
                    I.click(settingsAutoCall);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });


    Scenario('11. Blacklist Телефонов', async (I, locatorsForCRM) => {
        let Blacklist = 'Blacklist Телефонов';
        let mainElementOnPage = 'div.row.nomargin';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[12].trim();

        if (groupUsersElement === 'Blacklist Телефонов') {
            I.click(Blacklist);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === Blacklist) {
                    console.log(i);
                    I.click(Blacklist);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }

    });

    Scenario('12. ПОЛЬЗОВАТЕЛИ - Настройки для пользователей', async (I, locatorsForCRM) => {
        let userSettings = 'ПОЛЬЗОВАТЕЛИ - Настройки для пользователей';
        let mainElementOnPage = '#grid_container';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[15].trim();

        if (groupUsersElement === 'ПОЛЬЗОВАТЕЛИ - Настройки для пользователей') {
            I.click(userSettings);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === userSettings) {
                    console.log(i);
                    I.click(userSettings);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });

    Scenario('13. Настройки SIP', async (I, locatorsForCRM) => {
        let settingsSIP = 'Настройки SIP';
        let mainElementOnPage = 'div.col-md-12.col-sm-12.col-xs-12';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[16].trim();

        if (groupUsersElement === 'Настройки SIP') {
            I.click(settingsSIP);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsSIP) {
                    console.log(i);
                    I.click(settingsSIP);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });

    Scenario('14. Условия для подарков - Настройка количетства товара в корзине для подарка', async (I, locatorsForCRM) => {
        let conditionPresent = 'Условия для подарков - Настройка количетства товара в корзине для подарка';
        let mainElementOnPage = 'div.content > ul';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[17].trim();

        if (groupUsersElement === 'Условия для подарков - Настройка количетства товара в корзине для подарка') {
            I.click(conditionPresent);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === conditionPresent) {
                    console.log(i);
                    I.click(conditionPresent);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });

    Scenario('14. Настройки супергрупп', async (I, locatorsForCRM) => {
        let settingsSuperGroup = 'Настройки супергрупп\n';
        let mainElementOnPage = '#open-supergroup-mdl';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[19].trim();

        if (groupUsersElement === 'Настройки супергрупп') {
            I.click(settingsSuperGroup);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsSuperGroup) {
                    console.log(i);
                    I.click(settingsSuperGroup);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });

    Scenario('15. Настройки супергрупп', async (I, locatorsForCRM) => {
        let settingsSuperGroup = 'Настройки супергрупп\n';
        let mainElementOnPage = '#open-supergroup-mdl';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[20].trim();

        if (groupUsersElement === 'Настройки супергрупп') {
            I.click(settingsSuperGroup);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsSuperGroup) {
                    console.log(i);
                    I.click(settingsSuperGroup);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });


    Scenario('16. Call centers', async (I, locatorsForCRM) => {
        let settingsCallCenters = 'Callcenters';
        let mainElementOnPage = 'body > div.container.body > div > div.right_col > div > div > div.callcenters-wrap > div:nth-child(1)';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[20].trim();

        if (groupUsersElement === 'Callcenters') {
            I.click(settingsCallCenters);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsCallCenters) {
                    console.log(i);
                    I.click(settingsCallCenters);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                }
            }
        }
    });


    Scenario('17. Настройка трекеров ТТН - Сервисы отслеживания посылок', async (I, locatorsForCRM) => {
        let settingsPackageTracking = 'Настройка трекеров ТТН - Сервисы отслеживания посылок';
        let mainElementOnPageSettingsPackageTracking = 'div.container.j-search-list';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[21].trim();

        if (groupUsersElement === 'Настройка трекеров ТТН - Сервисы отслеживания посылок') {
            I.click(settingsPackageTracking);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPageSettingsPackageTracking, 5);
            I.seeElement(mainElementOnPageSettingsPackageTracking);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsPackageTracking) {
                    console.log(i);
                    I.click(settingsPackageTracking);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPageSettingsPackageTracking, 5);
                    I.seeElement(mainElementOnPageSettingsPackageTracking);
                }
            }
        }
    });


    Scenario('18. Настройка трекеров ТТН - Сервисы отслеживания посылок', async (I, locatorsForCRM) => {
        let settingsPackageTracking = 'Настройка трекеров ТТН - Сервисы отслеживания посылок';
        let headerMenu = 'div.help-top-block.col-md-12.col-sm-12.col-xs-12.page-title';
        let mainElementOnPage = 'div.container.j-search-list';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[21].trim();

        if (groupUsersElement === 'Настройка трекеров ТТН - Сервисы отслеживания посылок') {
            I.click(settingsPackageTracking);
            I.waitForNavigation();
            I.waitForElement(headerMenu, 5);
            I.waitForElement(mainElementOnPage, 5);
            I.seeElement(mainElementOnPage);
            I.seeElement(headerMenu);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsPackageTracking) {
                    console.log(i);
                    I.click(settingsPackageTracking);
                    I.waitForNavigation();
                    I.waitForElement(headerMenu, 5);
                    I.waitForElement(mainElementOnPage, 5);
                    I.seeElement(mainElementOnPage);
                    I.seeElement(headerMenu);
                }
            }
        }
    });

    Scenario('19. Дослать партнерам статусы', async (I, locatorsForCRM) => {
        let partnerStatuses = 'Дослать партнерам статусы';
        let mainElementOnPagePartnerStatuses = '#table-block';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[23].trim();

        if (groupUsersElement === 'Дослать партнерам статусы') {
            I.click(partnerStatuses);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPagePartnerStatuses, 5);
            I.seeElement(mainElementOnPagePartnerStatuses);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === partnerStatuses) {
                    console.log(i);
                    I.click(partnerStatuses);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPagePartnerStatuses, 5);
                    I.seeElement(mainElementOnPagePartnerStatuses);

                }
            }
        }
    });

    Scenario('20. Настройки интеграций', async (I, locatorsForCRM) => {
        let settingsIntegration = 'Настройки интеграций';
        let mainElementOnPageIntegration = '#integrations-main-block';
    
        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();
    
        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[24].trim();
    
        if (groupUsersElement === settingsIntegration) {
            I.click(settingsIntegration);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPageIntegration, 5);
            I.seeElement(mainElementOnPageIntegration);
        } else {
    
            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === settingsIntegration) {
                    console.log(i);
                    I.click(settingsIntegration);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPageIntegration, 5);
                    I.seeElement(mainElementOnPageIntegration);
    
                }
            }
        }
    });

    Scenario('21. Смены операторов', async (I, locatorsForCRM) => {
        let operatorsShift = 'Смены операторов';
        let mainElementOnPageOperatorsShift = '#proc-table_wrapper';

        locatorsForCRM.enterToAdminSettings();
        locatorsForCRM.adminSettingsClick();

        let allElementsSettings = await I.grabTextFrom(locatorsForCRM.locators.adminMainSettingsBasicElement);
        let arrElement = allElementsSettings.split('\n');
        console.log(arrElement);
        let groupUsersElement = allElementsSettings.split('\n')[29].trim();

        if (groupUsersElement === operatorsShift) {
            I.click(operatorsShift);
            I.waitForNavigation();
            I.waitForElement(mainElementOnPageOperatorsShift, 5);
            I.seeElement(mainElementOnPageOperatorsShift);
        } else {

            for (let i = 0; i < arrElement.length; i++) {
                if (arrElement[i].trim() === operatorsShift) {
                    console.log(i);
                    I.click(operatorsShift);
                    I.waitForNavigation();
                    I.waitForElement(mainElementOnPageOperatorsShift, 5);
                    I.seeElement(mainElementOnPageOperatorsShift);

                }
            }
        }
    });
    
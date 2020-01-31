Feature('LeftMenu admin_CountriesSettings');
    let url = 'http://127.0.0.1:8000/login';
        Before((I, locatorsForCRM)=>{
            I.amOnPage(url);
                locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});

Scenario('settings_countries Ukraine', (I, locatorsForCRM) => {
            locatorsForCRM.enterToAdminSettings();
            locatorsForCRM.countiesSettings();
                I.waitForElement('#accordion > div:nth-child(1) > ul > li:nth-child(3) > a', 5);
                I.click('#accordion > div:nth-child(1) > ul > li:nth-child(3) > a');
                    I.waitForNavigation();
                I.see('Настройки - Украина');
                I.seeElement('div#tab_content1');
});

Scenario('settings_countries Moldova', (I, locatorsForCRM) => {
            locatorsForCRM.enterToAdminSettings();
            locatorsForCRM.countiesSettings();
                I.waitForElement('#accordion > div:nth-child(2) > ul > li:nth-child(3) > a', 5);
                I.click('#accordion > div:nth-child(2) > ul > li:nth-child(3) > a > i');
                    I.waitForNavigation();
                I.see('Настройки - Молдова');
                I.seeElement('div#tab_content1');
});

Scenario('settings_countries Germany', (I, locatorsForCRM) => {
            locatorsForCRM.enterToAdminSettings();
            locatorsForCRM.countiesSettings();
                I.waitForElement('#accordion > div:nth-child(3) > ul > li:nth-child(3) > a', 5);
                I.click('#accordion > div:nth-child(3) > ul > li:nth-child(3) > a > i');
                    I.waitForNavigation();
                I.see('Настройки - Германия');
                I.seeElement('div#tab_content1');
});

Scenario('settings_countries Georg', (I, locatorsForCRM) => {
            locatorsForCRM.enterToAdminSettings();
            locatorsForCRM.countiesSettings();
                I.waitForElement('#accordion > div:nth-child(4) > ul > li:nth-child(3) > a', 5);
                I.click('#accordion > div:nth-child(4) > ul > li:nth-child(3) > a > i');
                    I.waitForNavigation();
                I.see('Настройки - Грузия');
                I.seeElement('div#tab_content1');
});

Scenario('settings_countries Russia', (I, locatorsForCRM) => {
            locatorsForCRM.enterToAdminSettings();
            locatorsForCRM.countiesSettings();
                I.waitForElement('#accordion > div:nth-child(8) > ul > li:nth-child(3) > a', 5);
                I.click('#accordion > div:nth-child(8) > ul > li:nth-child(3) > a > i');
                    I.waitForNavigation();
                I.see('Настройки - Россия');
                I.seeElement('div#tab_content1');
});

Scenario('settings_countries Kazakhstan', (I, locatorsForCRM) => {
            locatorsForCRM.enterToAdminSettings();
            locatorsForCRM.countiesSettings();
                I.waitForElement('#accordion > div:nth-child(10) > ul > li:nth-child(3) > a', 5);
                I.click('#accordion > div:nth-child(10) > ul > li:nth-child(3) > a > i');
                    I.waitForNavigation();
                I.see('Настройки - Казахстан');
                I.seeElement('div#tab_content1');
});

Scenario('settings_countries Kyrgyzstan', (I, locatorsForCRM) => {
            locatorsForCRM.enterToAdminSettings();
            locatorsForCRM.countiesSettings();
                I.waitForElement('#accordion > div:nth-child(11) > ul > li:nth-child(3) > a', 5);
                I.click('#accordion > div:nth-child(11) > ul > li:nth-child(3) > a > i');
                    I.waitForNavigation();
                I.see('Настройки - Киргизия');
                I.seeElement('div#tab_content1');
});


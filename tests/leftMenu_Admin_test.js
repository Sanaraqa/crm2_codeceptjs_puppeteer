Feature('LoginTest');
let url = 'http://127.0.0.1:8000/login';

Before((I, locatorsForCRM)=>{
        I.amOnPage(url);
            locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});


Scenario('smoke_test_to_login_in_crm2', (I, mainGridPO) => {
    mainGridPO.gotooCRM();
});


/*Scenario.only('admin_userCRM', (I, leftMenuBottomsPO, adminUserSettingsPO, singleAdminUserSettings)=>{
    leftMenuBottomsPO.enterAdminUserCRM();
    adminUserSettingsPO.adminUserChecked();
    singleAdminUserSettings.elementPresent();


});*/

/*Scenario.only('admin_userSIP', async (I, leftMenuBottomsPO, adminUserSIP, mainGridPO)=>{
    leftMenuBottomsPO.enterAdminSIPUser();
    adminUserSIP.sipTelephonyUser(mainGridPO);

});*/

Scenario ('admin_group', (I, locatorsForCRM)=>{
    locatorsForCRM.adminUserCRMLocators();
        I.waitForText('Группы');
        I.click('Группы');
            I.waitForNavigation();
        I.see('Выберите страну');
        I.seeElement('div.x_panel > div.x_content');
});

Scenario('admin_timeRecording', (I, locatorsForCRM)=>{
    locatorsForCRM.adminUserCRMLocators();
        I.waitForText('Учет времени');
        I.click('Учет времени');
            I.waitForNavigation();
        I.see('Учет времени');
        I.seeElement('div.ui-jqgrid-bdiv');
});

Scenario('admin_settings', (I, locatorsForCRM)=>{
    locatorsForCRM.adminUserCRMLocators();
        I.waitForText('Основные настройки');
        I.click('Основные настройки');
            I.waitForNavigation();
        I.see('Админка - настройки');
        I.seeElement('body > div.container.body > div > div.right_col.admin-settigs-wrap > div:nth-child(1) > div > div.x_title');
});

Scenario ('admin_logsSystems', (I, locatorsForCRM)=>{
    locatorsForCRM.adminUserCRMLocators();
        I.waitForText('Логи в системе');
        I.click('Логи в системе');
            I.waitForNavigation();
        I.seeElement('div#grid_dop_info');
        I.seeElement('.ui-jqgrid-bdiv');
});

Scenario('admin_storageLogs', (I, locatorsForCRM)=>{
    locatorsForCRM.adminUserCRMLocators();
        I.waitForText('Storage Логи');
        I.click('Storage Логи');
            I.waitForNavigation();
        I.seeElement('div.left-colon-tree');
        I.seeElement('div.content-filename');
});

Scenario('admin_settingsLogs', (I, locatorsForCRM)=>{
    locatorsForCRM.adminUserCRMLocators();
        I.waitForText('Логи настроек');
        I.click('Логи настроек');
            I.waitForNavigation();
        I.seeElement('div.container.filter_block.nomargin');
        I.seeElement('#settings_logs_wrapper')
});

Scenario('admin_onlineTracking', (I, locatorsForCRM)=>{
     locatorsForCRM.adminUserCRMLocators();
        I.waitForText('Online traking');
        I.click('Online traking');
            I.waitForNavigation();
        I.seeElement('#url');
});

Scenario('Ошибки API', (I, locatorsForCRM)=>{
    locatorsForCRM.adminUserCRMLocators();
        I.waitForText('Ошибки API');
        I.click('Ошибки API');
            I.waitForNavigation();
        I.waitForElement(locatorsForCRM.locators.adminErrorsAPICheckBoxOnlyWithErrors, 5);
        I.seeElement(locatorsForCRM.locators.adminErrorsAPICheckBoxOnlyWithErrors);
        I.waitForText('Search:', 5);
        I.waitForElement("#api-logs-table_wrapper", 5); // Main element on page ERRORS API
        I.seeElement("#api-logs-table_wrapper");

});





Feature('LeftMenu Integration');
    let url = 'http://127.0.0.1:8000/login';
        Before((I, locatorsForCRM)=>{
            I.amOnPage(url);
                locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');

 });

Scenario('integration_mainPage', (I, locatorsForCRM) => {
        locatorsForCRM.integration();
            I.see('Интеграции - Главная');
            I.click('Интеграции - Главная');
                I.waitForNavigation();
            I.seeElement('div.nav.navbar-brand');

});

Scenario('integration_betaPROOrder', (I, locatorsForCRM) => {
        locatorsForCRM.integration();
            I.see('Beta PRO - Заказы переданные на формирование отправлений');
            I.click('Beta PRO - Заказы переданные на формирование отправлений');
                I.waitForNavigation();
            I.seeElement('div#dataTable_wrapper');
});

Scenario('integration_betaPROData', (I, locatorsForCRM) => {
        locatorsForCRM.integration();
            I.see('Beta PRO - Данные по перечисленным платежам');
            I.click('Beta PRO - Данные по перечисленным платежам');
                I.waitForNavigation();
            I.seeElement('div#dataTable_wrapper');
            I.seeElement('div.dt-buttons');
});

Scenario('integration_integrationMemoExpress', (I, locatorsForCRM) => {
        locatorsForCRM.integration();
            I.see('Интеграция - Memo Express');
            I.click('Интеграция - Memo Express');
                I.waitForNavigation();
            I.seeElement('div.col-md-12.col-sm-12.col-xs-12');

});

Scenario('integration_GermanBankPayment', (I, locatorsForCRM) => {
        locatorsForCRM.integration();
            I.see('Оплаты немецкого банка');
            I.click('Оплаты немецкого банка');
                I.waitForNavigation();
            I.see('Оплаты по Германии');
            I.seeElement('table#payments_table');
            I.seeElement('input#file_input');
            I.seeElement('div.row');
});

Scenario('integration_importOfPurchasedOrders', (I, locatorsForCRM) => {
        locatorsForCRM.integration();
            I.see('Импорт выкупленных заказов');
            I.click('Импорт выкупленных заказов');
                I.waitForNavigation();
            I.see('Загрузка выкупленных заказов');
            I.seeElement('table#payments_table');
            I.seeElement('input#file_input');
            I.seeElement('div.row');
});
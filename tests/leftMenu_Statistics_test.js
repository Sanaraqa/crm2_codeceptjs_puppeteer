Feature('LeftMenu Statistics');
    let url = 'http://127.0.0.1:8000/login';
        Before((I, locatorsForCRM)=>{
            I.amOnPage(url);
                locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});

Scenario('statistics_balance', (I,locatorsForCRM) => {
            locatorsForCRM.statistics();
                I.see('Баланс');
                I.click('Баланс');
                    I.waitForNavigation();
                I.seeElement('div.filter-block');
                I.seeElement('div#balance-table');
});

Scenario('statistics_writeOff', (I, locatorsForCRM)=>{
            locatorsForCRM.statistics();
                I.see('Зачисления');
                I.click('Зачисления');
                    I.waitForNavigation();
                I.seeElement('div.form-group.form-inline');
                I.seeElement('div#enrollments_table_wrapper');
});

/*Scenario('statistics_mailServiceCost', (I, locatorsForCRM)=>{
            locatorsForCRM.statistics();
                I.see('Стоимость услуг Почты');
                I.click('Стоимость услуг Почты');
                    I.waitForNavigation();
                I.seeElement('div.x_panel');
                I.seeElement('button#create_otchet');
                    I.click('button#create_otchet');
                        within('form#createOtchetForm', ()=>{
                            I.fillField('input#title', 'test_test_test');
                            I.fillField('textarea.form-control', 'test_test_test');
                            I.click('+СОЗДАТЬ ОТЧЕТ');
                        });
                    I.seeElement('div.alert.alert-success');
});*/

Scenario('statistics_statisticsCDRSIP_telephony', (I, locatorsForCRM)=>{
        locatorsForCRM.statistics();
            I.see('Статистика (CDR) SIP-телефонии');
            I.click('Статистика (CDR) SIP-телефонии');
                I.waitForNavigation();
            I.seeElement('div.container-fluid');
            I.seeElement('div.dataTables_scrollBody');
});

//СТАТИСТИКА ПОЛЬЗОВАТЕЛЕЙ НЕ РАБОТАЕТ
xScenario('statistics_statisticsOfUser',(I, locatorsForCRM)=>{
});

Scenario('statistics_statisticsWebMasters',(I,locatorsForCRM)=>{
        locatorsForCRM.statistics();
            I.see('Статистика WebMasters');
            I.click('Статистика WebMasters');
                I.waitForNavigation();
            I.seeElement('div#grid_filters_info');
            I.seeElement('div#gbox_jqgrid-webmaster-statistic');
});

Scenario ('statistics_statisticsOfOperators', (I, locatorsForCRM)=>{
        locatorsForCRM.statistics();
            I.see('Статистика операторов');
            I.click('Статистика операторов');
                I.waitForNavigation();
            I.seeElement('div.operator-statistic.data-settings.row');
            I.seeElement('div.row.operator-statistic.main-data');
});

Scenario('statistics_operatorResponseTimeStatistics', (I, locatorsForCRM)=>{
        locatorsForCRM.statistics();
            I.see('Статистика времени реагирования операторов');
            I.click('Статистика времени реагирования операторов');
                I.waitForNavigation();
            I.seeElement('div.table_content.container-fluid');
});

Scenario('statistics_leadsStatistic', (I, locatorsForCRM)=>{
        locatorsForCRM.statistics();
            I.see('Статистика лиды');
            I.click('Статистика лиды');
                I.waitForNavigation();
            I.seeElement('div.container-fluid');
            I.seeElement('div.table_content');
});

Scenario('statistics_statisticsOfOperators', (I, locatorsForCRM)=>{
        locatorsForCRM.statistics();
            I.see('Основная статистика операторов');
            I.click('Основная статистика операторов');
                I.waitForNavigation();
            I.seeElement('div#statistics-table-container');
});

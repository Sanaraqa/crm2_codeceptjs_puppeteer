Feature('LeftMenu Supervisor');
    let url = 'http://127.0.0.1:8000/login';
        Before((I, locatorsForCRM)=>{
            I.amOnPage(url);
                locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});


Scenario('supervisor_uncorrectableNumber', (I, locatorsForCRM) => {
        locatorsForCRM.supervisor();
            I.see('Таблица некорректных номеров');
            I.click('Таблица некорректных номеров');
                I.waitForNavigation();
            I.seeElement('div.col-xs-12.incorrect_phone_numbers_table_wr');
});

Scenario('supervisor_historyOfPriorityLeads', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('История приоритетных лидов');
            I.click('История приоритетных лидов');
                I.waitForNavigation();
            I.seeElement('div#grid_container');
});

Scenario('supervisor_historyOfPriorityLeads', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('Настройка ставок операторов');
            I.click('Настройка ставок операторов');
                I.waitForNavigation();
            I.seeElement('div.row.head-row');
});


Scenario('supervisor_operatorsSettings', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('Настройка операторов');
            I.click('Настройка операторов');
                I.waitForNavigation();
            I.seeElement('div#proc-container');
});

Scenario('supervisor_shiftsOfOperators', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('Смены операторов');
            I.click('Смены операторов');
                I.waitForNavigation();
            I.seeElement('div#proc-container.col-md-12');
});

Scenario('supervisor_accountingForOperatorTime', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('Управление сменами');
            I.click('Управление сменами');
                I.waitForNavigation();
            I.seeElement('div.header-panel');
});

Scenario('supervisor_min', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('Мин. цена корзины');
            I.click('Мин. цена корзины');
                I.waitForNavigation();
            I.seeElement('div.header-block.col-md-12.col-sm-12.col-xs-12');
});

Scenario('supervisor_scheduledApprove', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('Плановый аппрув');
            I.click('Плановый аппрув');
                I.waitForNavigation();
            I.seeElement('div.table_content');
});

Scenario('supervisor_listeningToCalls', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('Прослушивание звонков');
            I.click('Прослушивание звонков');
                I.waitForNavigation();
            I.seeElement('div.right_col');
            I.seeElement('div.row');
});

Scenario('supervisor_statisticsOfTheOperatorsOfRe-consultation', (I, locatorsForCRM)=>{
        locatorsForCRM.supervisor();
            I.see('Статистика операторов повторной консультации');
            I.click('Статистика операторов повторной консультации');
                I.waitForNavigation();
            I.seeElement('input#from_date_pick.form-control');
            I.seeElement('div#chartjs-legend.noselect');
});
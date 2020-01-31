Feature('LeftMenu Autocall');
    let url = 'http://127.0.0.1:8000/login';
        Before((I, locatorsForCRM)=>{
            I.amOnPage(url);
                locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});

Scenario('autoCall_orgStructure', (I, locatorsForCRM) => {
        locatorsForCRM.autocall();
            I.see('Оргструктура');
            I.click('Оргструктура');
                I.waitForNavigation();
            I.seeElement('div.callcenters-wrap');
});

Scenario('autoCall_recall', (I, locatorsForCRM) => {
        locatorsForCRM.autocall();
            I.see('Перезвоны');
            I.click('Перезвоны');
                I.waitForNavigation();
            I.seeElement('div.col-xs-10.recall_leads_table_wr');
            I.seeElement('div.col-xs-2.working_operators');
});

Scenario('autoCall_missedBells', (I, locatorsForCRM)=> {
        locatorsForCRM.autocall();
            I.see('Пропущенные перезвоны');
            I.click('Пропущенные перезвоны');
                I.waitForNavigation();
            I.seeElement('div.col-xs-10.recall_leads_table_wr');
            I.seeElement('div.col-xs-2.working_operators');

});

Scenario('autoCall_tableToAutoCall', (I, locatorsForCRM)=>{
        locatorsForCRM.autocall();
            I.see('Таблица автодозвона');
            I.click('Таблица автодозвона');
                I.waitForNavigation();
            I.seeElement('div.header-panel');
            I.seeElement('div#gview_autocall-table-data-grid');
});


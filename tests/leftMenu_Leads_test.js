Feature('LeftMenu_Leads');
    let url = 'http://127.0.0.1:8000/login';
        Before((I, locatorsForCRM)=>{
            I.amOnPage(url);
                locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});

Scenario('leads_Fulfilment', (I, locatorsForCRM) => {
        locatorsForCRM.leads();
            I.see('Fulfilment');
            I.click('Fulfilment');
                I.waitForNavigation();
            I.seeElement('div.ui-jqgrid-view');

});

Scenario('leads_Leads', (I, locatorsForCRM) => {
        locatorsForCRM.leads();
            I.see('Лиды');
            I.click('Лиды');
                I.waitForNavigation();
            I.seeElement('div.right_col');
});

Scenario('leads_PriorityLeads', (I, locatorsForCRM) => {
        locatorsForCRM.leads();
            I.see('Приоритетные лиды');
            I.click('Приоритетные лиды');
                I.waitForNavigation();
            I.seeElement('div#gview_main-data-grid');
            I.click('Обычные');
                I.seeElement('div.ui-jqgrid-view')

});

Scenario('leads_BusyLeads', (I, locatorsForCRM) => {
        locatorsForCRM.leads();
            I.see('Занятые лиды');
            I.click('Занятые лиды');
                I.waitForNavigation();
            I.seeElement('div#grid_container');
});
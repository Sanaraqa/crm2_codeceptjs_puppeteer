const I = actor();

module.exports = {

    locators: {
        leftMainDivElement: 'div.col-md-3.left_col',
        adminMainSettingsBasicElement:'div.right_col.admin-settigs-wrap',
        div_X_content: 'div.x_content',
        div_X_Panel: '',
        email: 'email',
        password: 'password',
        leftMenuAdmin: '//div[@class=\'menu_section\']//i[@class=\'fa fa-adn\']',
        leftMenu_Supervisor: '//span[@class=\'admin-h3\' and text()=\'Супервайзер\']',
        leftMenu_Leads: '//span[@class=\'admin-h3\' and text()=\'Leads\']',
        leftMenu_Autocall:  '//i[@class=\'fa fa-phone\']',
        leftMenu_Statistics:  '//div[@id=\'sidebar-menu\']//i[@class=\'fa fa-bar-chart\']',
        leftMenu_integration: 'Интеграции',
        leftMenu_settings: '#sidebar-menu > div:nth-child(2)',
        headMainElement: 'div.nav_menu',
        rightMenu_personalArea: 'body > div.container.body > div > div.top_nav > div.nav_menu > nav > ul > li:nth-child(1)',
        rightMenu_openDropdownMenu: 'ul.dropdown-menu.dropdown-usermenu.pull-right',
            personalArea: 'Личный Кабинет',
                personalAreaMainElement: 'div.col-md-6.col-sm-6.col-xs-12',
            bookmarkBasicElement:'div.right_col > div.col-md-12.col-sm-12.col-xs-12',

        header_buttons: 'div.grid-filtr-wrap',
        footer_buttons: 'div#pg_jqGridPager',
        basicSettings: 'Основные настройки',
        countries: 'СТРАНЫ - Настройки для стран в системе',
        adminSettings: 'div.right_col.admin-settigs-wrap',
        adminErrorsAPICheckBoxOnlyWithErrors: '#only-with-errors-wrap'
    },

    loginInCRM (email, password) {
        I.fillField(this.locators.email, email);
        I.fillField(this.locators.password, password);
        I.click('//input[@class=\'btn btn-default submit\']');
        I.waitForNavigation();
    },

    adminUserCRMLocators(){
        I.seeElement(this.locators.leftMenuAdmin);
        I.click(this.locators.leftMenuAdmin);
    },

    supervisor(){
        I.seeElement(this.locators.leftMenu_Supervisor);
        I.click(this.locators.leftMenu_Supervisor);
    },

    leads(){
        I.seeElement(this.locators.leftMenu_Leads);
        I.click(this.locators.leftMenu_Leads);
    },

    autocall(){
        I.seeElement(this.locators.leftMenu_Autocall);
        I.click(this.locators.leftMenu_Autocall);
    },

    statistics(){
        I.seeElement(this.locators.leftMenu_Statistics);
        I.click(this.locators.leftMenu_Statistics);
    },

    integration(){
        I.see(this.locators.leftMenu_integration);
        I.click(this.locators.leftMenu_integration);
    },

    rightMenu_userProfile(){
        I.waitForElement(this.locators.headMainElement, 5);
        I.seeElement(this.locators.headMainElement);
        I.waitForElement(this.locators.rightMenu_personalArea, 5);
        I.seeElement(this.locators.rightMenu_personalArea);

    },

    header(){
        I.seeElement(this.locators.header_buttons);
    },

    footer(){
        I.seeElement(this.locators.footer_buttons);
    },

    enterToAdminSettings(){
        I.seeElement(this.locators.leftMenuAdmin);
        I.click(this.locators.leftMenuAdmin);
        I.see('Основные настройки');
        I.click('Основные настройки');
        I.waitForNavigation();
    },

    countiesSettings(){
        I.see(this.locators.countries);
        I.click(this.locators.countries);

        if (this.locators.countries !== 'СТРАНЫ - Настройки для стран в системе') {
            I.waitForText(this.locators.countries, 10);
            I.click(this.locators.countries);
            I.waitForNavigation();
            I.seeElement('div.x_panel');
        }
        I.waitForNavigation();
        I.seeElement('div.x_panel');
    },

    adminSettingsClick(){
        I.seeElement(this.locators.adminSettings);
    }
};

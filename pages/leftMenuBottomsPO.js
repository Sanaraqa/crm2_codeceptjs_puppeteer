const I = actor();

module.exports = {

    locatorsLeftMenuBottoms: {
        allLeftMenu: 'div.left_col.scroll-view',
        adminBottom: 'Админ',
        adminUserCRMBottom: 'Пользователи CRM',
        adminUserSIPBottom: 'Пользователи SIP',
        adminUserGroupBottom: 'Группы',
    },


enterAdminUserCRM(){
        I.waitForElement(this.locatorsLeftMenuBottoms.allLeftMenu, 5);
        I.seeElement(this.locatorsLeftMenuBottoms.allLeftMenu);
        I.waitForText(this.locatorsLeftMenuBottoms.adminBottom, 5);
        I.click(this.locatorsLeftMenuBottoms.adminBottom);
        I.click(this.locatorsLeftMenuBottoms.adminUserCRMBottom);
        I.waitForNavigation();
    },


enterAdminSIPUser(){
        I.waitForElement(this.locatorsLeftMenuBottoms.allLeftMenu, 5);
        I.seeElement(this.locatorsLeftMenuBottoms.allLeftMenu);
        I.waitForText(this.locatorsLeftMenuBottoms.adminBottom, 5);
        I.click(this.locatorsLeftMenuBottoms.adminBottom);
        I.click(this.locatorsLeftMenuBottoms.adminUserSIPBottom);
        I.waitForNavigation();
},

enterAdminGroups(){
        I.waitForElement(this.locatorsLeftMenuBottoms.allLeftMenu, 5);
        I.seeElement(this.locatorsLeftMenuBottoms.allLeftMenu);
        I.waitForText(this.locatorsLeftMenuBottoms.adminBottom, 5);
        I.click(this.locatorsLeftMenuBottoms.adminBottom);
        I.click(this.locatorsLeftMenuBottoms.adminUserGroupBottom);
        I.waitForNavigation();
},




};

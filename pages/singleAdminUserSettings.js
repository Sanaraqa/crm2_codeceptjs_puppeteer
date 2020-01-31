
///////Локаторы для страницы индивидуальной настройки Юзера (https://new.crm.loc/sys/admin/settings/user/)

const { I } = actor();

module.exports = {

  locatorsSingleAdminUser: {
    headElements: 'div.top-block.col-md-12.col-sm-12.col-xs-12',
    bottomDeleteUser: 'div.j-del-user.btn.btn-danger.col-md-2',
    inputElementsIPSet: 'div.ip-wrap',
    elementUserInformation: 'div > div.col-md-12.col-sm-12.col-xs-12 > div > div.x_content > div:nth-child(4) > div',
    elementAccessRights: ' div.col-md-6.col-sm-6.col-xs-12.user-access-block > div',

  },

  elementPresent(){
    I.waitForNavigation();
    I.waitForElement(this.locatorsSingleAdminUser.headElements);
    I.seeElement(this.locatorsSingleAdminUser.headElements);
    I.waitForElement(this.locatorsSingleAdminUser.bottomDeleteUser);
    I.seeElement(this.locatorsSingleAdminUser.bottomDeleteUser);
    I.waitForElement(this.locatorsSingleAdminUser.inputElementsIPSet);
    I.seeElement(this.locatorsSingleAdminUser.inputElementsIPSet);
    I.waitForElement(this.locatorsSingleAdminUser.elementUserInformation);
    I.seeElement(this.locatorsSingleAdminUser.elementUserInformation);
    I.waitForElement(this.locatorsSingleAdminUser.elementAccessRights);
    I.seeElement(this.locatorsSingleAdminUser.elementAccessRights);
  }

};

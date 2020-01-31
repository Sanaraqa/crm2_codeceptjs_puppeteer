const I = actor();

module.exports = {

  locatorsUserCRM: {
      mainElementUserCRM: '#grid_container',
      tableCRMUser: '#user-data-grid',
      bottomSettingUser: '#\\31  > td:nth-child(12)',

  },


    adminUserChecked(){
        I.waitForElement(this.locatorsUserCRM.mainElementUserCRM, 5);
        I.seeElement(this.locatorsUserCRM.tableCRMUser);
        I.waitForElement(this.locatorsUserCRM.bottomSettingUser, 5);
        I.seeElement(this.locatorsUserCRM.bottomSettingUser);
        I.click(this.locatorsUserCRM.bottomSettingUser);
        I.switchToNextTab(2);
    },
};

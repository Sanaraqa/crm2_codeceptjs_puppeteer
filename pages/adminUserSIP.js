const I = actor();

module.exports = {

    locatorsUserSIP: {
        textEqualsSIPTelephonyUser:'div.right_col > div > div > div.x_title',
        buttonAddNewSIPUser:'+ Новый SIP пользователь',
        buttonSaveNewSIPUser: 'Сохранить',
    },

    sipTelephonyUser(mainGridPO){
        I.waitForElement(mainGridPO.locatorsMainGrid.divXPanel, 5);
        I.seeTextEquals(' SIP - Телефония - Пользователи', this.locatorsUserSIP.textEqualsSIPTelephonyUser);
        I.click(this.locatorsUserSIP.buttonAddNewSIPUser);
        I.waitForText('Редактирование');
            within('#editData > div > div > div.modal-body',()=>{
                I.fillField('#editData_display_name', 'testTESTtest');//Имя пользователя
                I.fillField('#editData_name', '123450');//WebRTC SIP
                I.fillField('#editData_password', 'qwerty');//WebRTC пароль
                I.fillField('#editData_zoiper_sip', '9999');//Zoiper SIP
                I.fillField('#editData_zoiper_password', 'ytrewq');//Zoiper пароль
                I.click('#editData_user_crm');
                I.fillField('#editData_user_crm', 'test');
                I.click(this.locatorsUserSIP.buttonSaveNewSIPUser);
            });
    },

};

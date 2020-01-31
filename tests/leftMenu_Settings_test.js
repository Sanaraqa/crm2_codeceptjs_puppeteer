Feature('LeftMenu Settings');
let url = 'http://127.0.0.1:8000/login';
const faker = require("faker");
Before((I, locatorsForCRM)=>{
    I.amOnPage(url);
    locatorsForCRM.loginInCRM('anotolij.humenjuk@gmail.com', 'anotolij.humenjuk@gmail.com');
});

Scenario('Левое меню - Настройки -> Категорий товаров', async (I, locatorsForCRM, leftMenuSettingsPO) => {
        let newCategoryName = faker.lorem.word(1);

        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForText(leftMenuSettingsPO.namesSettingsMenu.settingsCatalogGoods, 5 );
        I.click(leftMenuSettingsPO.namesSettingsMenu.settingsCatalogGoods);
            I.waitForNavigation();
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCatalogGoods.categoryMainDIVElement, 5);
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCatalogGoods.addCategoryButton, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCatalogGoods.categoryMainDIVElement);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCatalogGoods.addCategoryButton);
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCatalogGoods.buttonCreateCategory, 5);
        I.click(leftMenuSettingsPO.locatorsSettingsCatalogGoods.buttonCreateCategory);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCatalogGoods.menuAddNewCategory, 5);
        I.fillField(leftMenuSettingsPO.locatorsSettingsCatalogGoods.inputMenuAddNewCategory, newCategoryName);
        I.click(leftMenuSettingsPO.locatorsSettingsCatalogGoods.buttonSaveAddNewCategory);
        I.see(newCategoryName, leftMenuSettingsPO.locatorsSettingsCatalogGoods.categoryMainDIVElement);
});

Scenario('Левое меню - Настройки -> Скидки', (I,locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForText(leftMenuSettingsPO.namesSettingsMenu.settingsCatalogGoods, 5 );
        I.click(leftMenuSettingsPO.namesSettingsMenu.settingsDiscounts);
                I.waitForNavigation();
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsDiscounts.addDiscountButton, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsDiscounts.addDiscountButton);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsDiscounts.discountsMainDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsDiscounts.discountsMainDIVElement);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsDiscounts.discountsPagination, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsDiscounts.discountsPagination);
});

Scenario('Левое меню - Настройки -> Валюты', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForText(leftMenuSettingsPO.namesSettingsMenu.settingsCurrencies, 5);
        I.click(leftMenuSettingsPO.namesSettingsMenu.settingsCurrencies);
                 I.waitForNavigation();
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCurrencies.currenciesMainDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCurrencies.currenciesMainDIVElement);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCurrencies.addCurrenciesButton, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCurrencies.addCurrenciesButton);
});

Scenario('Левое меню - Настройки -> Статусы', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsStatuses.settingsStatuses, 5);
        I.click(leftMenuSettingsPO.locatorsSettingsStatuses.settingsStatuses);
                I.waitForNavigation();

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsStatuses.statusesMainDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsStatuses.statusesMainDIVElement);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsStatuses.addButtonCreateNewStatus, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsStatuses.addButtonCreateNewStatus);
        I.click(leftMenuSettingsPO.locatorsSettingsStatuses.addButtonCreateNewStatus);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsStatuses.menuStatusAdd, 4);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsStatuses.menuStatusAdd);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsStatuses.buttonCancel, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsStatuses.buttonCancel);
        I.click(leftMenuSettingsPO.locatorsSettingsStatuses.buttonCancel);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsStatuses.statusesMainDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsStatuses.statusesMainDIVElement);
});

Scenario('Левое меню - Настройки -> Контрагенты', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForText(leftMenuSettingsPO.namesSettingsMenu.settingsCounterParties, 5);
        I.click(leftMenuSettingsPO.namesSettingsMenu.mainElementCounterParties);
                I.waitForNavigation();
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCounterParties.mainElementCounterParties, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCounterParties.mainElementCounterParties);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCounterParties.buttonCloseAddPartner, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCounterParties.buttonCloseAddPartner);
        I.click(leftMenuSettingsPO.locatorsSettingsCounterParties.buttonCloseAddPartner);
});



Scenario('Левое меню - Настройки -> Типы заказов', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.settingsTypeOrder, 5);
        I.click(leftMenuSettingsPO.locatorsSettingsTypeOrder.settingsTypeOrder);
                I.waitForNavigation();

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.typeOrderMAINDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.typeOrderMAINDIVElement);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.addButtonOrderType, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.addButtonOrderType);
        I.click(leftMenuSettingsPO.locatorsSettingsTypeOrder.addButtonOrderType);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.addOrderTypeMenu, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.addOrderTypeMenu);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.buttonCancel, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.buttonCancel);
        I.click(leftMenuSettingsPO.locatorsSettingsTypeOrder.buttonCancel);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.typeOrderMAINDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.typeOrderMAINDIVElement);
});

Scenario('Левое меню - Настройки -> Настройки статусов', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.settingsTypeOrder, 5);
        I.click(leftMenuSettingsPO.locatorsSettingsTypeOrder.settingsTypeOrder);
        I.waitForNavigation();

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.typeOrderMAINDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.typeOrderMAINDIVElement);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.addButtonOrderType, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.addButtonOrderType);
        I.click(leftMenuSettingsPO.locatorsSettingsTypeOrder.addButtonOrderType);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.addOrderTypeMenu, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.addOrderTypeMenu);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.buttonCancel, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.buttonCancel);
        I.click(leftMenuSettingsPO.locatorsSettingsTypeOrder.buttonCancel);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.typeOrderMAINDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsTypeOrder.typeOrderMAINDIVElement);
});

Scenario('Левое меню - Настройки -> Настройки Гео', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsGoe.settingsGeo, 5);
        I.click(leftMenuSettingsPO.locatorsSettingsGoe.settingsGeo);
                I.waitForNavigation();

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCounterParties.mainElementCounterParties, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCounterParties.mainElementCounterParties);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCounterParties.buttonCreateCounterParties, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCounterParties.buttonCreateCounterParties);
        I.click(leftMenuSettingsPO.locatorsSettingsCounterParties.buttonCreateCounterParties);

        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCounterParties.modelCreate, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCounterParties.modelCreate);
});

Scenario('Левое меню - Настройки -> Отправители Новой Почты', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsGoe.settingsGeo, 5);
        I.click(leftMenuSettingsPO.locatorsSettingsGoe.settingsGeo);
                I.waitForNavigation();
        I.waitForElement(leftMenuSettingsPO.locatorsSenderNewPost.mainDIVElementSenderNewPost, 5 );
        I.seeElement(leftMenuSettingsPO.locatorsSenderNewPost.mainDIVElementSenderNewPost);

        I.waitForElement(leftMenuSettingsPO.locatorsSenderNewPost.buttonCreateSenders, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSenderNewPost.buttonCreateSenders);
        I.click(leftMenuSettingsPO.locatorsSenderNewPost.buttonCreateSenders);

        I.waitForElement(leftMenuSettingsPO.locatorsSenderNewPost.windowCreateNewSender, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSenderNewPost.windowCreateNewSender);
        I.click(leftMenuSettingsPO.locatorsSenderNewPost.buttonCancelOnWindowCreateNewSender);
});

Scenario('Левое меню - Настройки -> Города отправки Новой Почты', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsGoe.settingsGeo, 5);
        I.click(leftMenuSettingsPO.locatorsSettingsGoe.settingsGeo);
                 I.waitForNavigation();
        I.waitForElement(leftMenuSettingsPO.locatorsSenderNewPost.mainDIVElementSenderNewPost, 5 );
        I.seeElement(leftMenuSettingsPO.locatorsSenderNewPost.mainDIVElementSenderNewPost);

        I.waitForElement(leftMenuSettingsPO.locatorsSenderNewPost.buttonCreateSenders, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSenderNewPost.buttonCreateSenders);
        I.click(leftMenuSettingsPO.locatorsSenderNewPost.buttonCreateSenders);

        I.waitForElement(leftMenuSettingsPO.locatorsSenderNewPost.windowCreateNewSender, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSenderNewPost.windowCreateNewSender);
        I.click(leftMenuSettingsPO.locatorsSenderNewPost.buttonCancelOnWindowCreateNewSender);
});

Scenario('Левое меню - Настройки -> Товары', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForElement(leftMenuSettingsPO.namesSettingsMenu.settingsCatalogGoods, 5);
        I.click(leftMenuSettingsPO.namesSettingsMenu.settingsCatalogGoods);
                I.waitForNavigation();
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsCatalogGoods.categoryMainDIVElement, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsCatalogGoods.categoryMainDIVElement);

        I.waitForElement(leftMenuSettingsPO.locatorsGoods.buttonAddNewGoods, 5);
        I.seeElement(leftMenuSettingsPO.locatorsGoods.buttonAddNewGoods);
        I.click(leftMenuSettingsPO.locatorsGoods.buttonAddNewGoods);
        I.waitForElement(leftMenuSettingsPO.locatorsGoods.createEditGoodsModal, 5);
        I.seeElement(leftMenuSettingsPO.locatorsGoods.createEditGoodsModal);
        I.waitForElement(leftMenuSettingsPO.locatorsGoods.buttonCloseCreateEditGoodsModal, 5);
        I.click(leftMenuSettingsPO.locatorsGoods.buttonCloseCreateEditGoodsModal);

        I.dontSeeElement(leftMenuSettingsPO.locatorsGoods.buttonCloseCreateEditGoodsModal);

});

Scenario('Левое меню - Настройки -> Сканер', (I, locatorsForCRM, leftMenuSettingsPO)=>{
        I.waitForElement(locatorsForCRM.locators.leftMenu_settings, 5);
        I.seeElement(locatorsForCRM.locators.leftMenu_settings);
        I.click(locatorsForCRM.locators.leftMenu_settings);
        I.waitForElement(leftMenuSettingsPO.namesSettingsMenu.settingsScanner, 5);
        I.click(leftMenuSettingsPO.namesSettingsMenu.settingsScanner);
                I.waitForNavigation();
        I.waitForElement(leftMenuSettingsPO.locatorsSettingsScanner.buttonSave, 5);
        I.seeElement(leftMenuSettingsPO.locatorsSettingsScanner.buttonSave)
});




const I  = actor();

module.exports = {

    namesSettingsMenu:{
        settingsCatalogGoods: 'Каталог товаров',
        settingsDiscounts:'Скидки',
        settingsCurrencies:'Валюты',
        settingsStatuses:'Статусы',
        settingsCounterParties:'Контрагенты',
        settingsTypeOrder:'Типы заказов',
        settingsGeo:'Гео',
        settingsSenders:'Отправители новой почты',
        settingsCitySenders:'Города отправители новой почты',
        settingsProducts:'Товары',
        settingsScanner:'Сканер',
        settingsDeliveryMethods:'Способы доставки'
    },

 locatorsSettingsCatalogGoods: {
     addCategoryButton:'button.btn.btn-success.add-category.pull-right',
     categoryMainDIVElement: '#statistics-container',
     buttonCreateCategory: 'button.btn.btn-success.add-category.pull-right',
     menuAddNewCategory: 'div.modal-body',
     inputMenuAddNewCategory: 'input.form-control',
     buttonSaveAddNewCategory: '#save_category'
 },

 locatorsSettingsDiscounts:{
     addDiscountButton:'button.btn.btn-success.add-discount.pull-right',
     discountsMainDIVElement:'#categoryMainDIVElement',
     discountsPagination:'#goodCategory_paginate',
 },

 locatorsSettingsCurrencies:{
     currenciesMainDIVElement: '#currency-table_wrapper',
     addCurrenciesButton: 'btn btn-success add-currency pull-right',

 },

 locatorsSettingsStatuses:{
        statusesMainDIVElement: '#statuses-table_wrapper',
        addButtonCreateNewStatus: '#add-status',
        menuStatusAdd: '#statuses-modal div.modal-dialog div.modal-content',
        buttonCancel:'#statuses-modal > div > div > div.modal-footer > button.btn.btn-default'
    },

  locatorsSettingsCounterParties: {
        mainElementCounterParties: '#partners-table_wrapper',
        buttonCreateCounterParties: '#add-partner',
        buttonExcel: 'a.dt-button.buttons-excel.buttons-html5',
        modelCreate: '#partners-modal > div > div',
                buttonCloseAddPartner: '#partners-modal > div > div > div.modal-footer > button.btn.btn-default',

    },

    locatorsSettingsTypeOrder:{
        typeOrderMAINDIVElement: "#order_type_table_wrapper",
        addButtonOrderType: 'add_order_type',
        addOrderTypeMenu: '#order_types_modal div.modal-content',
        buttonCancel: '#order_types_modal > div > div > div.modal-footer > button.btn.btn-default',
    },

    locatorsSettingsGoe:{
        buttonCreateGeo: '#add_geo',
        menuAddGeo: '#geos_modal div.modal-dialog div.modal-content',
        mainDIVGeoAdd: 'div.dataTables_scroll'
    },

    locatorsSenderNewPost:{
        mainDIVElementSenderNewPost: '#new_post_senders_table_wrapper',
        buttonCreateSenders: '#add_new_post_sender',
        windowCreateNewSender: '#new_post_senders_modal > div > div > div.modal-body',
        buttonCancelOnWindowCreateNewSender: '#add_new_post_sender'
    },

    locatorsCityNewPost:{
        buttonCreateSenderCity: '#add_sender_city',
        mainDIVElementCityNewPost: '#sender_cities_table_wrapper',
        windowCreateNewCityNewPost: '#new_post_senders_modal > div > div > div.modal-body',

    },

    locatorsGoods:{
        mainDIVElementLocatorsGoods: 'div.row.nomargin  div.col-xs-12.goods_table_wr',
        buttonAddNewGoods: '#add-good',
        createEditGoodsModal: '#goodsModal',
        buttonCloseCreateEditGoodsModal: '#goodsModal > div > div > div.modal-header > button',
    },

    locatorsSettingsScanner:{
        buttonSave: 'button.btn.btn-success.save-ttns',
        dropdownCountrySelect:'div.select-del-r div.SumoSelect.sumo_name_geo',
        dropdownDeliveryMethod:'div.SumoSelect.sumo_delivery_type select.del.form-control.delivery-method.required-input.SumoUnder',
        dropdownDeliveryPerformer:'div.SumoSelect.sumo_delivery_type select.del.form-control.delivery-method.required-input.SumoUnder',
        dropdownAction:'select.del.form-control.scaner-action.required-input.SumoUnder',
        buttonClearAll:'div.select-del-r button.btn.btn-success.clear-all',

    },

    locatorsDeliveryMethods:{
        mainDIVElementLocatorsDeliveryMethods: '#delivery-method-table_wrapper',
        buttonCreateDeliveryMethods: 'button.btn.btn-success.delivery-method-create.pull-right'
    }







};

exports.config = {
  tests: '.\\tests\\*_test.js',
  output: './output',
  multiple: {
    "parallel":{
      "chunks": 3,
    }
  },
  helpers: {
    Puppeteer: {
      "url": 'http://127.0.0.1:8000',
      "show": false,
      "windowSize": '1366x768'
    },
  },

  include: {
    I:
        './steps_file.js',
      "locatorsForCRM": './pages/locatorsForCRM.js',
      "mainGridPO": './pages/mainGridPO.js',
      "leftMenuBottomsPO": './pages/leftMenuBottomsPO.js',
      "adminUserSettingsPO": './pages/adminUserSettingsPO.js',
      "singleAdminUserSettings": './pages/singleAdminUserSettings.js',
      "adminUserSIP": './pages/adminUserSIP.js',
      "rightMenuPageObject": './pages/rightMenuPageObject.js',
      "leftMenuSettingsPO": './pages/leftMenuSettingsPO.js',
  },

  bootstrap: null,
  mocha: {},
  name: 'CRM2_codeceptjs',
  "plugins": {
    "allure":{
      "enabled": true,
    },
  translation: 'en-EN'
},
};
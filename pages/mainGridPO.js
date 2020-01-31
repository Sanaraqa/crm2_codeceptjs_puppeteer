const I = actor();

module.exports = {

  locatorsMainGrid: {
      mainLocatorGrid: 'div#grid_container',
      divXPanel: 'div.x_panel',

  },

    gotooCRM(){
      I.waitForElement(this.locatorsMainGrid.mainLocatorGrid, 5);
      I.seeElement(this.locatorsMainGrid.mainLocatorGrid);
    },

};

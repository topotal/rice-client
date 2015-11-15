Alloy.CFG.GREEN = '#BCCC14';
Alloy.CFG.LIGHT_GRAY = '#CCCCCC';
Alloy.CFG.Width = Ti.Platform.displayCaps.dpi;
Alloy.Globals = {
  currentNavWin: '',
  windowStack: {},

  /**
   * ナビゲーションウィンドウを開く
   * @param name String
   */
  openNavWindow: (name) => {
    console.info(name);
    if(Alloy.Globals.windowStack[name]) {
      console.info('すでに開いています');
      return;
    }

    Alloy.Globals.currentNavWin = name;

    Alloy.Globals.windowStack[name] = Alloy.createController(name + '/navWin').getView();
    Alloy.Globals.windowStack[name].open();
  },

  /**
   * ウィンドウを開く
   * @param name String
   */
  openWindow: (name) => {
    var newWin = Alloy.createController(name).getView();
    Alloy.Globals.navwindow.openWindow(newWin);
  }

};

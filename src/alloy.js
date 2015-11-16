Alloy.CFG.GREEN = '#BCCC14';
Alloy.CFG.LIGHT_GRAY = '#CCCCCC';
Alloy.CFG.Width = Ti.Platform.displayCaps.dpi;
Alloy.Globals = {
  currentNavWinName: '',
  navWinStack: {},

  /**
   * ナビゲーションウィンドウを開く
   * @param name String
   * @param defaultWinName String
   * @param option Object
   */
  openNavWindow: (name, defaultWinName, option) => {
    option = option || {};
    if(Alloy.Globals.navWinStack[name]) {
      console.info('すでに開いています');
      return;
    }

    var defaultWin = Alloy.createController(name + '/' + defaultWinName + '/window').getView();
    var newNavWin = Alloy.createController(name + '/navWin').getView();
    newNavWin.name = name;
    newNavWin.window = defaultWin;
    Alloy.Globals.currentNavWinName = name;
    Alloy.Globals.navWinStack[name] = {
      navWin: newNavWin,
      currentWinName: defaultWinName,
      windowStack: {}
    };
    Alloy.Globals.navWinStack[name].windowStack[defaultWinName] = defaultWin;
    Alloy.Globals.navWinStack[name].navWin.open(option);
  },


  /**
   * ナビゲーションウィンドウを閉じる
   * @param name String
   */
  closeNavWin: (name) => {
    var targetNavWinName = name || Alloy.Globals.currentNavWinName;
    var targetNavWin = Alloy.Globals.navWinStack[targetNavWinName].navWin;
    targetNavWin.close();
    Alloy.Globals.navWinStack[targetNavWinName] = null;
  },


  /**
   * ウィンドウを開く
   * @param name String
   */
  openWindow: (name) => {
    var newWinPath = Alloy.Globals.currentNavWinName + '/' + name + '/window';
    var newWin = Alloy.createController(newWinPath).getView();
    Alloy.Globals.currentNavWin.openWindow(newWin);
  }

};

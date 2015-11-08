Alloy.CFG.GREEN = '#BCCC14';
Alloy.CFG.LIGHT_GRAY = '#CCCCCC';
Alloy.CFG.Width = Ti.Platform.displayCaps.dpi;
Alloy.Globals = {
    ctr: 0,
    openWindow: function() {
        Alloy.Globals.ctr++;
        Alloy.Globals.navwindow.openWindow(Alloy.createController('win').getView());
    }
};

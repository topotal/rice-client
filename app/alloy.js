'use strict';

Alloy.CFG.Width = Ti.Platform.displayCaps.dpi;
Alloy.Globals = {
    ctr: 0,
    openWindow: function openWindow(e) {
        Alloy.Globals.ctr++;
        Alloy.Globals.navwindow.openWindow(Alloy.createController('win').getView());
    }
};
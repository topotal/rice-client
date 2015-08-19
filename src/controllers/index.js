if (OS_IOS) {
    $.index = $.ios_base;
} else if (OS_ANDROID) {
    $.index = $.android_base;
} else {
    (Ti.UI.createWindow({
        backgroundColor: '#FFFFFF'
    })).open();
}
$.index.open();

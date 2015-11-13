import PageManager from 'pageManager';

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

$.index.addEventListener('close', () => {
  $.destroy();
});

var pageManager = new PageManager();
pageManager.addEventListener(PageManager.CHANGE_PAGE, () => {
  var nextPage = Alloy.createController(pageManager.currentPage).getView();
  console.info(nextPage);
  $.index.openWindow(nextPage);
});

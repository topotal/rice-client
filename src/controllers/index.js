if (OS_IOS) {
    $.index = $.ios_base;
} else if (OS_ANDROID) {
    $.index = $.android_base;
} else {
    (Ti.UI.createWindow({
        backgroundColor: '#FFFFFF'
    })).open();
}

//// Android だったらアクションバーにメニューを表示する 
//if (OS_ANDROID) {
//  var activity = $.index.getActivity();
//  activity.onCreateOptionsMenu = function (e2) {
//    var menuItem = e2.menu.add({
//      title: 'Add',
//      icon: '/images/ic_action_edit.png',
//      showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
//    });
//
//    // Tasks コントローラのオブジェクトを作り、
//    // そのメソッドとして addTask を呼び出す
//    var tasksController = Alloy.createController('Tasks');
//    menuItem.addEventListener('click', tasksController.addTask);
//  };
//  activity.invalidateOptionsMenu();
//}

$.index.open();

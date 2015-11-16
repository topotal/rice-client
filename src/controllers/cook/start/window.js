var clickStartHandler = () => {
  Alloy.Globals.openWindow('record');
};
$.startButton.addEventListener('click', clickStartHandler);

var clickCloseHandler = () => {
  Alloy.Globals.closeNavWin();
};
$.closeButton.addEventListener('click', clickCloseHandler);

// 炊飯ボタン表示アニメーション
var showButtonAnimate = Ti.UI.createAnimation({
  bottom: 32,
  duration: 300,
  curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
});
showButtonAnimate.addEventListener('complete', function() {
  cookButtonShowing = false;
});

// 炊飯ボタン非表示アニメーション
var hideButtonAnimate = Ti.UI.createAnimation({
  bottom: -60,
  duration: 300,
  curve: Ti.UI.ANIMATION_CURVE_EASE_OUT
});
hideButtonAnimate.addEventListener('complete', function() {
  cookButtonHiding = false;
});

var cookButtonShowing = false;
var onScrollEnd = (e) => {
  if(cookButtonShowing) {
    return;
  }

  // 一番上に来た時のみ炊飯ボタンを表示させる
  if(e.contentOffset.y !== 0) {
    return;
  };

  cookButtonShowing = true;
  $.cookButton.animate(showButtonAnimate);
};
$.table.getView().addEventListener('scrollend', onScrollEnd);

var cookButtonHiding = false;
var onScroll = () => {
  if(cookButtonHiding) {
    return;
  }
  cookButtonHiding = true;
  $.cookButton.animate(hideButtonAnimate);
};
$.table.getView().addEventListener('scroll', onScroll);

var data = [
  {
    name: 'sawa-zen',
    icon: 'https://pbs.twimg.com/profile_images/639689793119453184/aAyiXJuc.jpg',
    image: 'https://www.mrso.jp/mrsocmscustome/wp-content/uploads/2013/10/%E3%81%8A%E7%B1%B3.jpg'
  },
  {
    name: 'nari',
    icon: 'https://secure.gravatar.com/avatar/ed424b1e857828ce69b0fdf4c3291d2e.jpg?s=192&d=https%3A%2F%2Fslack.global.ssl.fastly.net%2F66f9%2Fimg%2Favatars%2Fava_0016.png',
    image: 'https://www.mrso.jp/mrsocmscustome/wp-content/uploads/2013/10/%E3%81%8A%E7%B1%B3.jpg'
  },
  {
    name: 'rrreeeyyy',
    icon: 'https://s3-us-west-2.amazonaws.com/slack-files2/avatars/2014-10-10/2786170887_192.jpg',
    image: 'https://www.mrso.jp/mrsocmscustome/wp-content/uploads/2013/10/%E3%81%8A%E7%B1%B3.jpg'
  }
];

var rows = [];
_.each(data, (rowData) => {
  rows.push($.table.createRow(rowData));
});
$.table.setData(rows);

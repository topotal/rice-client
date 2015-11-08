var hideButtonAnimate = Ti.UI.createAnimation();
hideButtonAnimate.bottom = -60;
hideButtonAnimate.duration = 300;
hideButtonAnimate.curve = Ti.UI.ANIMATION_CURVE_EASE_OUT;
var isScrolling = false;

var onScroll = (e) => {
  if(isScrolling) {
    return;
  }

  isScrolling = true;
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

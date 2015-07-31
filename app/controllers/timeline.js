'use strict';

var data = [{
  title: 'テスト1',
  image: 'http://sawa-zen.com/img/ML21501.png'
}, {
  title: 'テスト2',
  image: 'http://sawa-zen.com/img/ML21501.png'
}, {
  title: 'テスト3',
  image: 'http://sawa-zen.com/img/ML21501.png'
}, {
  title: 'テスト4',
  image: 'http://sawa-zen.com/img/ML21501.png'
}];

var items = [];

_.each(data, function (itemData) {
  items.push({
    test: {
      text: itemData.title
    },
    image: {
      image: itemData.image
    }
  });
});

$.main_section.setItems(items);

function onCook(e) {
  var cookWin = Alloy.createController('cook').getView();
  cookWin.open();
};
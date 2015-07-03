'use strict';

var data = [{
  title: 'テスト1',
  image: 'https://www.mrso.jp/mrsocmscustome/wp-content/uploads/2013/10/%E3%81%8A%E7%B1%B3.jpg'
}, {
  title: 'テスト2',
  image: 'https://www.mrso.jp/mrsocmscustome/wp-content/uploads/2013/10/%E3%81%8A%E7%B1%B3.jpg'
}, {
  title: 'テスト3',
  image: 'https://www.mrso.jp/mrsocmscustome/wp-content/uploads/2013/10/%E3%81%8A%E7%B1%B3.jpg'
}, {
  title: 'テスト4',
  image: 'https://www.mrso.jp/mrsocmscustome/wp-content/uploads/2013/10/%E3%81%8A%E7%B1%B3.jpg'
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
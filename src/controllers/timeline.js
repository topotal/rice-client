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

//// レコードの保存
//var record = Alloy.createModel('record', {
//  name: 'nari',
//  icon: 'kkkkkkkkkkk',
//  star: 0
//});
//record.save();


//// レコードの取得
//var records = Alloy.Collections.instance('record');
//records.fetch();
//records.map((v) => {
//  console.info(v.get('name'));
//});
//// 引数なしで全件取得
//records.fetch();
//records.map(function(user){
//    // レコードの値を取得。
//    Ti.API.info(user.id);   // IDは自動で付与されるみたい。
//    Ti.API.info(user.get('name'));
//    // JSONに変換も簡単。
//    Ti.API.info(user.toJSON());
//});


//records.fetch({
//  success: function(collection) {
//    Ti.API.info('Instruments Collection Retrieved.');
//    console.info(JSON.stringify(collection));
//  },
//  error: function(e) {
//    alert("Error: " + e);
//  }
//});


var rows = [];
_.each(data, (rowData) => {
  rows.push($.table.createRow(rowData));
});
$.table.setData(rows);

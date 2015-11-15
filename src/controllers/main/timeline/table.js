// rowの生成
exports.createRow = (data) => {
  var row = Alloy.createController('main/timeline/tableRow', data).getView();
  return row;
};

exports.setData = (list) => {
  $.table.setData(list);
};

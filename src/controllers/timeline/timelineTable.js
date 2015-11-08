// rowの生成
exports.createRow = (data) => {
  var row = Alloy.createController('timeline/timelineTableRow', data).getView();
  return row;
};

exports.setData = (list) => {
  $.table.setData(list);
};

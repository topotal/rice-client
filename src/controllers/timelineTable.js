// rowの生成
exports.createRow = () => {
  return Alloy.createController('timelineTableRow').getView();
};

exports.setData = (list) => {
  $.table.setData(list);
};

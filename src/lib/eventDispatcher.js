export default class EventDispatcher {

  constructor() {
    this.listeners = {};
  }

  // リスナーの追加
  addEventListener(type, listener) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }

    this.listeners[type].push(listener);
  }

  // リスナーの削除
  removeEventListener(type, listener) {

    var listeners, i;

    listeners = this.listeners[type];

    if (listeners) {
      for (i = listeners.length - 1; i >= 0; --i) {
        if (listeners[i].l === listener) {
          listeners.splice(i, 1);
        }
      }
    }
  }

  // リスナーの実行
  fireEvent(type) {
    var i;
    var event = {};

    event.target = this;
    event.type = type;

    if (this.listeners[type]) {

      for (i = 0; i < this.listeners[type].length; ++i) {
        this.listeners[type][i](event);
      }
    }
  }
}

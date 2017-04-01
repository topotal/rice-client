import EventEmitter from 'eventemitter3';

export default class SceneManager extends EventEmitter {

  static get instance() {
    return SceneManager._instance || new SceneManager();
  }

  constructor() {
    super();

    SceneManager._instance = this;
  }

  to(route) {
    this.emit('forward', { route: route });
  }

  back() {
    this.emit('back');
  }
}

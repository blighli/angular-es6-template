import autobind from 'autobind-decorator';


export default class BaseController {

  listeners = [];

  constructor() {
    this.init();
  }

  init() {
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  @autobind
  cleanup() {
    this.listeners.forEach(fn => fn());
    this.listeners = [];
  }

}

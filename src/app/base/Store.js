import ee from 'eventemitter2';
import Immutable from 'immutable';

export const STATE = Symbol('state');


export default class Store extends ee.EventEmitter2 {

  constructor() {
    super();
    this[STATE] = Immutable.Map();
    this.init();
  }

  init() {
  }

  get state() {
    return this[STATE];
  }

  set state(newState) {
    this[STATE] = this[STATE].merge(Immutable.fromJS(newState));
    this.emitChange();
  }

  emitChange() {
    this.emit('change');
  }

  on(event, listener) {
    super.on(event, listener);

    // return bound cleanup function
    return () => {
      this.off(event, listener);
    }
  }
}

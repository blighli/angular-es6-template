import ee from 'eventemitter2';
import Promise from 'src/app/utils/promise';

import request from 'src/app/backend/restCommunication';


export default class Actions extends ee.EventEmitter2 {

  constructor() {
    super();
    this.wrapActions();
  }

  wrapAction(name, fn) {
    return (...args) => {
      let result = fn.apply(this, args);

      if (result.then) {
        // fn returns promise, handle!
        this.handlePromise(name, result);
      } else {
        // sync fn, just emit
        this.emit(name, result);
      }

      return result;
    };
  }

  wrapActions() {
    let fnNames = Object.getOwnPropertyNames(this.constructor.prototype).filter(name => name !== 'constructor');

    fnNames.map(name => {
      this[name] = this.wrapAction(name, this[name]);
    });
  }


  handlePromise(name, promise) {
    this.emit(`${name}.start`);

    promise
      .then((...data) => {
        //console.log('promise suc', data);
        this.emit(name, ...data);
        this.emit(`${name}.success`, ...data);
      })
      .catch((...error) => {
        //console.log('promise catch', name, error, error[0].message);
        this.emit(name, ...error);
        this.emit(`${name}.error`, ...error);
      });
  }

  on(event, listener) {
    super.on(event, listener);

    // return bound cleanup function
    return () => {
      this.off(event, listener);
    }
  }

}

import Immutable from 'immutable';

export const DATA = Symbol('data');


export default class Model {

  constructor(data) {
    this[DATA] = Immutable.fromJS(data);
  }

  get data() {
    return this[DATA];
  }

};

import Model from 'src/app/base/Model';
import Immutable from 'immutable';

describe('Model', () => {

  describe('an instance', () => {

    let subject;
    let data = { test: 'data' };

    beforeEach(() => {
      subject = new Model(data);
    });

    it('creates an instance', () => {
      expect(subject).toEqual(jasmine.any(Model));
    });

    it('stores given data as immutable Map', () => {
      expect(subject.data).toEqual(jasmine.any(Immutable.Map));
      expect(subject.data.get('test')).toEqual('data');
    });

  });

});

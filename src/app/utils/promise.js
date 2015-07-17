import Promise from 'bluebird';
import logger from './logger';

Promise.longStackTraces();
Promise.onPossiblyUnhandledRejection(error => {
  logger.error('Promise rejected', error);
});

// deprecated, but for Angular $q compatibility
export function defer() {
  var resolve, reject;
  var promise = new Promise(function() {
    resolve = arguments[0];
    reject = arguments[1];
  });
  return {
    resolve: resolve,
    reject: reject,
    promise: promise
  };
}

export function setupPromise($rootScope) {
  Promise.setScheduler(function (cb) {
    $rootScope.$evalAsync(cb);
  });
}

export default Promise;

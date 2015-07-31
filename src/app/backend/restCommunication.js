import http from 'src/app/utils/http';
import Promise from 'src/app/utils/promise';
import logger from 'src/app/utils/logger';
import {validate} from 'src/app/backend/schemaValidator';


export function request(method, url, data = {}, options = {}) {

  return new Promise((resolve, reject) => {
    http()({
      method: method,
      url: url,
      data: data
    })
      .success(responseData => {

        if (options.schema) {
          logger.debug('validating', options.schema, data);

          validate(options.schema, responseData)
            .then(() => {
              resolve(responseData);
            }).catch(() => {
              alert('JSON Schema validation failed!');
              reject('JSON Schema validation failed!');
            });

        } else {
          logger.info('Missing schema validation for', method, url);
          resolve(responseData);
        }

      })
      .error(reject);
  });

}

export function get(url, data = {}, options = {}) {
  return request('get', url, data, options);
}

export function post(url, data = {}, options = {}) {
  return request('post', url, data, options);
}

export function put(url, data = {}, options = {}) {
  return request('put', url, data, options);
}

export function del(url, data = {}, options = {}) {
  return request('delete', url, data, options);
}


export default {
  request: request,
  get: get,
  post: post,
  put: put,
  del: del
};

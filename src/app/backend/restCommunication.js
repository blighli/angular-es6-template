import http from 'src/app/utils/http';
import Promise from 'src/app/utils/promise';


export function request(method, url, data) {

  return new Promise((resolve, reject) => {

    http()({
      method: method,
      url: url,
      data: data
    })
      .success((data, status, headers) => {
        resolve(data, status, headers);
      })
      .error((data, status, headers) => {
        reject(data, status, headers);
      });
  });

}

export function get(url, data={}) {
  return request('get', url, data);
}

export function post(url, data={}) {
  return request('post', url, data);
}

export function put(url, data={}) {
  return request('put', url, data);
}

export function del(url, data={}) {
  return request('delete', url, data);
}


export default {
  request: request,
  get: get,
  post: post,
  put: put,
  del: del
};

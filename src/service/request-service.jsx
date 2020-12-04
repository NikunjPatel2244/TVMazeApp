import axios from 'axios';

function request(method, url, data, headers = {}) {
  return axios({
    method,
    url,
    data,
    headers,
  });
}


export default class RequestService {
  static fetch(url, data) {
    return request('get', url, data);
  }

  static save(url, data) {
    return request('post', url, data);
  }

  static update(url, data) {
    return request('put', url, data);
  }

  static updateWithHeaders(url, data, headers) {
    return request('put', url, data, headers);
  }

  static delete(url, data) {
    return request('delete', url, data);
  }

  static getPost(method, url, data) {
    return request(method, url, data);
  }
}

import request from '../utils/request';

export function login(username, password) {
  return request({
    url: '/authenticate',
    method: 'post',
    data: {
      username,
      password
    }
  });
}

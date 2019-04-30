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

export function register(regForm) {
  return request({
    url: '/user/register',
    method: 'post',
    data: {
      email: regForm.email,
      password: regForm.password,
      mobile: regForm.phone,
      name: regForm.username
    }
  });
}

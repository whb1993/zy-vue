import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, setToken } from './utils/auth';
import { login } from './api/login';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data;
          setToken(data['id_token']);
          commit('SET_TOKEN', data.token);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    }
  }
});

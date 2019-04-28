import axios from 'axios';
//import { UNAUTH_USER } from '../store/user/constants';

export default {
  setupInterceptors: (store) => {
    // Add a response interceptor
    axios.interceptors.response.use(response => response.data, (error) => {
      // catches if the session ended!
      // if (error.response.data.token.KEY === 'ERR_EXPIRED_TOKEN') {
      //   console.log('EXPIRED TOKEN!');
      //   localStorage.clear();
      //   store.dispatch({ type: UNAUTH_USER });
      // }
      return Promise.reject(error.response.data);
    });
  },
};

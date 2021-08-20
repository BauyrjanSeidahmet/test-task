import axios from 'axios';
// import store from './store/configureStore';

const instance = axios.create({ baseURL: 'https://api.doover.tech' });

instance.interceptors.request.use((req) => {
  // const users = store.getState().users;
  // if (users.user) req.headers['Authorization'] = `Bearer ${users.user.token}`;
  req.headers['Authorization'] =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5NTY0NDM4LCJqdGkiOiJhMTYxYzhlMjEwZGQ0N2IzOTk2ZmEwM2U2NGZjZjk3NiIsInVzZXJfaWQiOiJiZGY2ZjVjNS0wMmM1LTQ2ZTgtOGNlMy1kYmE4YjFlNjJhMGUifQ.4W8oUC6o0ftnwDMLYTsXcOytKCR6WBOkRoF9-PT4WTs';
  return req;
});

export default instance;

import axios from 'axios';
// import store from './store/configureStore';

const instance = axios.create({ baseURL: 'https://api.doover.tech' });

instance.interceptors.request.use((req) => {
  // const users = store.getState().users;
  // if (users.user) req.headers['Authorization'] = `Bearer ${users.user.token}`;
  req.headers['Authorization'] =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5NDc3NjE3LCJqdGkiOiI0OTVjYzIwMzk1MjA0OGVhYjI3OWRmNDQ5YmU4M2ZhZSIsInVzZXJfaWQiOiJiZGY2ZjVjNS0wMmM1LTQ2ZTgtOGNlMy1kYmE4YjFlNjJhMGUifQ.YkUJWi0n2oRRwnYD3Gxy-dI09OXXkwAfUIkYB_9HOeI';
  return req;
});

export default instance;

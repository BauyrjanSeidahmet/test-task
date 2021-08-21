import axios from 'axios';
import store from './store/configureStore';

const instance = axios.create({ baseURL: 'https://api.doover.tech' });

instance.interceptors.request.use((req) => {
  const users = store.getState().users;
  if (users.user) req.headers['Authorization'] = `Bearer ${users.user.token}`;

  // чтобы проверить приложение, нужно разкомитить нижние 2 строки и коммитить 8 строку
  // req.headers['Authorization'] =
  //   'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI5NjEzNTQ1LCJqdGkiOiIwOTY4OWJkM2RjYjk0ZDk5OGY3YjBkYjQ3ZWU1MjI5YSIsInVzZXJfaWQiOiJiZGY2ZjVjNS0wMmM1LTQ2ZTgtOGNlMy1kYmE4YjFlNjJhMGUifQ.qWzLz6e58ofpYoKAQ3ZSIZAkb3-fjWDc1yzmtW6XBEQ';
  return req;
});

export default instance;

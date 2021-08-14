import axios from 'axios';
import store from "./store/configureStore";

const instance = axios.create(
    {baseURL: 'https://api.doover.tech'}
)

instance.interceptors.request.use(req => {
    const users = store.getState().users;
    if (users.user) req.headers["Authorization"] = `Bearer ${users.user.token}`;
    return req;
  });

export default instance;
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const set = (key, value, obj) => cookies.set(key, value, obj);

const get = key => cookies.get(key);

export default {
  set,
  get,
};

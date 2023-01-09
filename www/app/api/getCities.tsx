import axios from 'axios';
import { BASE_URL } from './constants';

const getCities = async () => {
  let config = {
    method: 'get',
    url: `${BASE_URL}v1/hostel/city`,
    headers: { }
  };

  try {
    const res = await axios(config)
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export default getCities;
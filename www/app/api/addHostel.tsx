import axios from 'axios';
import { BASE_URL } from './constants';

const addHostel = async (hostel:any) => {
  let config = {
    method: 'post',
    url: `${BASE_URL}v1/hostel/save`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: hostel
  };
  try {
    const res = await axios(config)
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export default addHostel;
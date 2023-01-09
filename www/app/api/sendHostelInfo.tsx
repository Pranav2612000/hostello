import axios from 'axios';
import { BASE_URL } from './constants';

const sendHostelInfo = async ({ firstName, lastName, email, age, hostelId}:any ) => {
  if(!age) {
    age = 0;
  }
  let config = {
    method: 'post',
    url: `${BASE_URL}v1/hostel/email/${hostelId}`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data: {
      firstName,
      lastName,
      email,
      age
    }
  };

  try {
    const res = await axios(config)
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export default sendHostelInfo;
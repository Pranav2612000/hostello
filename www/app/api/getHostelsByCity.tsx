import axios from 'axios';

const getHostelsByCity = async (city: any) => {
  let config = {
    method: 'get',
    url: `http://localhost:8080/v1/hostel/findall/${city}`,
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
export default getHostelsByCity;


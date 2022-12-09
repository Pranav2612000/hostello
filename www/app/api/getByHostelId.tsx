import axios from 'axios';

const getByHostelId = async (id: any) => {
  let config = {
    method: 'get',
    url: `http://localhost:8080/v1/hostel/findbyId/${id}`,
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
export default getByHostelId;

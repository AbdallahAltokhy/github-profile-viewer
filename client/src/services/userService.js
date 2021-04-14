import axios from 'axios';

const getUserProfile = async userName => {
  const res = await axios.get(`https://api.github.com/users/${userName}`);
  return res;
};


export default getUserProfile;
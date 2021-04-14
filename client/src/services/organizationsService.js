import axios from 'axios';

const getUserOrgs = async userName => {
  const res = await axios.get(`https://api.github.com/users/${userName}/orgs`);
  return res;
};


export default getUserOrgs;
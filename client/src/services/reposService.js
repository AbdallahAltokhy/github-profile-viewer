import axios from 'axios';

const getUserRepos = async userName => {
  const res = await axios.get(`https://api.github.com/users/${userName}/repos`);
  return res;
};


export default getUserRepos;
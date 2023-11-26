import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://blood-aid-server.vercel.app/',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

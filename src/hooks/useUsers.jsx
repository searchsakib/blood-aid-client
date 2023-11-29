import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch: usersFetch,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });
  return [users, usersFetch, isUserLoading];
};

export default useUsers;

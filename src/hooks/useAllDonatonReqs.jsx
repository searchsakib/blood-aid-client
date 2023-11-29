import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllDonatonReqs = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allDonationReqs = [],
    refetch: allDonationReqsRefetch,
    isLoading: isDonationReqsLoading,
  } = useQuery({
    queryKey: ['allDonationReqs'],
    queryFn: async () => {
      const res = await axiosSecure.get('/allDonationReqs');
      return res.data;
    },
  });
  return [allDonationReqs, allDonationReqsRefetch, isDonationReqsLoading];
};

export default useAllDonatonReqs;

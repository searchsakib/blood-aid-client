// api, axios (axios secure), tan stack

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useDonationReqs = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: donationReqs = [] } = useQuery({
    queryKey: ['donationReqs', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/dashboard/create-donation-request?requester_email=${user?.email}`
      );
      console.log('API resPonse:', res.data);
      return res.data;
    },
  });

  return [donationReqs, refetch];
};

export default useDonationReqs;

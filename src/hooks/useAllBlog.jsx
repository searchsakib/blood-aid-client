import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllBlog = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allBlogs = [],
    refetch: allBlogsRefetch,
    isLoading: isAllBlogsLoading,
  } = useQuery({
    queryKey: ['allBlogs'],
    queryFn: async () => {
      const res = await axiosSecure.get('/add-blog');
      return res.data;
    },
  });
  return [allBlogs, allBlogsRefetch, isAllBlogsLoading];
};

export default useAllBlog;

import { Helmet } from 'react-helmet-async';
import useAllBlog from '../../hooks/useAllBlog';

const Blog = () => {
  const [allBlogs, allBlogsRefetch, isAllBlogsLoading] = useAllBlog();
  console.log('This all blogs data', allBlogs);

  if (isAllBlogsLoading) {
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Helmet>
        <title>Blood Aid | Blog</title>
      </Helmet>

      <h2 className="text-3xl capitalize text-center pb-5 pt-12 font-medium">
        Published Blogs
      </h2>

      <section className="pt-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allBlogs
            ?.filter((perBlog) => perBlog?.status === 'published')
            .map((perBlog) => (
              <div
                key={perBlog?._id}
                className="card card-compact bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={perBlog?.photo} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{perBlog?.title}</h2>

                  <div
                    dangerouslySetInnerHTML={{ __html: perBlog?.content }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

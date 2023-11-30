import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAllBlog from '../../../hooks/useAllBlog';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';

const ContentManagement = () => {
  const { user } = useAuth();

  // filter by status
  const [filterStatus, setFilterStatus] = useState('all');

  const [allBlogs, allBlogsRefetch, isAllBlogsLoading] = useAllBlog();
  console.log('This all blogs data', allBlogs);
  const axiosSecure = useAxiosSecure();

  if (isAllBlogsLoading)
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Helmet>
        <title>Blood Aid | Content Management</title>
      </Helmet>

      {/* Filtering options starts */}
      <div className="flex items-center justify-end my-4">
        <label htmlFor="statusFilter" className="mr-2 font-semibold">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          className="p-2 border border-gray-300 rounded-md"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          {/* Add more status options if needed */}
        </select>
      </div>
      {/* Filtering options ends */}

      <div className="flex items-center justify-end">
        <Link
          to="/dashboard/content-management/add-blog"
          rel="noopener noreferrer"
          className="capitalize px-8 py-3 text-lg font-semibold rounded dark:bg-teal-600 hover:bg-teal-800 transition-colors duration-300 ease-in-out dark:text-white my-5"
        >
          Add Blog
        </Link>
      </div>
      <h2 className="text-3xl capitalize text-center py-5 font-medium">
        content management
      </h2>

      <section className="py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allBlogs
            ?.filter((perBlog) => {
              if (filterStatus === 'all') return true;
              return perBlog.status === filterStatus;
            })
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

                  <div className="card-actions items-center justify-evenly">
                    <div className="">
                      <button className="btn btn-primary">Publish</button>
                      <button className="btn btn-primary">Publish</button>
                    </div>
                    <button className="btn btn-primary">Delete</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ContentManagement;

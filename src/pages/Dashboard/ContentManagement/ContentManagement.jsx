import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAllBlog from '../../../hooks/useAllBlog';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useVolunteer from '../../../hooks/useVolunteer';

const ContentManagement = () => {
  const { user } = useAuth();

  // filter by status
  const [filterStatus, setFilterStatus] = useState('all');

  //? blocking vlunteer from publish and blog
  const [isVolunteer, isVolunteerLoading] = useVolunteer();

  const [allBlogs, allBlogsRefetch, isAllBlogsLoading] = useAllBlog();
  console.log('This all blogs data', allBlogs);
  const axiosSecure = useAxiosSecure();

  //! Blog Unpublish Functionality
  const handleUnpublish = (id) => {
    axiosSecure.patch(`/dashboard/admin/unpublish/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        allBlogsRefetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Blog is Unpublished!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //! Blog Unpublish Functionality
  const handlePublish = (id) => {
    axiosSecure.patch(`/dashboard/admin/publish/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        allBlogsRefetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Blog is Published!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //! Delete Blog Functionality
  const handleDeleteBlog = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/dashboard/delete-blog/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            allBlogsRefetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Blog has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  if (isAllBlogsLoading)
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Helmet>
        <title>Blood Aid | Content Management</title>
      </Helmet>

      <div className="flex items-center justify-end">
        <Link
          to="/dashboard/content-management/add-blog"
          rel="noopener noreferrer"
          className="capitalize px-8 py-3 text-lg font-semibold rounded dark:bg-teal-600 hover:bg-teal-800 transition-colors duration-300 ease-in-out dark:text-white my-5"
        >
          Add Blog
        </Link>
      </div>

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
                      {perBlog?.status === 'draft' ? (
                        <div className="flex gap-2">
                          {isVolunteer ? (
                            <button className="btn btn-md rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978] btn-disabled">
                              Publish
                            </button>
                          ) : (
                            <button
                              onClick={() => handlePublish(perBlog?._id)}
                              className="btn btn-md rounded-none bg-[#2161a2] text-white hover:bg-[#1b4978]"
                            >
                              Publish
                            </button>
                          )}
                        </div>
                      ) : (
                        <div>
                          {isVolunteer ? (
                            <button className="btn btn-md rounded-none bg-[#166282] text-white hover:bg-[#1b4978] btn-disabled">
                              Unpublish
                            </button>
                          ) : (
                            <button
                              onClick={() => handleUnpublish(perBlog?._id)}
                              className="btn btn-md rounded-none bg-[#166282] text-white hover:bg-[#1b4978]"
                            >
                              Unpublish
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                    <div>
                      {isVolunteer ? (
                        <button className="btn btn-md rounded-none bg-[#d33] text-white hover:bg-[#ac2828] btn-disabled">
                          Delete
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDeleteBlog(perBlog?._id)}
                          className="btn btn-md rounded-none bg-[#d33] text-white hover:bg-[#ac2828]"
                        >
                          Delete
                        </button>
                      )}
                    </div>
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

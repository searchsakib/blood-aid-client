import { Helmet } from 'react-helmet-async';

import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { imageUpload } from '../../api/utils';

const AddBlog = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleAddBlog = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const myForm = e.target;

    const name = form.get('name');

    // const image = form.get('image');
    // const image = e.currentTarget.querySelector('[name="image"]').files[0];

    //photo upload
    const photoData = myForm.photo.files[0];
    const fetchedPhoto = await imageUpload(photoData);
    const photo = fetchedPhoto?.data?.display_url;

    const title = form.get('title');
    const content = form.get('content');
    const status = 'draft';

    const blogData = {
      title,
      photo,
      content,
      status,
    };
    console.log('New User', blogData);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-5 md:px-6 2xl:px-0">
        <Helmet>
          <title>Blood Aid | Add Blog</title>
        </Helmet>

        <div className="pt-[40px] pb-[40px] overflow-x-hidden">
          <div className="mx-auto w-5/12 min-w-fit ">
            <h2 className="text-3xl font-medium mt-3 text-center uppercase">
              Add Blog
            </h2>

            <form
              onSubmit={handleAddBlog}
              className="max-w-lg shadow-none rounded-none pt-4 pb-2"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="grid">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Thumbnail
                  </span>
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  className="file-input rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Content
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Content"
                  name="content"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#05386B] text-white hover:text-[#05386B]  hover:bg-blue-50 hover:border-2 hover:border-[#05386B] rounded-none">
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;

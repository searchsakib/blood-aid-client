import { Helmet } from 'react-helmet-async';

import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useRef } from 'react';
import JoditEditor from 'jodit-react';
import { imageUpload } from '../../../api/utils';

const AddBlog = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const editor = useRef(null); // Create a ref for the Jodit editor

  const [content, setContent] = useState(''); // State to manage the content for Jodit editor
  const [contentError, setContentError] = useState('');

  const handleAddBlog = async (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const myForm = e.target;

    //photo upload
    const photoData = myForm.photo.files[0];
    const fetchedPhoto = await imageUpload(photoData);
    const photo = fetchedPhoto?.data?.display_url;

    const title = form.get('title');
    const status = 'draft';

    const editorContent = editor.current.value.trim();
    if (!editorContent) {
      setContentError('Content cannot be empty');
      return;
    } else {
      setContentError(''); // Reset the error message if content is not empty
    }

    const blogData = {
      title,
      photo,
      content: editor.current.value, // Get content from the Jodit editor using ref
      status,
    };
    console.log('My Blog', blogData);

    //! axios post
    const res = await axiosSecure.post('/add-blog', blogData);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        title: 'Success!',
        text: 'Blog Added Successfully',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
      // navigate('/dashboard/my-donation-requests');
    }
    e.target.reset();
    setContent('');
  };

  // Function to handle content change in Jodit editor
  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-5">
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

              {/* Jodit React Editor */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium text-base">
                    Content
                  </span>
                </label>
                <JoditEditor
                  ref={editor}
                  value={content}
                  onChange={handleContentChange}
                />
                {contentError && (
                  <p className="text-red-500 mt-2">{contentError}</p>
                )}
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

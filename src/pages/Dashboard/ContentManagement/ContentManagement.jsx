import { Link } from 'react-router-dom';

const ContentManagement = () => {
  return (
    <div>
      <h2 className="text-3xl text-center py-5">
        This is content management page
      </h2>
      <Link
        to="/dashboard/content-management/add-blog"
        rel="noopener noreferrer"
        className="capitalize px-8 py-3 text-lg font-semibold rounded dark:bg-teal-600 hover:bg-teal-800 transition-colors duration-300 ease-in-out dark:text-white"
      >
        Add Blog
      </Link>
    </div>
  );
};

export default ContentManagement;

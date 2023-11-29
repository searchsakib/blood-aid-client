import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import { FaUsers } from 'react-icons/fa';

const AdminScreen = () => {
  const { user } = useAuth();

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center pb-10">
          Welcome 🎉{' '}
          <span className="font-semibold text-red-500">
            {user?.displayName}
          </span>
        </h2>
      </div>

      <Helmet>
        <title>Blood Aid | Dashboard Home</title>
      </Helmet>
      <div className="rounded-xl border-2 border-gray-100 bg-white">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" className="block shrink-0">
            <img
              alt="Speaker"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="h-14 w-14 rounded-lg object-cover"
            />
          </a>

          <div>
            <h3 className="font-medium sm:text-lg">
              <a href="#" className="hover:underline">
                Question about Livewire Rendering and Alpine JS
              </a>
            </h3>

            <p className="line-clamp-2 text-sm text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, accusantium temporibus iure delectus ut totam natus
              nesciunt ex? Ducimus, enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;

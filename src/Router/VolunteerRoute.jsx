import { Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useVolunteer from '../hooks/useVolunteer';

const VolunteerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isVolunteer, isVolunteerLoading] = useVolunteer();

  if (loading || isVolunteerLoading) {
    return (
      <div className="flex items-center justify-center m-14 lg:m-[150px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user && isVolunteer) {
    return children;
  }

  return <Navigate to="/" state={'/'} replace></Navigate>;
};

export default VolunteerRoute;

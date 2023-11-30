import useAdmin from '../../../hooks/useAdmin';
import useVolunteer from '../../../hooks/useVolunteer';
import AdminScreen from './AdminScreen';
import DonorScreen from './DonorScreen';
import VolunteerScreen from './VolunteerScreen';

const DefaultView = () => {
  const [isAdmin] = useAdmin();
  const [isVolunteer] = useVolunteer();

  return (
    <div>
      {isAdmin && !isVolunteer ? (
        <div>
          <AdminScreen></AdminScreen>
        </div>
      ) : isVolunteer ? (
        <div>
          <VolunteerScreen></VolunteerScreen>
        </div>
      ) : (
        <div>
          <DonorScreen></DonorScreen>
        </div>
      )}
    </div>
  );
};

export default DefaultView;

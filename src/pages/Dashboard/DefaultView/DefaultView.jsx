import useAdmin from '../../../hooks/useAdmin';
import AdminScreen from './AdminScreen';
import DonorScreen from './DonorScreen';
import VolunteerScreen from './VolunteerScreen';

const DefaultView = () => {
  const [isAdmin] = useAdmin();

  return (
    <div>
      {isAdmin ? (
        <div>
          <AdminScreen></AdminScreen>
        </div>
      ) : (
        <div>
          <DonorScreen></DonorScreen>
        </div>
      )}

      {/* <div>
        <VolunteerScreen></VolunteerScreen>
      </div> */}
    </div>
  );
};

export default DefaultView;

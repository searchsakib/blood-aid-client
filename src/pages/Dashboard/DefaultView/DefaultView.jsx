import useAdmin from '../../../hooks/useAdmin';
import AdminScreen from './AdminScreen';
import DonnerScreen from './DonnerScreen';
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
          <DonnerScreen></DonnerScreen>
        </div>
      )}

      {/* <div>
        <VolunteerScreen></VolunteerScreen>
      </div> */}
    </div>
  );
};

export default DefaultView;

import './App.css';
import { useParams } from 'react-router';

const UserProfile = () => {
  const id = useParams();
  console.log("User Profile called! : ID : ",id)

  return (
    <div className="UserProfile">
      UserProfile
    </div>
  );

}
  
export default UserProfile;
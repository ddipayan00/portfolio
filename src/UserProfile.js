import './App.css';
import { useParams } from 'react-router';

const UserProfile = (props) => {
    const id = useParams();
    console.log("User Profile called! : ID : ",id)
    console.log("User Profile called! : PROPS : ",props)
    return (
      <div className="UserProfile">
        UserProfile
      </div>
    );
  }
  
export default UserProfile;
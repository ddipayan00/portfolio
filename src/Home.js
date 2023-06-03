import Button from 'react-bootstrap/Button';
import './App.css';
import { useNavigate  } from "react-router-dom";
 
const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="Home">
      <br/> 
      {/* Have to learn grid flex box and css properly */}
      Home <br/><br/>
      <Button className="userClass" variant="primary" onClick={(e) => {e.preventDefault(); navigate("/user");}}>
          Go to User Page
      </Button>
      <br/><br/>
      <Button variant="danger" onClick={(e) => {e.preventDefault(); navigate("/test");}}>
          Go to Test Page
      </Button>
      <br/><br/>
      <Button variant="dark" onClick={(e) => {e.preventDefault(); navigate("/navigation");}}>
          Go to Navigation Page
      </Button>
      <br/><br/>
      <Button variant="warning" onClick={(e) => {e.preventDefault(); navigate("/extra");}}>
          Go to ExtraTest Page
      </Button>
    </div>
  );
}

export default Home;
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
        <Button variant="primary" onClick={(e) => {e.preventDefault(); navigate("/user");}}>
            Go to User Page
        </Button>
        <br/><br/>
        <Button variant="danger" onClick={(e) => {e.preventDefault(); navigate("/test");}}>
            Go to Test Page
        </Button>
      </div>
    );
  }

export default Home;
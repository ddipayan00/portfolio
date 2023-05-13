import './App.css';
import { useNavigate  } from "react-router-dom";
import { Button } from 'react-bootstrap';

const User = () => {
  let navigate = useNavigate();
    return (
      <div className="User">
        <br/>
        User
        <br/><br/>
        <Button variant="success" onClick={(e) => {e.preventDefault(); navigate("/");}}>
        Go to Home Page
        </Button>
        <br/><br/>
        <a className="btn text-white" style={{backgroundColor: "#333333"}} href="/user/" role="button">
          <i className="fab fa-github"></i>
          Github
        </a>
      </div>
    );
  }
  
export default User;
import './App.css';
import { useNavigate  } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Navigation = () => {
  let navigate = useNavigate();

  return (
    <div className="Navigation">
      <br/>
      Navigation
      <br/><br/>
      <Button variant="success" onClick={(e) => {e.preventDefault(); navigate("/");}}>
        Go to Home Page
      </Button>
      <br/><br/>

    </div>
  );
}
  
export default Navigation;
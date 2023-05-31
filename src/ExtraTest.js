import './App.css';
import { useNavigate  } from "react-router-dom";
import { Button } from 'react-bootstrap';

const ExtraTest = () => {
    let navigate = useNavigate();
    return (
        <div className="ExtraTest">
        <br/>
        ExtraTest
        <br/><br/>
        <Button variant="success" onClick={(e) => {e.preventDefault(); navigate("/");}}>
        Go to Home Page
        </Button>
        </div>
    );

}
  
export default ExtraTest;
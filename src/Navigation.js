import './App.css';
import { useNavigate  } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
    <Nav justify variant="tabs" >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/test">Test</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/user">User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/extra">Extra</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}



const Navigation = () => {
  let navigate = useNavigate();
  

  return (
    <div className="Navigation">
      <NavBar />
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
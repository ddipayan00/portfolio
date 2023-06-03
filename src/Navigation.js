import './App.css';
import { useNavigate  } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


function NavBar({navigate}) {
  return (
    <Nav justify variant="tabs" className='navBar' >
      <Nav.Item>
        {/* <Button variant="success" onClick={(e) => {e.preventDefault(); navigate("/");}}>
          Home
        </Button> */}
        <Nav.Link className="navBarItem" onClick={(e) => {e.preventDefault(); navigate("/");}}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* <Button variant="danger" onClick={(e) => {e.preventDefault(); navigate("/test");}}>
          Test
        </Button> */}
        <Nav.Link className="navBarItem" onClick={(e) => {e.preventDefault(); navigate("/test");}}>Test</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* <Button variant="primary" onClick={(e) => {e.preventDefault(); navigate("/user");}}>
          User
        </Button> */}
        <Nav.Link className="navBarItem" onClick={(e) => {e.preventDefault(); navigate("/user");}}>User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        {/* <Button variant="warning" onClick={(e) => {e.preventDefault(); navigate("/extra");}}>
          Extra
        </Button> */}
        <Nav.Link className="navBarItem" onClick={(e) => {e.preventDefault(); navigate("/extra");}}>Extra</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}



const Navigation = () => {
  let navigate = useNavigate();
  

  return (
    <div className="Navigation">
      <NavBar navigate={navigate} />
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
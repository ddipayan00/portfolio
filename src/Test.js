import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate  } from "react-router-dom";


function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const createUser = () => {
  console.log("FAKE API CALLED")
  return faker.helpers.multiple(createRandomUser, {
    count: 50,
  })
}
const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;






const Test = () => {
  const [USERS, setUSERS] = useState([])
  const [Flag, setFlag] = useState(false)
  let navigate = useNavigate();
  
  useEffect(() => {
    if (Flag === false){
      setUSERS(createUser())
      setFlag(!Flag)
    }
  },[Flag])

  return (
    <div className="Test">
      <br/>
      <Button variant="success" onClick={(e) => {e.preventDefault(); navigate("/");}}>
            Go to Home Page
      </Button>
      <br/><br/>
      <Table striped bordered hover variant={isBrowserDefaultDark() ? "dark" : "light"} >
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>email</th>
            <th>birthdate</th>
            <th>registeredAt</th>
            <th>userId</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {
              USERS.map((data,id) => {
                return (
                  <tr key={id}>
                    <td>{id+1}</td>
                    <td><Image width="100px" height="100px" alt="" src={data.avatar}  roundedCircle /></td>
                    <td>{data.email}</td>
                    <td>{data.birthdate.toDateString()}</td>
                    <td>{data.registeredAt.toDateString()}</td>
                    <td>{data.userId}</td>
                    <td>{data.username}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
    </div>
  );
}
  
export default Test;
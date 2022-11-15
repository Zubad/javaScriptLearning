import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {

  const [userList, setUser] = useState([]);

  function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUser(json))
  }
  useEffect(() => {
    getData();
  }, []);
  
  console.log(userList)

  return (
    <div className="App">
      <h1>User Table</h1>
      <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>User Profile</th>
                </tr>
                </thead>
                <tbody>
                    {
                      userList.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td><a href='https://github.com/Zubad' target="_blank"><Button variant="primary">Profile</Button></a></td>
                        </tr>
                      ))
                    }
                </tbody>
            </Table>
      <Button onClick={getData}>Click Me</Button>
    </div>
  );
}

export default App;

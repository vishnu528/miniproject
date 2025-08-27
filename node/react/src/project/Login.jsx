import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    
    alert(`Username: ${username}\nPassword: ${password}`);
    
  };

  return (

    <div className='m-2 pb-5  ' style={{backgroundColor:'#edf2f4'}}>
    <h1  className=" text-center pt-2  t">Login Page</h1>
    <Container >
    <Row className="justify-content-center mb-2 p-4 pt-1">
        <Col  xs={12} sm={10} md={8} lg={6} xl={4} > 
          <Card className="shadow-lg rounded-5  border-2" style={{background:'#355070 ',}}>
            <Card.Body>
              <h4 className="text-center mb-2 text-white">Login</h4>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label className='text-white'>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label className='text-white '>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="d-grid m-5">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Login;

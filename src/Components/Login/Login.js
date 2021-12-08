
import React, { useEffect, useState } from "react";
import {Form, Col, Row, Container, Image} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import icon from '../../Images/newhop.png';
import background from '../../Images/undraw_Order_ride_re_372k.png';
import './Login.css';
import firebase from "../../firebase";

import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";





const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
     const history = useHistory();
    useEffect(() => {
        if (loading) {
       // maybe trigger a loading screen
          return;
     }
        if (user) history.replace("/dashboard");
     }, [user, loading]);

  


    return (
        <>
        
        <Container>
       
            <Row>
            <Row>

                <Col xs={10} md={4}>


                </Col>
                    <Col xs={1} md={4}> 
                            <Image  src={icon} alt="image" fluid/>
                    </Col>

                </Row>
               

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text"
                        className="login__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    </Form.Group>
                    




                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                        className="login__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         placeholder="Password"
                         />
                    </Form.Group> 

                    <div className="d-grid gap-2">
                    
                    <Button variant="success"
                    onClick={() => signInWithEmailAndPassword(email, password)}
                    >
                     Login
                    </Button>
                        
                    <Button className="btn-primary"
                    variant="success"
                    onClick={signInWithGoogle}>
                    Login with Google
                    </Button>
      
                    </div>
                    <br/>
                    <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                    <br/> 
                    Forgot password? <Link to="/reset">Reset</Link> now.
                    </div>

                    </Form>
                    <br/>
                
                    <div className="d-grid gap-2">
                    </div>
                
                    <br/>

            
                <Col lg={8} md={6} sm={12}>
                <Image className="w-100 mt-5" src={background} alt="image" />
             </Col>

            </Row>
            
        </Container>
        
        
        </>
    )
}



export default Login;

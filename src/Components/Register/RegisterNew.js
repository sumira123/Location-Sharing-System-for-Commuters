import React, { useEffect, useState } from "react";
import {Form, Col, Row, Container, Image, Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import icon from '../../Images/newhop.png';
import registerbackground from '../../Images/undraw_progressive_app_m9ms.png';
import './Register.css';
import firebase from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";






const RegisterNew = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const register = () => {
      if (!name) alert("Please enter name");
      registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/login");
    }, [user, loading]);





    return (
        <>
        <Container className="mt-5">
            <Row>
             <Col xs={6} md={4} sm={12} className="text-center mt-3">
               
                
                <Image className="icon-img" src={icon} alt="image" />
               
    

                <Form>
                    <Form.Group controlId="formBasicName">
                      
                        <Form.Control type="text"
                        className="register__textBox"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"/>
                    </Form.Group>
                    
                    <br/>

                    <Form.Group  controlId="formBasicPassword">
                        
                        <Form.Control type="text"
                        className="register__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"/>
                    </Form.Group>

                    <br/>

                    <Form.Group  controlId="formBasicPassword">
                        
                        <Form.Control type="password"
                        className="register__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"/>
                    </Form.Group>
                   

                    <div className="d-grid gap-3">
                    <br/>
                     <Button variant="success" onClick={register}>Sign up </Button>
                     
                     <Button variant="success"
                     className="register__btn register__google"
                     onClick={signInWithGoogle}
                     >
                        Register with Google
                    </Button>
                     </div>
                     <br/>
                     
                    <div>
                    Already have an account? <Link to="/">Login</Link> now.
                    </div>

                      
                </Form>

                </Col>

                <Col lg={8} md={6} sm={12}>
                <Image className="w-100 mt-100" src={registerbackground} alt="image" />
                </Col>

            </Row>

        </Container>
        </>
    )
}



export default RegisterNew;

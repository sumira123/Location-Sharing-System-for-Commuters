import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../../firebase";
import "./Reset.css";
import Button from 'react-bootstrap/Button';
import {Form, Col, Row, Container, Image} from "react-bootstrap";
import icon from '../../Images/undraw_authentication_fsn5.png';




function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);


  
  return (

    
    <div className="reset">
      <div className="reset__container">
      
       <Image  width={500}  height={300} src={icon} alt="image" />
    
      <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter recovery email address</Form.Label>
                        <Form.Control
                        type="text"
                        className="reset__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                       />
                    </Form.Group>
      

        {/* <button
          className="reset__btn"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Send password reset email
        </button> */}

        <Button className="btn-primary"
                    variant="success"
                    onClick={() => sendPasswordResetEmail(email)}>
                    Send password reset email
                    </Button>
                    <br/>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>

      </Form>
      </div>
    </div>
  );
}


export default Reset;
import React from 'react';
import {Form, Col, Row, Container, Image, Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import icon from '../../Images/newhop.png';
import registerbackground from '../../Images/register-image01.png';
import './Login.css'



const Register = () => {

    return (
        <>
        <Container className="mt-5">
            <Row>
             <Col xs={6} md={4} sm={12} className="text-center mt-3">
               
                        <Image className="icon-img" src={icon} alt="image" />
               

    

                
                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Enter Full name</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>
                    
                    <br/>

                    <Form.Group  controlId="formBasicPassword">
                        {/* <Form.Label> Password </Form.Label> */}
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <br/>

                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Enter Full name</Form.Label> */}
                        <Form.Control type="text" placeholder="Phone" />
                    </Form.Group>
                    
                     <br/>

                     <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Enter Full name</Form.Label> */}
                        <Form.Control type="text" placeholder="City" />
                    </Form.Group>

                    <br/>
                
                    <Form.Group className="position-relative mb-3">
                              <Form.Label>Driving Lisence</Form.Label>
                             <Form.Control
                              type="file"
                              required
                              name="file"
                              />

                    </Form.Group>

                   

                    <br/>

                    <div className="d-grid gap-2">
                    <Form.Group>
                        <Form.Check type="checkbox" label="Agree to terms and conditions" />
                    </Form.Group>
                
                     <Button variant="success">Next</Button>{' '}
                     
                    </div>

                    <br/>
                    {/* <Card body>By proceeding, I agree to Hop&Ride's Terms of Use and acknowledge that I have read the Privacy Policy.  </Card> */}
                

                      
                

                </Col>

                <Col lg={8} md={6} sm={12}>
                <Image className="w-100 mt-100" src={registerbackground} alt="image" />
                </Col>

            </Row>

        </Container>
        </>
    )
}



export default Register;

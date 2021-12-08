import React, { useEffect, useState } from "react";
import {Form, Col, Row, Container, Image, Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import icon from '../../Images/newhop.png';
import registerbackground from '../../Images/register-image01.png';
import './Register.css';
import firebase from "../../firebase";
import {Link} from "react-router-dom"
import { useHistory } from 'react-router-dom';









const Register = () => {


   


    const [fname,setFName] = useState('');
    const [lname,setLName] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [img01,setImg1] = useState('');
    const [img02,setImg2] = useState('');
   
  
    const handleDriver = () =>{


      const Register = firebase.database().ref("/StaffDriver")
      let data = {
        FName:fname,
        LName:lname,
        Phone:phone,
        Address:address,
        Img01:img01,
        Img02:img02,
        Status:0,
        Company:"",
    

      }

     Register.push(data);


    };

    //navigation path
    const history = useHistory();
    const handlePath = () => history.push('/registernew');
   
   




    return (
        <>
        <Container className="mt-5">
            <Row>
             <Col xs={6} md={4} sm={12} className="text-center mt-3">
               
                
                <Image className="icon-img" src={icon} alt="image" />
               
    

                <Form>
                    <Form.Group controlId="formBasicName">
                        {/* <Form.Label>Enter Full name</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter first name" focus value = {fname} onChange={(e)=>{setFName(e.target.value);}} required/>
                    </Form.Group>
                    
                    <br/>

                    <Form.Group  controlId="formBasicPassword">
                        
                        <Form.Control type="email" placeholder="Enter last name" focus value = {lname} onChange={(e)=>{setLName(e.target.value);}}/>
                    </Form.Group>

                    <br/>

                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Enter Full name</Form.Label> */}
                        <Form.Control type="text" placeholder="Phone" focus value = {phone} onChange={(e)=>{setPhone(e.target.value);}}/>
                    </Form.Group>
                    
                     <br/>

                     <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Enter Full name</Form.Label> */}
                        <Form.Control type="text" placeholder="Address" focus value = {address} onChange={(e)=>{setAddress(e.target.value);}} />
                    </Form.Group>

                    <br/>
                
                    <Form.Group className="position-relative mb-3">
                              <Form.Label>Driving Lisence</Form.Label>
                             <Form.Control
                              type="file"
                              required
                              name="file"
                              focus value = {img01} onChange={(e)=>{setImg1(e.target.value);}}
                              />

                    </Form.Group>
                 

                    <Form.Group className="position-relative mb-4">
                              <Form.Label>Vehicle Revenue Lisence</Form.Label>
                             <Form.Control
                              type="file"
                              required
                              name="file"
                              focus value = {img02} onChange={(e)=>{setImg2(e.target.value);}}
                              />

                    </Form.Group>

                   
                    

                


                    <br/>

                    <div className="d-grid gap-2">
                    <Form.Group>
                        <Form.Check type="checkbox" label="Agree to terms and conditions" required/>
                    </Form.Group>
                    <br/>
                     <Button  onClick={()=>{handleDriver(); handlePath();}} type ="submit" variant="success" >Next </Button>
                     
                     <br/>
                     <div>
                    Already have an account? <Link to="/">Login</Link> now.
                    </div>
                     
                    </div>

                    <br/>
                    {/* <Card body>By proceeding, I agree to Hop&Ride's Terms of Use and acknowledge that I have read the Privacy Policy.  </Card> */}
                

                      
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



export default Register;

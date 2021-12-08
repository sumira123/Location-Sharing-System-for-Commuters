// import React from "react";
import React, { useEffect, useState } from "react";

//import { ToastContainer,toast, Zoom, Bounce } from 'react-toastify';
//import "react-toastify/dist/ReactToastify.css";
import firebase from "../../firebase";

import icon from '../../Images/newhop.png';
import Background from '../../Images/newnew.png';
import { useHistory } from "react-router-dom";



// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Table,
  DropdownButton,
  Dropdown,
  FormControl,
  Image,
} from "react-bootstrap";
import { createPrinter } from "typescript";

const Emergency=()=> {


  const[adriverid,setAdriverid] = useState('');
  const[adrivername,setAdrivername] = useState('');
  const[alocation,setAlocation] = useState('');
  const[arequesttype,setArequesttype] = useState('');
  const[atime,setAtime] = useState('');
  const[adate,setAdate] = useState('');
  const[adescription,setAdescription] = useState('');
 
  
 
  const handleAddUser = () => {

    

   
    const firestore = firebase.database().ref("/emgrequest");
    let data = {
     
      DriverID: adriverid,
      DriverName: adrivername,
      DriverLocation: alocation,
      RequestType: arequesttype,
      Time: atime,
      Date: adate,
      Description: adescription,
    
    }

    console.log(data);
    firestore.push(data);

    //alert("Succfully inserted");
    setAdriverid("");
    setAdrivername("");
    setAlocation("");
    setArequesttype("");
    setAtime("");
    setAdate("");
    setAdescription("");
   
  
   };

    let history = useHistory();
    const handlePath = () => history.push('/dashboard');

  //  const successToast = () => {
  //   toast("Sucessfully Inserted",{
  //     className: "custom-toast",
  //     draggable: true,
  //     position: toast.POSITION.TOP_RIGHT
  //   });
  // };

//////////////////////////////////////////////////////////////////

  //background image
  var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`
  };

  

  return (
    <>

      <section style={ sectionStyle }>  
      <Container>

      <Container>
          <Row>
          <Col xs={1} md={4}>
         </Col>
         <Col xs={1} md={4}> 
          <Image  src={icon} alt="image" fluid/>
          </Col>
         </Row>
        </Container>
        <Row>
        <h5 align="center"> EMERGENCY PORTAL</h5>
          <br/>
            <Card>
              <Card.Body>
              
                <Form>


                  <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label>Driver Name</label>
                        <Form.Control
                          focus value = {adrivername} onChange={(e)=>{setAdrivername(e.target.value)}}
                          placeholder= "Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>


                  <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label>Driver Location</label>
                        <Form.Control
                          focus value = {alocation} onChange={(e)=>{setAlocation(e.target.value)}}
                          placeholder="Driver Location"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label>Request Type</label>
                        <Form.Control
                          focus value = {arequesttype} onChange={(e)=>{setArequesttype(e.target.value)}}
                          placeholder="Request Type"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label>Time</label>
                        <Form.Control
                          focus value = {atime} onChange={(e)=>{setAtime(e.target.value)}}
                          placeholder="Time"
                          type="time"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label>Date</label>
                        <Form.Control
                          focus value = {adate} onChange={(e)=>{setAdate(e.target.value)}}
                          placeholder="Date"
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>


                  <Row>
                    <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label>Description of Incident</label>
                        <Form.Control
                          focus value = {adescription} onChange={(e)=>{setAdescription(e.target.value)}}
                          placeholder="Describe Incidence"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

              
                  {/* <ToastContainer  /> */}

                  <br/> 
                  <br/>
                  <div className="d-grid gap-2">
                  <Button
                    onClick={()=>{ handleAddUser();}}
                    size="lg"
                    type="button"
                    variant="danger"
                    >
                    Submit
                  </Button> 
                  <Button variant="success" size="lg" onClick={()=>{handlePath();}}>
                    Go back
                  </Button>
                  </div>
                  
    
                </Form>
                
              </Card.Body>
            </Card>
          
          
        </Row>

        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        
      </Container>
      </section>
    </>
  );
}


export default Emergency;
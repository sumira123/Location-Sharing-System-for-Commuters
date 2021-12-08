
import firebase from "../../firebase";
import icon from '../../Images/newhop.png';
import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router-dom";

// react-bootstrap components

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
  
  import { auth, db, logout } from "../../firebase";

//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';
//Calling Firebase config setting to call the data
import image from '../../Images/newhop.png';
import Background from '../../Images/newnew.png';
import image1 from '../../Images/cover2.jpg';



const Trip=()=> {

    let history = useHistory();
    const navigateSchedule = () => history.push('/schedule');
    const nagivateDashboard = () => history.push('/dashboard');
    
  //Stroring Reteriwing Data
  const[userData,setUserData]= useState([]);
  
  useEffect(()=>{
    //firebase table name

    const files = firebase.database().ref("DriverTrip");
    files.on('value', (snapshot)=>{
      const userList = snapshot.val();
      const dataList = [];
      for(let id in userList){
        dataList.push({id,...userList[id]});
      }
      setUserData(dataList);
      console.log(dataList);
    }) 
      
  },[]);
  
  
  const filterData=(datas,searchKey)=>{
  
    const result = datas.filter(
      (data)=>
      data.nIC.toLowerCase().includes(searchKey)
      // data.Age.toLowerCase().includes(searchKey)
       //Searching via 
    );
    setUserData(result);
  }
  
  const Changestatus = (id,status) =>{
    const files = firebase.database().ref("user_information").child(id);
    
    let data = {
      status:status, 
    };
    files.update(data);
    if(status == 1){
      alert("Activated");
    }
    else if(status == 0){
      alert("Deactivated");
    }
    
  }




   //background image
   var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`
  };


    return (
      
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

        <h5 align="center"> PREVIOUS TRIP INFORMATION </h5>
          <br/>
          <Card className="text-center">
            <Card.Img variant="top" src={image1} />
          
          <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Trip ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Drop pff Location</th>
              <th>Pickup Location</th>
        


            </tr>
          </thead>
          <tbody>{userData.map((data, index)=>(
              <tr>
              <td>00{index + 1}</td>
              <td>{data.Date}</td>
              <td>  {data.Time} </td>
              <td>{data.Dropoff}</td>
              <td>{data.Pick}</td>
              

            
            
               {/* <Button onClick={()=>Changestatus(data.id,1)}  className = "mx-2" variant="primary" size="" active>
                Select Trip
              </Button>{' '} */}
              {/* <Button onClick={()=>Changestatus(data.id,0)} className = "ml-2 mr-0" variant="primary" size="" active>
                Deactivate 
              </Button> */}
              
              </tr>
              ))}
          </tbody>
          </Table>
          </Card>
          <div className="d-grid gap-2">
          <Button variant="success" size="lg" onClick={()=>{navigateSchedule();}}>
              Go back
          </Button>
          <Button variant="warning" size="lg" onClick={()=>{nagivateDashboard();}}>
              Go to dashboard
          </Button>
          </div>
          <br/>
          </Container>
          </section>
          
  
          ) ;
      }
  export default Trip;
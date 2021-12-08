
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
import image1 from '../../Images/cover.jpg';



const Schedule=()=> {

    let history = useHistory();
    const navigateTrip = () => history.push('/trip');
    

  const handlePath = () => history.push('/dashboard');

   //background image
   var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`
  };



  //Stroring Reteriwing Data
  const[userData,setUserData]= useState([]);
  
  useEffect(()=>{
    //firebase table name

    const files = firebase.database().ref("assignshedules");
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
      data.Date.includes(searchKey)
      // data.Age.toLowerCase().includes(searchKey)
       //Searching via 
    );
    setUserData(result);

    
  }

  const handleInput=(e)=>{
    const searchKey = e.currentTarget.value;
  
    const files = firebase.database().ref("assignshedules");
    files.on('value', (snapshot)=>{
      const userList = snapshot.val();
      const dataList = [];
      for(let id in userList){
        dataList.push({id,...userList[id]});
      }
      filterData(dataList, searchKey);
    })  
      
  }

  const refreshPage=(e)=>{
    window.location.reload(false);
    }
      




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
        <h5 align="center"> TODAY'S SCHEDULE </h5>

        <Card className="text-center">
        <Card.Img variant="top" src={image1} />
            {/* <Card.Header>Featured list </Card.Header> */}

            <br/> 
            <FormControl
              type="date"
              placeholder="Enter date"
              aria-label="Search"
              name="searchQuery"
              onChange={handleInput}
            />

            <br/>
            {userData.map((data, index)=>(
            <Card.Body>
            
                <Card.Title><h1>{data.Date}</h1></Card.Title>
                
                
                    <Card.Text>

                        <h3> Start Time : {data.StartTime} </h3>
                        <h3> End Time : {data.EndTime} </h3> <br></br>
                        <h5>{data.AboutMe} </h5> 
                  
                    </Card.Text>
                
             
            </Card.Body>
            ))} 
            <Card.Footer className="text-muted" onClick={()=>{refreshPage();}}>View All </Card.Footer>
            </Card>
            <br/>
            <div className="d-grid gap-2">
            <Button variant="warning" size="lg" onClick={()=>{navigateTrip();}}>
          View Past trips
        </Button>
          <Button variant="success" size="lg" onClick={()=>{handlePath();}}>
          Go back
        </Button>
        </div>
          </Container>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          </section>
          
          ) ;
        }

export default Schedule;
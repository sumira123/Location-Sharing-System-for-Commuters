import React, { useEffect, useState, Component } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "../../firebase";
import {Form, Col, Row, Container, Image, Card, Button, ToggleButton} from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import { propTypes } from "react-bootstrap/esm/Image";

import firebase from "../../firebase";
import icon from '../../Images/newhop.png';


import { Map, GoogleApiWrapper, map, google } from 'google-maps-react';


import Background from '../../Images/newnew.png';
import Marker from './Marker/Marker';
import CMarker from './Marker/CMarker';

import {onMessageListener} from "../../firebase";
import Notifications from "../Notifications/Notifications";
import ReactNotificationComponent from "../Notifications/ReactNotification";

import { ToastContainer,toast, Zoom, Bounce } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";


function Dashboard() {

  //new notification
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  
  console.log(show, notification);
  





  const history = useHistory();
  const handlePath = () => history.push('/login');
  const navigateSchedule = () => history.push('/schedule');
  const navigateEmergency = () => history.push('/emergency');
    //logout funtion //didnt work yet



    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = () => {
      if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
      } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        
        }, () => {
          alert('Unable to retrieve your location');
        });
      }
    };


    const [Markerlat1, setMarkerlat1] = useState(null);
    const [Markerlng1, setMarkerlng1] = useState(null);

    const [Markerlat2, setMarkerlat2] = useState(null);
    const [Markerlng2, setMarkerlng2] = useState(null);

    const [Markerlat3, setMarkerlat3] = useState(null);
    const [Markerlng3, setMarkerlng3] = useState(null);

    const [Markerlat4, setMarkerlat4] = useState(null);
    const [Markerlng4, setMarkerlng4] = useState(null);

    const [Markerlat5, setMarkerlat5] = useState(null);
    const [Markerlng5, setMarkerlng5] = useState(null);

    const setMarkerLocation = () => {

      setMarkerlat1(6.9458948);
      setMarkerlng1(79.9046516);

      setMarkerlat2(7.074563778963293);
      setMarkerlng2(80.0354750248302);

      setMarkerlat3(6.884148298709535);
      setMarkerlng3(79.90876272952212);

      setMarkerlat4(6.8683279044057315);
      setMarkerlng4(79.89323467254486);

      setMarkerlat5(6.985753956102164);
      setMarkerlng5(79.92726403102859);

      };

  

    //insert into database
    const setLocation = () => {
      const Register = firebase.database().ref("/StaffDriverLocation")
      let data = {
        Driver_Name:name,
        Driver_Latitude:lat,
        Driver_Longitude:lng,      
        //Status:0,
  
      }

     Register.push(data);
     
    };




    //authentication code firebase
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading]);




  //backgroudn image
  var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`
  };

  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
      console.log(payload);
    })
    .catch((err) => console.log("failed: ", err));


  return (

   
      <section style={ sectionStyle }>
      <Container>
        

      <div>
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications />
    </div>
      
        <Container>
          <Row>

          <Col xs={1} md={4}>

          
        
          <br/>

         </Col>
         <Col xs={1} md={4}> 
          <Image  src={icon} alt="image" fluid/>
          </Col>

         </Row>
        </Container>
        
        <h5 align="center"> Welcome back {name} </h5>
        <Row center>
              {/* //<Card.Header>
                 <Card.Title as="h4">Google maps</Card.Title>
                 <p className="card-category">24 Hours performance</p> 
              //</Card.Header> */}
              <Card.Body>
                <div className="ct-chart" id="chartHours">

               
                {/* <div style={{height: '600px', width: '500px'}}> */}
                <div class="right-column">  
                

                
                   <GoogleMapReact
                   defaultCenter={{ lat: 7.091189883359545, lng: 80.0345320756107 }}
                   defaultZoom={10}
                   yesIWantToUseGoogleMapApiInternals
                   bootstrapURLKeys={{
                      key:'AIzaSyD9oR5CQ9uQ3rbVl0Fao1kWX0CxZl-0o9c',
                      language: 'en',
                      
                      
                   }}

                   options={getMapOptions}
                   >
                      


                      <CMarker
                      lat={lat}
                      lng={lng}
                      name="Current Location"
                      color="blue"
                      />

                      <Marker
                      lat={Markerlat1}
                      lng={Markerlng1}

                      name="User 01"

                      name="Current Location"

                      color="red"
                      />


                      {/* <Marker
                      lat={Markerlat2}
                      lng={Markerlng2}
                      name="Current Location"
                      color="red"
                      />   */}

                     <Marker
                    lat={Markerlat3}
                    lng={Markerlng3}
                    name="User 02"
                    color="red"
                    />

                    <Marker
                    lat={Markerlat4}
                    lng={Markerlng4}
                    name="User 03"
                    color="red"
                    title="hello"
                    />
                  
                    <Marker
                    lat={Markerlat5}
                    lng={Markerlng5}
                    name="User 04"
                    color="red"
                    />



                  </GoogleMapReact> 
                
                 
                </div> 

                 </div>
              </Card.Body>
              <p>{status}</p>
           
      
      </Row>
      
        <div className="d-grid gap-2">

        <Button variant="success" size="lg" onClick={()=>{getLocation(); setLocation();}}>
          Share my location
        </Button>
        
        <Button variant="primary" size="lg" onClick={() => {setMarkerLocation();}}>
          View nearby users
        </Button>

        <Button variant="warning" size="lg" onClick={() => {navigateSchedule();}}>
          Today's Schedule
        </Button>
        
        <Button variant="danger" size="lg" onClick={() => {navigateEmergency();}}>
         Emergency Contact
        </Button>

        <Button variant="outline-danger" size="lg" onClick={() => {
          logout();  handlePath();
        }} >
        Logout
        </Button>

       
        <br/>
        </div>
        
      </Container>
      </section>


  );
}
export default Dashboard; 
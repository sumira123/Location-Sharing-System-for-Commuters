import React, { useState, useEffect } from "react";

import { getToken } from "../../firebase.js";
import firebase from "../../firebase";

const Notifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);
  
  var token='';
  
  
  console.log("Token found", isTokenFound);
  
  // To load once
  useEffect(() => {
    let data;
    async function tokenFunc() {
      data = await getToken(setTokenFound);
      if (data) {
        
        console.log("Token is", data);

        //pass token into firebase
        token=data;
        var today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
          firebase.database().ref("/FCM_TOKENS").set({
             TokenID: token,
             Date: date,
             Time:time,
            }).catch(alert);

      }
      return data; 
    }

    tokenFunc();
  }, [setTokenFound]);
  
  
  return <></>;
};

Notifications.propTypes = {};

export default Notifications;

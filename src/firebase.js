import firebase from "firebase";

import { initializeApp } from "firebase/app"; //new
import { getAnalytics } from "firebase/analytics"; //new


 import "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyDcHR0UGF063cAwekHCYDa-itA2nsfvBw8",
//   authDomain: "ccp2-22ef9.firebaseapp.com",
//   databaseURL: "https://ccp2-22ef9-default-rtdb.firebaseio.com",
//   projectId: "ccp2-22ef9",
//   storageBucket: "ccp2-22ef9.appspot.com",
//   messagingSenderId: "885521050905",
//   appId: "1:885521050905:web:22d21f57345ac9bad1a988",
//   measurementId: "G-74GYCRJR9T"
// };


//sumira

const firebaseConfig = {
  apiKey: "AIzaSyBd0Bj6wWxK4jCF3zvcyaQEK_-86jh1Wnk",
  authDomain: "test-7af74.firebaseapp.com",
  databaseURL: "https://test-7af74-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-7af74",
  storageBucket: "test-7af74.appspot.com",
  messagingSenderId: "92908809850",
  appId: "1:92908809850:web:3efc2c89502f41c40f15c3",
  measurementId: "G-92RCGWD0VN"
};


// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export  {
  storage, firebase as default
}

//new------------------------------------------------------------------------------------------ //newwww

//const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();


const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}; 


const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};


//new------------------------------------------------------------------------------------------ //newwww

const messaging = firebase.messaging();


const publicKey = "BIv9yigDCEokB66MbCwgGV6SP1bYwk9sJsafDGIi_F-C6XE5Mu6aLrUgDPwZm-e-uorE7QL4fcS66Y_bxVm5iv0";

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
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


// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

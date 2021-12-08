import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import "bootstrap/dist/css/bootstrap.css";




// ReactDOM.render(
//   <Router history={browserHistory}>
//       <App />
//   </Router>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    {/* <Login/>  */}
    {/* <Cover/> */}
     <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

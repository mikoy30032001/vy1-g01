import React, { Component } from 'react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCmFTrmPl0o93krTEeeuQLKiLARZmYUKYE",
    authDomain: "vy1-g01.firebaseapp.com",
    databaseURL: "https://vy1-g01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vy1-g01",
    storageBucket: "vy1-g01.appspot.com",
    messagingSenderId: "652851167349",
    appId: "1:652851167349:web:5f1da3f7de872a9334783c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
class SectionContact extends Component {
    render() {
        return ( 
            <div className=".container-sidebar-box">
                <div className="row">
        <div className="col">
          1 of 2
        </div>
        <div className="col">
          2 of 2
        </div>
      </div>
            </div>
        );
    }
}

export default SectionContact;
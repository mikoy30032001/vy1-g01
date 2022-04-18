
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/navbar/header.js';
import Footer from './components/navbar/footer.js';
import Account from './components/Account/content.js';
import Giftvoucher from './components/giftvoucher/voucher.js';
import  History  from './components/History/history.js';
import Home from './components/Home/home.js';
import PartnerOverview from './components/partner-page/Home.js';
import Leftbar from './components/navbar/leftbar';
import Booking from './components/booking/booking.js';
import Ticket from './components/Ticket/ticket.js';
import Point from './components/Point/point.js';

//đăng nhập đăng kí
import Register from './components/identification/register.js';
import Login from './components/identification/login.js';
import './App.css';

const status = true;
class App extends Component{
  render(){
    if (status == true){
      return (
      <div>
        <Header/>
        
        <div className="section-box-main">
        <Leftbar/>
        <div className="box-right">
        <Routes>
            <Route exact path="/" element ={<Home/>}/>
             <Route exact path="/account" element= {<Account/>}/>
             <Route path="/login" element = {<Login/>}/>
             <Route path="/register" element = {<Register/>}/>
             <Route path="/reward" element = {<Point/>}/>
             <Route path="/voucher" element = {<Giftvoucher/>}/>
             <Route path="/history" element = {<History/>}/>
             <Route path="/my-booking" element = {<Booking/>}/>
             <Route path="/ticket-alert" element = {<Ticket/>}/>
             <Route exact path="/partner/home" element ={<PartnerOverview/>}/>
             
        </Routes>
        </div>
        </div>
        <Footer/>
      </div>
     );}
     else {
       return(
        <div>
           {/* <Routes>
            <Route exact path="/login" element ={<Login/>}/>
             <Route exact path="/register" element= {<Register/>}/>
        </Routes> */}
          </div>
       );
     }
  }
}

export default App;

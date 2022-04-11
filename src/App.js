
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/navbar/header.js';
import Footer from './components/navbar/footer.js';
import Content from './components/Account/content.js';
import Giftvoucher from './components/giftvoucher/voucher.js';
import  History  from './components/History/history.js';
import Home from './components/Home/home.js'
import PartnerOverview from './components/partner-page/Home.js'
import './App.css';


class App extends Component{
  render(){
    return (
    
      <div>
        <Header/>
        
       <Routes>
         <Route exact path="/" element ={<Home/>}/>
       <Route exact path="/chinh-sua-ho-so" element= {<Content/>}/>
             <Route path="/voucher" element = {<Giftvoucher/>}/>
             <Route path="/history" element = {<History/>}/>
             <Route exact path="/partner/home" element ={<PartnerOverview/>}/>
       </Routes>
        <Footer/>
      </div>
     );
  }
}

export default App;

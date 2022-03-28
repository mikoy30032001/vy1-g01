
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/navbar/header.js';
import Footer from './components/navbar/footer.js';
import Content from './components/Account/content.js';
import giftvoucher from './components/giftvoucher/voucher.js';
import  History  from './components/History/history.js';
import './App.css';


class App extends Component{
  render(){
    return (
    
      <div>
        <Header/>
        
       <Routes>
       <Route exact path="/" element= {<Content/>}/>
             <Route path="/voucher" element = {<giftvoucher/>}/>
             <Route path="/history" element = {<History/>}/>
       </Routes>
        <Footer/>
      </div>
     );
  }
}

export default App;

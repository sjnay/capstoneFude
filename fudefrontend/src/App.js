import {Routes,Route,Link} from 'react-router-dom'
import './App.css';
import axios from "axios"
import { useState,useEffect } from 'react';

import Post from './components/Post'
import Nav from './components/Nav'
import Feed from './components/Feed';
import Body from "./components/Body"
import Login from './components/Login';
import MenuAppBar from './components/NavMui';
import NewUser from './components/NewUser';

function App() {
const[currentUser,setCurrentUser]=useState(null)

useEffect(()=>{
  getUser()},[])


  function getUser(){
    axios.get("/fude")
    .then((response)=>{
        const data = response.data
        console.log(data)
        setCurrentUser(data.username)
      })
    .catch((error)=>{
          if (error.response){
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);
          }
      })
  }
    
    
  
       

  return (
  

    <div className="App">
      
     
      
      
     
    
   <Body currentUser={currentUser}/>
    
    
     
      

    
    </div>
  );
}
  
export default App;

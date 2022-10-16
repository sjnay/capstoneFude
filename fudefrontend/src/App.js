import {Routes,Route,Link} from 'react-router-dom'
import './App.css';

import Post from './components/Post'
import Nav from './components/Nav'
import Feed from './components/Feed';
import Body from "./components/Body"
import Login from './components/Login';

function App() {

  return (
  

    <div className="App">
     
      <Body/>
      <Routes>
      <Route exact path='accounts/login/' element={<Login/>}/>
      

      
      </Routes>
      
      

    
    </div>
  );
}

export default App;

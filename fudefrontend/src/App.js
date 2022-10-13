import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Post from './components/Post'
import Nav from './components/Nav'

function App() {
  return (

    <div className="App">
      <Nav/>
      <Post/>

    
    </div>
  );
}

export default App;

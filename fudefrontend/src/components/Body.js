
import {Routes,Route,Link} from 'react-router-dom'

import Profile from './Profile';
import Post from './Post';
import Feed from './Feed';
import ShowPost from './ShowPost'
import Nav from './Nav';
import NewUser from './NewUser';
import Login from './Login';

function Body(props) {
    
  return (

    <div className="Body">
        
       <h1 className="title">welcome füde</h1>
       <Nav/>
    <Routes>
        <Route exact path ='/' element={<Login/>}/>
       <Route exact path ='/feed/' element={<Feed/>}/>
       <Route exact path ='/myfude/' element={<Profile user={props.currentUser}/>}/>
       <Route exact path ='/myfude/new' element={<Post user={props.currentUser}/>}/>
       <Route exact path ='/myfude/:id' element={<ShowPost/>}/>
       <Route exact path='user/login/add' element={<NewUser/>}/>
       
    </Routes>
      

    
    </div>
  );
}

export default Body;

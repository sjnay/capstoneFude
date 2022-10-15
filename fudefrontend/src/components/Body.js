
import {Routes,Route,Link} from 'react-router-dom'

import Profile from './Profile';
import Post from './Post';
import Feed from './Feed';
import ShowPost from './ShowPost'

function Body() {
  return (

    <div className="Body">
       
       
    <Routes>
       <Route exact path ='/feed/' element={<><Feed/></>}/>
       <Route exact path ='/myfude/' element={<><Profile/></>}/>
       <Route exact path ='myfude/new' element={<Post/>}/>
       <Route exact path ='myfude/:id' element={<><ShowPost/></>}/>
       
    </Routes>
      

    
    </div>
  );
}

export default Body;

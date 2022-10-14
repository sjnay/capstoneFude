
import {Routes,Route,Link} from 'react-router-dom'


import Post from './Post';
import Feed from './Feed';

function Body() {
  return (

    <div className="Body">
        <nav>
          <Link to='/feed/'>  <h1>new post</h1></Link>
        </nav>
       
    <Routes>
       <Route exact path ='/' element={<><Feed/></>}/>
       <Route exact path ='/feed' element={<><Post/></>}/>
    </Routes>
      

    
    </div>
  );
}

export default Body;

import {Routes,Route,Link} from 'react-router-dom'
import Post from './Post';
import Feed from './Feed';

function Profile(){

    

return(
    <div>
<nav>
<Link to='/myfude/new'>  <h1>new post</h1></Link>
</nav>
<div>
    <h1>my posts</h1>
    <Feed/>
</div>

</div>
)}


export default Profile
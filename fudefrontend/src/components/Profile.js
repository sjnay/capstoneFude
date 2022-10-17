import {Routes,Route,Link} from 'react-router-dom'
import Post from './Post';
import Feed from './Feed';

function Profile(props){



return(
    <div>
<nav className='profile-nav'>
    
<Link to='/myfude/new'>  <p>new post</p></Link>
<p className='user'>hi {props.user}</p>
<a href='/user/logout/'><p>log out</p></a>
</nav>
<div>
    
    <Feed/>
</div>

</div>
)}


export default Profile
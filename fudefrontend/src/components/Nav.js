import {Link} from 'react-router-dom'

function Nav(){

    return(
        <nav className='nav-bar'>
            <div className='nav-items'>
<Link to="/"><h1>fude</h1></Link>
<Link to="/feed"><h1>fudefeed</h1></Link>
<Link to="/myfude"><h1>myfude</h1></Link>
</div>
<div className='logout'>
    <a href='/account/login'>Log Out</a>
</div>

        </nav>

    )
}

export default Nav
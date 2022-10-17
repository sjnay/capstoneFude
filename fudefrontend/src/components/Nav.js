import {Link} from 'react-router-dom'

function Nav(){

    return(
        <nav className='nav-bar'>
            <div className='nav-items'>

<Link to="/feed"><h1>fudefeed</h1></Link>
<Link to="/myfude"><h1>myfude</h1></Link>
</div>

        </nav>

    )
}

export default Nav
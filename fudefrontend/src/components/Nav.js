import {Link} from 'react-router-dom'

function Nav(){

    return(
        <nav className='hero is-primary'>
<Link to="/"><h1>fude</h1></Link>
<Link to="/feed"><h1>fudefeed</h1></Link>
<Link to="/myfude"><h1>myfude</h1></Link>

        </nav>

    )
}

export default Nav
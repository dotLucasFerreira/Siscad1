import '../css/Nav.css'
import {Link} from 'react-router-dom'
export default props =>
    <aside className="menu-area">
        <nav className={`menu-${props.icon}`}>

            <Link to ="/">
                <i className="fa fa-home">{props.title}</i></Link>

            <Link to ="/users">
                <i className="fa fa-users">{props.users} </i></Link>
        </nav>
    </aside>
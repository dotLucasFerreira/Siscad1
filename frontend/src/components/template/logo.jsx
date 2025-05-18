import '../css/logo.css';
import logo from '../../imgs/Chaavesiconlogo3.png'
import {Link} from 'react-router-dom'
export default props =>
    <aside className='logo'>
       <Link to="/" className="logo">
       <img src={logo} alt="Logo" /></Link>
    </aside>

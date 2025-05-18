import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import{BrowserRouter} from 'react-router-dom'
import Logo from '../components/template/logo'
import Nav from '../components/template/Nav'
import Routes from './Router'
import Footer from '../components/template/Footer'




export default props =>
    {
        return <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    }
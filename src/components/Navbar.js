import React, {useState} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../images/logo.png'; 


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleNavbar = () => {
        setToggle(!toggle);
    }

    return (
        <div className="navbar">
            <nav className="nav">
                <div className="btn-logo">
                    <Link to='/' > 
                        <img src={logo} alt="logo-shopping"/>
                    </Link>
                    <div className="shopping-icon mobile-shopping">
                         <i className="fas fa-shopping-cart"><span>0</span></i>
                    </div>
                    <div onClick={toggleNavbar} className="hamburger">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>

                    </div>
                </div>
                  

                    <div className="links">
                        <div className={toggle?"new-links-navigation":"links-navigation"}>
                            <div className="nav-btn">
                                <span onClick={toggleNavbar} >X</span>
                            </div>

                            <ul className="links-nav">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/products'>Products</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                               
                        </div>
                    </div>

                    <Link to='cart'>
                        <div className="shopping-cart">
                          <i className="fas fa-shopping-cart"><span>0</span></i>
                        </div>
                    </Link>


                

            </nav>
            
        </div>
    )
}

export default Navbar

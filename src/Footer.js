import React from "react";
import {Link} from "react-router-dom"


function Footer(){
    return(
        <div className="footer_display">
            <img src="./logo.svg" alt="footer_logo"/>
            <nav>
                <h4>Doormat Navitation</h4>
                <Link className="footer_nav_ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to="/order_online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </Link>
            </nav>
            <div>
                <h4>Contact</h4>
                <br></br>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
        </div>
    )
}

export default Footer
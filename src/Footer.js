import React from "react";

function Footer(){
    return(
        <div className="footer_display">
            <img src="./logo.svg" alt="footer_logo"/>
            <nav>
                <h4>Doormat Navitation</h4>
                <ul className="footer_nav_ul">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order_online">Order Online</a></li>
                    <li><a href="login">Login</a></li>
                </ul>
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
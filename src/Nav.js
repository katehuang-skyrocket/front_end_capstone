import React from "react";
import "./App.css"

function Nav(){
    return (
        <ul className="nav_ul">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order_online">Order Online</a></li>
            <li><a href="login">Login</a></li>
        </ul>
    )
}

export default Nav
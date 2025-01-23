import React from "react";
import "./App.css"
import { Link } from "react-router-dom";

function Nav(){
    return (
        <ul className="nav_ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order_online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    )
}

export default Nav
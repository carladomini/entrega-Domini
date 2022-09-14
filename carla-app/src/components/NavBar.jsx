import React from "react";
import logo from "./images/logo.jpg"
import CartWidget from "./CardWidget";

export const NavBar = () => {
    return (
        <div className="container">
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><img src={logo} width= "75" alt="logo" className="img-fluid rounded"/></a>
            </li>
            <li class="nav-item">
                <a className="nav-link link_header" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link_header" href="#">Quienes Somos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link link_header" href="#">Contacto</a>
            </li>
            <CartWidget/>
        </ul>
        </div>
    );
}

export default NavBar;
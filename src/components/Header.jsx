import React from "react";
import logo from "/images/logo.png"
import '../assets/css/Header.css'
export default function Header(){
    return(
        <header className="nav-bar">
            <div className="nav-logo">
                <a href="./"><img src={logo}/></a>
            </div>
            <nav className="links">
                <a href="#palette">Palette</a>
                <a href="#features">Features</a>
                <a href="#footer">Contact</a>
            </nav>
        </header>
    )
}
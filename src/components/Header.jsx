import React from "react";
                                                                                                                                                                                                                                                import logo from "../assets/images/Free_Sample_By_Wix.jpeg"
import '../assets/css/Header.css'
export default function Header(){
    return(
        <header className="nav-bar">
            <div className="nav-logo">
                <a href="./"><img src={logo}/></a>
            </div>
            <nav className="links">
                <a href="" activeClassName='is-active'>About</a>
                <a href="">Contact</a>
                <a href="">See</a>
                <a href="">some1</a>
            </nav>
        </header>
    )
}
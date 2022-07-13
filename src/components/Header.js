import React from "react";
import Logo from "../images/troll-face.svg";

export default function Header() {
    return (
        <header>
            <div className="header--logo">
                <img className="header--image" src={Logo} alt="Logo" />
                <h1 className="header--title">Meme Generator</h1>
            </div>
            <h3 className="header--project">React Course - Project 3</h3>
        </header>
    )
};
import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={require("../images/Troll Face.png")}
                className="header--image"
                alt="logoImage"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Developed by - Thanush</h4>
        </header>
    )
}
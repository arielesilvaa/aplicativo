import React from "react";
import Logo from "./img/capa.png";

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <h1>Meu Blog</h1>

        </header>
    )
}
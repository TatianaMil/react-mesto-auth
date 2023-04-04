import React from "react"
import headerLogo from "../images/logo.svg"

function Header() {
    return (
        //add marking up header
            <header className="header">
                <img src={headerLogo} alt="логотип страницы место" className="header__logo" />
            </header>
    )
}

export default Header
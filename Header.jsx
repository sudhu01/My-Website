import { useEffect, useState } from "react";

function Header(){

;

    return(
        <nav>
            <a className="header_item" href="#about">ABOUT</a>
            <a className="header_item" href="#projects">PROJECTS</a>
            <a className="header_item" href="#co-curriculars">CO-CURRICULARS</a>
            <a className="header_item">CV</a>
        </nav>
    )
}
export default Header
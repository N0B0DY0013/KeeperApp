import React from "react";

const curr_year = new Date().getFullYear();

function Footer() {
    return(<footer>
                <p>Copyright ⓒ {curr_year}</p>
           </footer>);
}

export default Footer;
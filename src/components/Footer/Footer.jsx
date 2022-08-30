import React from "react";
import "./styles.css"
function MyFooter(){

const year=new Date().getFullYear();

    return(
        <footer className="footerdiv">
        Copyright © {year}
        </footer>
    )
}

export default MyFooter
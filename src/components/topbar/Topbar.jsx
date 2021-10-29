import React from "react";
import "./topbar.css";
import logo from "../../images/rick-and-morty.png";

export default function Topbar() {
    return (
        <div className="topbar">
            <img src={logo}/>
        </div>
    )
}

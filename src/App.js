import React from "react";
import Search from "./components/search/Search";
import Topbar from "./components/topbar/Topbar";
import "./app.css";


export default function App() {
    return (
        <div className="app">
            <Topbar/>
            <Search/>
        </div>
    )
};
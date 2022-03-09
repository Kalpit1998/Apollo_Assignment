import React from 'react';
import {Link} from "react-router-dom";

export function Header(props) {
    
    const nav = {
        fontSize: "3rem",
        fontWeight: "500",
      };

      const header = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: "20px 40px",
        color: "black"
      }

      const btn = {
        fontSize: "1.3rem",
        padding: "0.5rem 1rem",
        border: "none",
        backgroundColor: "black",
        color: "white",
        borderRadius: "6px",
      };

    return (
        <header style={header}>
           <nav style={nav}>Parking Management System</nav>
           <Link to={"/"}><button style={btn}>Home</button></Link> 
        </header>
        
    )
}

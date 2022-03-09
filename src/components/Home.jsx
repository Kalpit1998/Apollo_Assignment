import React from "react";
import { Link } from "react-router-dom";

export function Home() {

  const btn_wrapper = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "81vh",
  };

  const btn = {
    fontSize: "1.5rem",
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: "darkgray",
    borderRadius: "6px",
  };

  return (
    <>
      
      <div id="btn_wrapper" style={btn_wrapper}>
        <Link to={"/parkin"}>
          <button style={btn}>Park-In</button>
        </Link>
        <Link to={"/parkout"}>
          <button style={btn}>Park-Out</button>
        </Link>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <div className="nav nav-tabs">
                Google Book Search
        <div className="nav-item">
          <Link
            to="/Saved"
            className={window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"}
          >
            Saved
          </Link>
        </div>
        <div className="nav-item">
          <Link
            to="/Search"
            className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}
          >
            Search
          </Link>
        </div>
      </div>
    );
  }
  
  export default NavTabs;
  
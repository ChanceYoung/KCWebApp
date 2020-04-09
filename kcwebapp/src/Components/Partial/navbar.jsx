import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "../../Assets/CSS/NavBar.css"

class Navbar extends Component {
    render() {
      return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink className="bar-item-main roboto-text-thin" to="/">
                    KCwebapp
                    </NavLink >
                </li>
                <li>
                    <NavLink className="bar-item roboto-text-thin" to="/About">
                    About
                    </NavLink >
                </li>
            </ul>
        </div>
      );
    }
  }

export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [color, changeColor] = useState("#282c34");

  document.body.style.backgroundColor = color;
  return (
    <nav className="navbar">
      <div className="navbar__logo d-flex justify-content-start">Irk Bitig</div>
      <ul className="navbar__links">
        <li  >
          <NavLink to="/Anasayfa" onClick={() => changeColor()}>
            Anasayfa
          </NavLink>
        </li>
        <li>
          <NavLink to="/Nedir" onClick={() => changeColor("#343a40")}>
            Nedir
          </NavLink>
        </li>
        <li>
          <NavLink to="Cards" onClick={() => changeColor("#343a40")}>
            Kartlar
          </NavLink>
        </li>
        <li>
          <NavLink to="Galeri" onClick={() => changeColor("#343a40")}>
            Galeri
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

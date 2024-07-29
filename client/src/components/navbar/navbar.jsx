import { NavLink } from "react-router-dom";
import { useState } from "react";

import './navbar.css';

export default function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurgerOpen = () => {
    setBurgerOpen(!burgerOpen);
  };

  const navItems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Listings", path: "/listings" },
    // { id: 3, text: "Item", path: "/item" },
    // { id: 4, text: "Profile", path: "/profile" },
    // { id: 5, text: "Saved", path: "/saved" },
  ];

  return (
    <div>
      <nav className="navbar">
        <h1>BigRedBargains</h1>
        <ul>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
            >
              {item.text}
            </NavLink >
          ))}
        </ul>
      </nav>
      <nav className="burger" onClick={toggleBurgerOpen}>
        <div className="burger-header">
          <div className={burgerOpen ? "burger-icon is-open" : "burger-icon"}>
            <div />
            <div />
            <div />
          </div>
          <h1>BigRedBargains</h1>
        </div>
        <div className={burgerOpen ? "burger-menu is-open" : "burger-menu"}>
          <ul>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
              >
                {item.text}
              </NavLink >
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
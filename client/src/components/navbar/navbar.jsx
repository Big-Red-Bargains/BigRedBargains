import { Link } from "react-router-dom";

import './navbar.css';

export default function Navbar() {

  const navItems = [
    { id: 1, text: "Home", path: "/home" },
    { id: 2, text: "Listings", path: "/listings" },
    { id: 3, text: "Item", path: "/item" },
    { id: 4, text: "Profile", path: "/profile" },
    { id: 5, text: "Saved", path: "/saved" },
  ];

  return (
    <div>
      <nav className="navbar">
        <h1>BigRedBargains</h1>
        <ul>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
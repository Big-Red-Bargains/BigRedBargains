
import {NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div id="sidebar">
        <h1>Home Page</h1>
        <NavLink to="/listings" activeClassName="active-link" id= "listings">Listings</NavLink>
      </div>
    </>
  );
}
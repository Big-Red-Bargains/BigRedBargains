import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

// wraps around every other page

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
}
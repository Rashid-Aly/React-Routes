import React from "react";
import { CiHome } from "react-icons/ci";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="relative">
        <ul className="flex fixed top-0 w-full justify-center gap-8 bg-white shadow-sm p-4">
          <li className="flex gap-1 items-center">
          <span><CiHome /></span> <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Contactus">Contactus</Link>
          </li>
          <li>
            <Link to="*">Blogs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

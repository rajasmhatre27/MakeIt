import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;

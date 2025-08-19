import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // cart icon

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <Link
        to="/"
        className="text-2xl font-bold text-white tracking-wide hover:scale-105 transition-transform duration-300"
      >
        Make<span className="text-yellow-400">It</span>
      </Link>

      {/* Nav Links */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-white font-bold hover:text-yellow-400 transition duration-300">
          Home
        </Link>
        <Link to="/about" className="text-white font-bold hover:text-yellow-400 transition duration-300">
          About
        </Link>
        <Link to="/contact" className="text-white font-bold hover:text-yellow-400 transition duration-300">
          Contact
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="flex items-center text-white font-bold hover:text-yellow-400 transition duration-300"
        >
          <ShoppingCart className="mr-1" size={20} />
          Cart
        </Link>

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

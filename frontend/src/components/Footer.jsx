import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Make<span className="text-yellow-500">It</span></h2>
          <p className="text-gray-400">
            Your trusted partner in finding dream properties across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Buy Property</li>
            <li>Sell Property</li>
            <li>Rent Property</li>
            <li>Property Management</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="flex items-center gap-2 text-gray-400"><MapPin size={18}/> Mumbai, India</p>
          <p className="flex items-center gap-2 text-gray-400"><Phone size={18}/> +91 98765 43210</p>
          <p className="flex items-center gap-2 text-gray-400"><Mail size={18}/> info@makeit.com</p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#"><Facebook size={20}/></a>
            <a href="#"><Instagram size={20}/></a>
            <a href="#"><Twitter size={20}/></a>
            <a href="#"><Linkedin size={20}/></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {currentYear} MakeIt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  
  return (
    <footer className={`bg-[#f2555d] text-white ${isHome ? 'pt-36' : 'pt-12'} pb-6 `}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <div className="flex  gap-2 ">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <h2 className="text-2xl font-bold mb-4">Roommate Finder</h2>

          </div>
          <p className="text-sm">
            Helping you find the perfect roommate based on your location,
            budget, and lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/browse-listings" className="hover:underline">All Listings</a></li>
            <li><a href="/aboutUs" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +880 1234 567 890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@roommatefinder.com
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/" target="_blank" className="hover:text-black transition">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="hover:text-black transition">
              <Instagram />
            </a>
            <a href="https://x.com/" target="_blank" className="hover:text-black transition">
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-white/80">
        &copy; {new Date().getFullYear()} Roommate Finder. All rights reserved. | 
        <a href="/terms" className="underline ml-1">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;

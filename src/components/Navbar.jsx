import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsOpen(false); // Cierra el menú al cambiar de ruta
  }, [location]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-blue-500 transition duration-300">
          ACRU DZ
        </Link>
        <button
          className="navbar-toggle md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition duration-300">Inicio</Link>
          <Link to="/fullstack" className="hover:text-blue-400 transition duration-300">Fullstack</Link>
          <Link to="/diseno" className="hover:text-blue-400 transition duration-300">Diseño</Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="navbar-menu md:hidden bg-black text-white w-full px-4 pb-6 flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="hover:text-blue-400 transition duration-300">Inicio</Link>
            <Link to="/fullstack" className="hover:text-blue-400 transition duration-300">Fullstack</Link>
            <Link to="/diseno" className="hover:text-blue-400 transition duration-300">Diseño</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

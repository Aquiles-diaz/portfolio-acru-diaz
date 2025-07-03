import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ChatWidget from "../components/ChatWidget"; // Asegurate que la ruta esté correcta
import profilePic from "../assets/aquiles.jpg";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-black via-gray-900 to-black text-center px-4 pt-6 sm:pt-10 overflow-x-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Brillos decorativos */}
      <motion.div
        className="absolute -top-32 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
        animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        animate={{ x: [0, -20, 20, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* Branding superior */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <span className="text-lg sm:text-xl font-semibold tracking-tight text-white">
          ACRU DZ
        </span>
      </div>

      {/* Imagen de presentación */}
      <motion.img
        src={profilePic}
        alt="Foto profesional"
        className="rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mt-16 sm:mt-20 object-cover shadow-xl border-4 border-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Título */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-white leading-snug"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        ¡Hola! Soy Aquiles Díaz
      </motion.h1>

      {/* Descripción profesional */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-300 mt-2 max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Programador con +5 años de experiencia, graduado en la UTN Rosario y actualmente incursionando en el diseño gráfico.
      </motion.p>

      {/* Disponibilidad destacada y LinkedIn + Contacto */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-green-500 bg-black text-green-400 font-medium shadow-md">
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Disponibilidad inmediata
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/aquilesdiaz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 rounded-full font-semibold text-sm shadow-sm hover:bg-blue-50 transition"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.7 0-1 .8-1.8 1.8-1.8 1 0 1.7.8 1.7 1.8 0 1-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.6h-3v-10h2.8v1.4h.1c.4-.8 1.3-1.6 2.6-1.6 2.8 0 3.4 1.9 3.4 4.3v5.9z" />
            </svg>
            Ver perfil en LinkedIn
          </a>

          <a
            href="mailto:benjacardosolapalma08@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white border border-white rounded-full font-semibold text-sm shadow-sm hover:bg-white hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25M21.75 6.75v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 012.25 6.993V6.75"
              />
            </svg>
            Contactame
          </a>
        </div>
      </motion.div>

      {/* Botones de navegación estilo Refactoring UI */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link to="/fullstack" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
            Explorar mi lado técnico
          </button>
        </Link>
        <Link to="/diseno" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full shadow-md hover:bg-emerald-600 transition">
            Explorar mi lado creativo
          </button>
        </Link>
      </motion.div>

      {/* Frase inspiradora animada */}
      <motion.p
        className="mt-10 text-gray-500 text-sm italic"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        "El código es poesía, el diseño es su ritmo."
      </motion.p>

      {/* Botón de GitHub */}
      <motion.div
        className="sticky bottom-6 mt-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center px-5 py-2 text-sm font-semibold text-white bg-zinc-900 rounded-full shadow-md hover:bg-zinc-800 transition">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8 11.4.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5 1 1.5 1 .9 1.6 2.5 1.1 3 .8.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.2 1.2.9-.3 1.8-.4 2.8-.4s1.9.1 2.8.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.1 0 4.7-2.7 5.7-5.3 6 .4.3.7.9.7 1.8v2.7c0 .4.2.7.8.6 4.6-1.6 8-6.1 8-11.4C24 5.4 18.6 0 12 0z" />
            </svg>
            Star on GitHub
          </button>
        </a>
        <ChatWidget />
      </motion.div>
    </motion.div>
  );
}

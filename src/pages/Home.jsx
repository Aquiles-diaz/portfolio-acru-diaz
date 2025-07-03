import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Paintbrush } from "lucide-react";
import ChatWidget from "../components/ChatWidget";
import TypewriterText from "../components/TypewriterText";
import profilePic from "../assets/aquiles.jpg";

export default function Home() {
return (
<motion.div
className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-black via-gray-900 to-black text-center px-4 pt-6 sm:pt-10 relative"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.8 }}
>
{/* Luces de decoro */}
<motion.div
className="pointer-events-none absolute -top-32 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse z-0"
animate={{ x: [0, 20, -20, 0], y: [0, 10, -10, 0] }}
transition={{ repeat: Infinity, duration: 10 }}
/>
<motion.div
className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse z-0"
animate={{ x: [0, -20, 20, 0], y: [0, -10, 10, 0] }}
transition={{ repeat: Infinity, duration: 10 }}
/>

  {/* Branding */}
  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
    <span className="text-lg sm:text-xl font-semibold tracking-tight text-white">ACRU DZ</span>
  </div>

  {/* Imagen de perfil con animaciones */}
  <motion.img
    src={profilePic}
    alt="Foto profesional"
    className="rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mt-16 sm:mt-20 object-cover shadow-xl border-4 border-white"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  />

  {/* Texto para dar de bienvenida con respect */}
  <TypewriterText text="¡Hola! Soy Aquiles Díaz" />

  {/* Subssss */}
  <motion.p
    className="text-lg sm:text-xl text-blue-500 font-semibold mt-2"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2, duration: 0.6 }}
  >
    Técnico en programación
  </motion.p>

  {/* Estado y contacto */}
  <motion.div
    className="mt-8 flex flex-col items-center gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.5 }}
  >
    <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-blue-800 bg-black text-gray-400 font-medium shadow-md">
      <span className="relative flex h-3 w-3 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
      </span>
      Disponibilidad inmediata
    </div>

    <div className="flex gap-6 flex-wrap justify-center">
      <a
        href="https://www.linkedin.com/in/aquiles-diaz"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700 rounded-full font-semibold text-sm shadow-sm hover:bg-blue-50 transition"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.7 0-1 .8-1.8 1.8-1.8 1 0 1.7.8 1.7 1.8 0 1-.7 1.7-1.7 1.7zm13.5 11.3h-3v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.6h-3v-10h2.8v1.4h.1c.4-.8 1.3-1.6 2.6-1.6 2.8 0 3.4 1.9 3.4 4.3v5.9z" />
        </svg>
        Ver perfil en LinkedIn
      </a>

      <a
        href="mailto:aquilesdiaz335@gmail.com"
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

  {/* diferentes navegaciones  */}
  <motion.div
    className="z-10 mt-10 flex flex-col sm:flex-row gap-6 w-full max-w-xs sm:max-w-md justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.5 }}
  >
    <Link to="/Fullstack" className="w-full sm:w-auto">
      <button className="w-full sm:w-auto px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition flex flex-col items-center">
        <Code className="w-5 h-5 mb-1" />
        Lado técnico
        <span className="text-xs text-gray/70 mt-1">Programación y desarrollo</span>
      </button>
    </Link>
    <Link to="/Diseno" className="w-full sm:w-auto">
      <button className="w-full sm:w-auto px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-violet-700 transition flex flex-col items-center">
        <Paintbrush className="w-5 h-5 mb-1" />
        Lado creativo
        <span className="text-xs text-gray/200 mt-1">Diseño gráfico & UX</span>
      </button>
    </Link>
  </motion.div>

  {/* Inspirate wachin */}
  <motion.p
    className="mt-10 text-gray-400 text-sm italic"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.8 }}
  >
    "El código es poesía, el diseño es su ritmo."
  </motion.p>

  {/* Botón GitHub */}
  <motion.div
    className="mt-20"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 1, duration: 0.7 }}
  >
    <a href="https://github.com/Aquiles-diaz" target="_blank" rel="noopener noreferrer">
      <button className="flex items-center px-5 py-2 text-sm font-semibold text-white bg-zinc-900 rounded-full shadow-md hover:bg-zinc-800 transition">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8 11.4.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5 1 1.5 1 .9 1.6 2.5 1.1 3 .8.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.2 1.2.9-.3 1.8-.4 2.8-.4s1.9.1 2.8.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.1 0 4.7-2.7 5.7-5.3 6 .4.3.7.9.7 1.8v2.7c0 .4.2.7.8.6 4.6-1.6 8-6.1 8-11.4C24 5.4 18.6 0 12 0z" />
        </svg>
        Star on GitHub
      </button>
    </a>
  </motion.div>

  {/* Widget del chatbot */}
  <div className="fixed bottom-6 right-6 z-50">
    <ChatWidget />
  </div>
</motion.div>
);
}
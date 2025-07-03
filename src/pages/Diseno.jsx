import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ChatWidget from "../components/ChatWidget"; // Asegurate que la ruta esté bien

const projects = [
{
title: "Identidad Visual - UrbanSoul",
description: "Logo, paleta y branding para marca de ropa urbana.",
img: "https://source.unsplash.com/500x500/?design,branding",
},
{
title: "Publicidad Digital - WildWave",
description: "Campaña animada para producto de verano.",
img: "https://source.unsplash.com/500x500/?motion,graphic",
},
{
title: "Editorial - RetroMag",
description: "Diseño de portada y maquetado estilo retro.",
img: "https://source.unsplash.com/500x500/?magazine,design",
},
];

const testimonials = [
{
name: "Emanuel Cappelone",
location: "Rosario, Santa Fe",
comment:
"Aquiles logró plasmar mi visión en una identidad visual poderosa para mi Bar. Profesionalismo y creatividad de alto nivel.",
},
{
name: "Daniel Alejandro",
location: "Venado Tuerto, Santa Fe",
comment:
"Diseñó todo mi branding y redes sociales. Siempre atento al detalle y con un enfoque muy moderno.",
},
{
name: "Luis Ernesto Pieraccini",
location: "Venado Tuerto, Santa Fe",
comment:
"Desde el primer boceto entendió lo que buscaba. Mi logo y web ahora reflejan exactamente mi estilo de carreras.",
},
];

export default function Diseno() {
const sliderRef = useRef(null);

useEffect(() => {
const slider = sliderRef.current;
let scrollAmount = 0;
const interval = setInterval(() => {
if (slider) {
scrollAmount += 1;
if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
scrollAmount = 0;
}
slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
}
}, 30);
return () => clearInterval(interval);
}, []);

return (
<div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-10 py-20 relative overflow-hidden">
{/* Luces flotantes decorativas */}
<motion.div
className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl top-10 -left-10 animate-pulse"
animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
transition={{ repeat: Infinity, duration: 10 }}
/>
<motion.div
className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-2xl bottom-0 right-0 animate-pulse"
animate={{ y: [0, -20, 0], x: [0, -10, 10, 0] }}
transition={{ repeat: Infinity, duration: 10 }}
/>
  {/* Título y descripción */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16 z-10 relative"
  >
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Diseño Gráfico</h1>
    <p className="text-gray-300 max-w-xl mx-auto text-lg sm:text-xl">
      Creatividad visual llevada al máximo. Diseño que emociona, conecta y representa.
    </p>
  </motion.div>

  {/* Galería de proyectos */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10 relative">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="group relative overflow-hidden rounded-xl shadow-xl border border-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-300 mt-2 max-w-[80%] text-center">
            {project.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Testimonios con fade automático */}
  <div className="mt-28 z-10 relative">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Testimonios</h2>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {testimonials.map((t, index) => (
        <motion.div
          key={index}
          className="bg-white/5 rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm hover:shadow-xl hover:border-white/20 transition duration-500 max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-200 italic mb-4 leading-relaxed">“{t.comment}”</p>
          <div className="text-white font-bold">{t.name}</div>
          <div className="text-sm text-gray-400">{t.location}</div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Moodboard vitrina tipo slider animado automático */}
  <div className="mt-28 z-10 relative">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Moodboard & Showcase</h2>
    <motion.div
      ref={sliderRef}
      className="flex gap-6 overflow-x-auto px-2 pb-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((id) => (
        <motion.div
          key={id}
          className="min-w-[280px] sm:min-w-[360px] bg-white/5 rounded-xl overflow-hidden shadow-lg border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
        >
          <img
            src={`https://source.unsplash.com/600x400/?mockup,design,ui,app&sig=${id}`}
            alt={`Mockup ${id}`}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">Proyecto UX/UI {id}</h3>
            <p className="text-sm text-gray-300 mt-1">
              Diseño responsivo enfocado en experiencia de usuario moderna.
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Chat Acrubot */}
  <ChatWidget />
</div>
);
}
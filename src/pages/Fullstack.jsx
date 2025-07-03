import React from "react";

export default function Fullstack() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden pt-10 sm:pt-16">
      {/* Fondo con variaciones sutiles de color */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_#111_10%,_#000_90%)]"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-start px-6 py-16">
        <div className="text-center max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Desarrollo Fullstack</h1>
          <p className="text-lg text-gray-400 mb-10">
            Experiencia en tecnologías modernas del stack MERN, diseño responsive y rendimiento optimizado.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
            <TechCard name="React" hoverColor="hover:bg-[#61dafb]" />
            <TechCard name="Node.js" hoverColor="hover:bg-[#3c873a]" />
            <TechCard name="Tailwind CSS" hoverColor="hover:bg-[#38bdf8]" />
            <TechCard name="MongoDB" hoverColor="hover:bg-[#10aa50]" />
            <TechCard name="Express.js" hoverColor="hover:bg-[#888888]" />
            <TechCard name="Firebase" hoverColor="hover:bg-[#ffca28]" />
            <TechCard name="MySQL" hoverColor="hover:bg-[#00758f]" />
            <TechCard name="PostgreSQL" hoverColor="hover:bg-[#336791]" />
            <TechCard name="SQLite" hoverColor="hover:bg-[#003b57]" />
            <TechCard name="Alchemy" hoverColor="hover:bg-[#c084fc]" />
            <TechCard name="Next.js" hoverColor="hover:bg-[#000000] text-white" />
            <TechCard name="Vite" hoverColor="hover:bg-[#646cff]" />
          </div>
        </div>

        {/* Línea de tiempo educativa moderna */}
        <div className="mt-24 w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" alt="Bandera Argentina" className="w-6 h-6 rounded-sm" />
            Formación Académica
          </h2>
          <div className="relative border-l border-white/20 ml-4 pl-6 space-y-12">
            <TimelineItem
              title="Tecnicatura Universitaria en Programación"
              subtitle="UTN Rosario"
              date="2022 - 2025"
              description="Enfocado en desarrollo de software, estructuras de datos, sistemas y resolución de problemas reales."
              color="bg-blue-400"
            />
            <TimelineItem
              title="Bachiller en Informática"
              subtitle="E.E.S.O N° 201, Villa Constitución"
              date="2018 - 2022"
              description="Formación en fundamentos informáticos, lógica de programación, ofimática y gestión de datos."
              color="bg-white"
            />
          </div>
        </div>

        {/* Sección de trabajos */}
        <div className="mt-24 w-full max-w-5xl">
          <h2 className="text-2xl font-bold mb-10">Mis Trabajos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-300 z-10"></div>
                <img
                  src={`https://source.unsplash.com/random/300x200?sig=${i}`}
                  alt={`Trabajo ${i + 1}`}
                  className="w-full h-48 object-cover group-hover:filter-none filter grayscale"
                />
                <div className="p-4 z-20 relative">
                  <h3 className="text-lg font-semibold text-white">Proyecto {i + 1}</h3>
                  <p className="text-sm text-gray-400">Descripción breve del trabajo realizado.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TechCard({ name, hoverColor }) {
  return (
    <div
      className={`
        bg-[#1e1e1e] text-white font-semibold py-3 rounded-xl
        transition duration-300 ease-in-out shadow-lg cursor-pointer text-sm sm:text-base
        ${hoverColor}
      `}
    >
      {name}
    </div>
  );
}

function TimelineItem({ title, subtitle, date, description, color }) {
  return (
    <div className="relative">
      <div className={`absolute -left-6 top-2 w-4 h-4 rounded-full ${color} border-2 border-white shadow-md`} />
      <h3 className="text-lg font-bold text-yellow-400">{title}</h3>
      <p className="text-md font-semibold text-white mb-1">{subtitle}</p>
      <p className="text-sm text-gray-400 mb-2">{date}</p>
      <p className="text-sm text-gray-300 max-w-xl">{description}</p>
    </div>
  );
}

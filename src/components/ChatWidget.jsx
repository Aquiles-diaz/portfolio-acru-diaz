import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, Mic, MicOff } from "lucide-react";

const predefinedResponses = {
  "hola": "¡Hola! Soy Aquilesbot. ¿En qué puedo ayudarte?",
  "trabajo": "¡Claro! Podemos trabajar juntos. Te dejo mi WhatsApp para hablar.",
  "presupuesto": "Depende del proyecto, pero escribime por WhatsApp y te paso un estimado.",
  "branding": "Me encanta hacer branding. Te muestro ejemplos si querés.",
  "default": "Estoy para ayudarte. Tocá uno de los botones o hablame directamente.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [listening, setListening] = useState(false);

  const synth = window.speechSynthesis;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  // Configuración del reconocimiento
  useEffect(() => {
    if (!recognition) return;

    recognition.lang = "es-AR";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setMessage(voiceText.toLowerCase());
      respondWithVoice(voiceText.toLowerCase());
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
  }, [recognition]);

  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "es-AR";
    synth.speak(utter);
  };

  const respondWithVoice = (input) => {
    const response = predefinedResponses[input] || predefinedResponses["default"];
    speak(response);
  };

  const handleMicClick = () => {
    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.start();
      setListening(true);
    }
  };

  const handleQuickReply = (text) => {
    setMessage(text);
    respondWithVoice(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="bg-black text-white rounded-2xl shadow-2xl p-4 w-72 backdrop-blur-lg border border-white/10"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg">🤖 AquilesBOT</h3>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>

          <p className="text-sm text-gray-300 mb-4">
            ¡Hola! Soy tu asistente. Elegí una opción, escribime o hablame.
          </p>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleQuickReply("trabajo")}
              className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
            >
              ¿Trabajamos juntos?
            </button>
            <button
              onClick={() => handleQuickReply("presupuesto")}
              className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
            >
              ¿Cuánto cuesta un diseño?
            </button>
            <button
              onClick={() => handleQuickReply("branding")}
              className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition"
            >
              ¿Hacés branding?
            </button>
            <a
              href="https://wa.me/543402554418"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm text-center hover:bg-emerald-600 transition"
            >
              Escribime al WhatsApp
            </a>
          </div>

          {/* Micrófono toggle */}
          {recognition && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleMicClick}
                className={`flex items-center px-4 py-2 text-sm rounded-full font-semibold transition ${
                  listening ? "bg-red-600 text-white" : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {listening ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
                {listening ? "Escuchando..." : "Hablar con Acrubot"}
              </button>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-br from-emerald-400 to-blue-500 text-white p-4 rounded-full shadow-lg animate-bounce"
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}

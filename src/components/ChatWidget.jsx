import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, Mic, MicOff } from "lucide-react";

const predefinedResponses = {
  "hola": "¡Hola! Soy Aquilesbot. ¿En qué puedo ayudarte?",
  "trabajo": "¡Claro! Podemos trabajar juntos. Te dejo mi WhatsApp para hablar.",
  "presupuesto": "Depende del proyecto, pero escribime por WhatsApp y te paso un estimado.",
  "branding": "Me encanta hacer branding. Te muestro ejemplos si querés.",
  "web": "¡Sí! Desarrollo sitios web modernos, responsivos y con diseño atractivo.",
  "portfolio": "Puedo ayudarte a armar tu portfolio. ¿Querés ver ejemplos?",
  "ux": "Trabajo también diseño UX/UI. ¿Qué tipo de proyecto tenés en mente?",
  "default": "Estoy para ayudarte. Tocá uno de los botones o hablame directamente.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [listening, setListening] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const synth = window.speechSynthesis;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  // Configurar reconocimiento
  useEffect(() => {
    if (!recognition) return;

    recognition.lang = "es-AR";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      const cleanText = voiceText.toLowerCase().trim();
      setMessage(cleanText);
      respondWithVoice(cleanText);
    };

    recognition.onerror = (event) => {
      console.error("Error en reconocimiento:", event.error);
      setListening(false);
      switch (event.error) {
        case "not-allowed":
          speak("No tengo permiso para usar el micrófono.");
          break;
        case "network":
          speak("Hay un problema de red.");
          break;
        case "no-speech":
          speak("No te escuché. ¿Podés repetir?");
          break;
        default:
          speak("Ocurrió un error. Probá de nuevo.");
          break;
      }
    };

    recognition.onend = () => setListening(false);
  }, [recognition]);

  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "es-AR";
    synth.speak(utter);
  };

  const respondWithVoice = (input) => {
    const keywords = Object.keys(predefinedResponses);
    const match = keywords.find((key) => input.includes(key));
    const response = predefinedResponses[match] || predefinedResponses["default"];
    speak(response);
    setChatHistory((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: response },
    ]);
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

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      respondWithVoice(message.toLowerCase().trim());
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="bg-black text-white rounded-2xl shadow-2xl p-4 w-72 backdrop-blur-lg border border-blue/200"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg">🤖 AquilesBOT</h3>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>

          <p className="text-sm text-gray-400 mb-2">
            ¡Hola! Soy tu asistente. Elegí una opción, escribime o hablame.
          </p>

          {/* Historial del chat */}
          <div className="bg-white/10 p-2 mb-4 rounded-md max-h-40 overflow-y-auto space-y-1 text-sm">
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`text-red ${
                  msg.from === "user" ? "text-right" : "text-left text-emerald-600"
                }`}
              >
                {msg.from === "user" ? "🧑‍💻" : "🤖"} {msg.text}
              </div>
            ))}
          </div>

          {/* Entrada manual de mensaje */}
          <div className="flex items-center mb-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Escribí algo..."
              className="flex-1 rounded-full px-3 py-1 text-black text-sm"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 text-sm bg-white text-black px-3 py-1 rounded-full hover:bg-gray-200"
            >
              ✉️
            </button>
          </div>

          {/* Respuestas rápidas */}
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
              href="https://wa.me/543402507879"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-800 text-white px-4 py-2 rounded-full text-sm text-center hover:bg-emerald-600 transition"
            >
              Escribime al WhatsApp
            </a>
          </div>

          {/* Mic toggle */}
          {recognition && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleMicClick}
                className={`flex items-center px-4 py-2 text-sm rounded-full font-semibold transition ${
                  listening ? "bg-red-600 text-white" : "bg-white text-black hover:bg-violet-600"
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
          className="bg-gradient-to-br from-violet-900 to-blue-600 text-white p-4 rounded-full shadow-lg animate-bounce"
          whileTap={{ scale: 0.6 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}

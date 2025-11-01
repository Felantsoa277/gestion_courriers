import React, { useContext } from "react";
import { ArrowLeft, Edit, LogOut, UserCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/mef.png";
import { DarkModeContext } from "./DarkModeContext";

const ProfilPage = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`relative min-h-screen flex flex-col overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Courbe de fond */}
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <rect
            width="1440"
            height="320"
            fill={darkMode ? "#1f2937" : "#ffffffff"}
          />
          <path
            d="M500,0 Q1000,130 950,420 L1440,320 L1440,0 Z"
            fill={darkMode ? "#111827" : "#ffffff"}
          />
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className={`flex items-center m-8 font-semibold transition ${
              darkMode
                ? "text-green-400 hover:text-green-200"
                : "text-green-700 hover:text-green-900"
            }`}
          >
            <ArrowLeft size={46} className="mr-2 border rounded-3xl p-1" />
          </button>

          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative text-lg font-semibold tracking-wide top-110 right-10 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(255, 215, 0), rgb(255, 170, 0), #A67C00)",
            }}
          >
            Système d'Information Integré de Gestion des Courriers
          </motion.h1>
        </div>

        {/* Contenu central */}
        <div className="flex flex-col items-center flex-grow px-6">
          <div
            className={`rounded-2xl shadow-2xl w-[90%] md:w-[800px] md:h-[450px] mr-140 p-8 flex flex-col items-center justify-center md:flex-row gap-8 transition-colors duration-500 ${
              darkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {/* Colonne gauche */}
            <div
              className={`flex flex-col items-center md:w-1/3 border-r pr-6 ${
                darkMode ? "border-green-700" : "border-indigo-400"
              }`}
            >
              <div
                className={`rounded-full p-4 mb-3 ${
                  darkMode ? "bg-green-600" : "bg-green-700"
                }`}
              >
                <UserCircle size={70} className="text-white" />
              </div>
              <h2 className="text-lg font-semibold">HARINANTOANDRO Fandresena</h2>

              <div className="flex flex-col gap-7 mt-6 w-full">
                <Link
                  to="/modification-form"
                  className={`flex items-center justify-center gap-2 font-medium py-2 rounded-lg transition ${
                    darkMode
                      ? "bg-green-900 text-green-200 hover:bg-green-800"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  <Edit size={18} />
                  Éditer
                </Link>
                <button
                  className={`flex items-center justify-center gap-2 font-medium py-2 rounded-lg transition ${
                    darkMode
                      ? "bg-green-700 text-white hover:bg-green-800"
                      : "bg-green-700 text-white hover:bg-green-800"
                  }`}
                >
                  <LogOut size={18} />
                  Déconnexion
                </button>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="flex-1 text-sm space-y-6">
              <div>
                <h3
                  className={`font-semibold text-2xl border-b pb-1 mb-3 ${
                    darkMode
                      ? "text-green-400 border-green-700"
                      : "text-green-700 border-indigo-400"
                  }`}
                >
                  Infos
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <p>
                    <span className="font-semibold text-lg">Matricule :</span>
                    <br />
                    4477M489
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Email :</span>
                    <br />
                    <span className={darkMode ? "text-gray-300" : "text-gray-500"}>
                      harfandresena@gmail.com
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className={`font-semibold text-2xl border-b pb-1 mb-3 ${
                    darkMode
                      ? "text-green-400 border-green-700"
                      : "text-green-700 border-indigo-400"
                  }`}
                >
                  Autres
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <p>
                    <span className="font-semibold text-lg">Nom :</span>
                    <br />
                    HARINANTOANDRO
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Département :</span>
                    <br />
                    Service Régional du Budget
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Prénom(s) :</span>
                    <br />
                    Fandresena
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Fonction :</span>
                    <br />
                    Secrétaire
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Tél :</span>
                    <br />
                    +261 34 XX XXX XX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-65 right-38 w-[320px] opacity-100"
        >
          <img src={logo} alt="logo de la Mef" className="w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilPage;

import React, { useState, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Mail,
  Folder,
  Grid,
  FolderCog,
  Sun,
  Moon,
  UserCircle,
  CheckCircle2,
  Home
} from "lucide-react";
import logo from "../assets/mef.png";

const ObservationPage = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [autreObservation, setAutreObservation] = useState("");
  const [success, setSuccess] = useState(false);
  const [dossierNum, setDossierNum] = useState("");

  const navigate = useNavigate();
  const currentPage = "Dossier affectés";

  const options = [
    "Pour lecture tournante",
    "Pour avis",
    "Pour classement aux dossiers",
    "Pour étude et m’en parler",
    "M’en parler au téléphone",
    "Me rendre compte",
    "Pour procédure à suivre",
    "Pour instruction permanente",
    "Pour attribution",
    "Me rappeler",
    "Pour affichage",
    "Pour la suite à donner",
    "Pour information",
    "Pour classement et suivi de l’exécution",
    "Pour notification à l’intéressé",
    "Garder en instance",
    "Venir m’en parler",
    "Dossiers très importants",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate("/dossiers-suivis");
    }, 3500);
  };

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* HEADER */}
      <header
        className={`fixed w-full z-40 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-indigo-900 text-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-18 h-17 rounded-full" />
          <h1 className="text-4xl font-bold">SIIGC</h1>
        </div>

        <Link to="/profil" className="flex items-center gap-3">
          <span className="hidden sm:block font-medium hover:underline">
            HARINANTOANDRO Fandresena
          </span>
          <UserCircle
            size={40}
            className={`${darkMode ? "text-gray-100" : "text-white"}`}
          />
        </Link>
      </header>

      {/* LAYOUT: SIDEBAR + MAIN */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-24"
          } flex flex-col transition-all duration-300 pt-30 ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-gray-200"
              : "bg-white border-gray-200 text-gray-800"
          }`}
        >
          {/* TOGGLE */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            {sidebarOpen && <h2 className="font-semibold text-lg">Menu</h2>}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-indigo-700 hover:text-indigo-900"
              aria-label="toggle sidebar"
            >
              <Menu size={22} />
            </button>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 px-3 py-4 text-sm space-y-4 overflow-y-auto">
            <div>
              <ul className="space-y-2">
                <Link to="/accueil">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition duration-200 ease-in-out ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Home size={18} /> {sidebarOpen && "Accueil"}
                  </li>
                </Link>
                <Link to="/enregistrement">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition duration-200 ease-in-out ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Mail size={18} /> {sidebarOpen && "Arriver du courrier"}
                  </li>
                </Link>
                
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition duration-200 ease-in-out ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-100"
                      : "hover:bg-indigo-50 text-indigo-800"
                  }`}
                >
                  <Mail size={18} /> {sidebarOpen && "Départ du courrier"}
                </li>
                <Link to="/dashboard">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition duration-200 ease-in-out ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Grid size={18} /> {sidebarOpen && "Dashboard"}
                  </li>
                </Link>
              </ul>
            </div>

            {/* Mes dossiers */}
            <div>
              <p
                className={`font-semibold mt-3 ${
                  darkMode ? "text-indigo-300" : "text-indigo-800"
                }`}
              >
                Mes dossiers
              </p>
              <ul className="space-y-2 mt-1">
                <Link to="/observation">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition duration-200 ease-in-out ${
                      currentPage === "Dossier affectés"
                        ? darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-indigo-100 text-gray-800"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers affectés"}
                  </li>
                </Link>
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition duration-200 ease-in-out ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Folder size={18} /> {sidebarOpen && "Dossiers suivis"}
                </li>
              </ul>
            </div>

            {/* Dossiers des divisions */}
            <div>
              <p
                className={`font-semibold mt-3 ${
                  darkMode ? "text-indigo-300" : "text-indigo-800"
                }`}
              >
                Dossiers des divisions
              </p>
              <ul className="space-y-2 mt-1">
                {[
                  { path: "/dossiers-divisions", label: "Dossiers des divisions" },
                  { path: "/dossiers-sans-affectataires", label: "Dossiers sans affectataires" },
                  { path: "/dossiers-classes", label: "Dossiers archivés/classés" },
                ].map((item) => (
                  <li
                    key={item.path}
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition duration-200 ease-in-out ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Link to={item.path} className="flex items-center gap-2 w-full">
                      <Folder size={18} /> {sidebarOpen && item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 overflow-auto  pt-30 relative">
          {/* Bouton mode clair/sombre */}
          <div className="absolute bottom-4 right-4">
            <button
              onClick={toggleDarkMode}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* FORMULAIRE OBSERVATION */}
          <div
            className={`max-w-5xl mx-auto rounded-3xl shadow-xl p-8 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              className={`text-center text-3xl font-semibold ${
                darkMode ? "text-indigo-300" : "text-indigo-700"
              }`}
            >
              OBSERVATION
            </h2>

            <div className="text-center mt-2">
              <label className="font-semibold text-lg">Dossier N° :</label>
              <input
                type="text"
                value={dossierNum}
                onChange={(e) => setDossierNum(e.target.value)}
                className={`ml-3 border-b-2 w-40 text-center outline-none ${
                  darkMode
                    ? "bg-transparent border-indigo-500 text-white"
                    : "bg-transparent border-indigo-700 text-indigo-800"
                }`}
              />
            </div>

            {/* OPTIONS RADIO */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm"
            >
              {options.map((option, index) => (
                <label key={index} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="observation"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="accent-indigo-600 w-4 h-4"
                  />
                  {option}
                </label>
              ))}

              {/* Autre observation */}
              <div className="col-span-full mt-4">
                <label className="block font-semibold mb-2">Autre observation</label>
                <input
                  type="text"
                  placeholder="Entrez une autre observation"
                  value={autreObservation}
                  onChange={(e) => setAutreObservation(e.target.value)}
                  className={`w-full px-3 py-2 rounded-md border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              {/* BOUTONS RETOUR + VALIDER */}
              <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-6 ml-80 gap-3">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white w-100 px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
                >
                  Valider
                </button>
                <Link to="/dossiers-affectes">
                  <button className="bg-gray-200 text-black w-100 px-6 py-2 rounded-lg hover:bg-gray-300 font-medium">
                    Annuler
                  </button>
                </Link>
              </div>
            </form>
          </div>

          {/* Message de succès superposé */}
          {success && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-30">
              <div
                className={`p-10 rounded-2xl shadow-xl text-center ${
                  darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
                }`}
              >
                <CheckCircle2
                  size={80}
                  className="text-green-500 mx-auto mb-4 animate-bounce"
                />
                <h2 className="text-2xl font-bold mb-2">
                  Ajout d'une observation avec succès !
                </h2>
                <p className="text-gray-500 mb-6">
                  Vous serez redirigé vers la page d’informations des dossiers suivis.
                </p>
                <Link
                  to="/dossiers-suivis"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Y aller maintenant
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ObservationPage;

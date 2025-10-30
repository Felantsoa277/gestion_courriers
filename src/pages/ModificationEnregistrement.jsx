import React, { useState, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Mail,
  Folder,
  Sun,
  Moon,
  FolderCog,
  UserCircle,
  Grid,
  CheckCircle2,
  Home,
} from "lucide-react";
import logo from "../assets/mef.png";

const ModificationEnregistrement = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [courrier, setCourrier] = useState({
    dateReception: "",
    provenance: "",
    numero: "",
    dateCorrespondance: "",
    texte: "",
    piecesJointes: "",
  });

  const currentPage = "Arriver du courrier";

  // 🔹 Gestion de la modification des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourrier((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      navigate("/information");
    }, 2500);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col min-h-screen transition-colors duration-300 relative ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* HEADER */}
      <header
        className={`flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
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

      {/* LAYOUT */}
      <div className="flex flex-1 relative">
{/* SIDEBAR */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-24"
          } transition-all duration-300 flex flex-col border-r ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-gray-100"
              : "bg-white border-gray-200 text-gray-800"
          }`}
        >
          <div
            className={`flex items-center justify-between px-4 py-3 border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {sidebarOpen && (
              <h2 className="font-semibold text-lg">Menu</h2>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`${
                darkMode
                  ? "text-indigo-300 hover:text-indigo-400"
                  : "text-indigo-700 hover:text-indigo-900"
              }`}
              aria-label="toggle sidebar"
            >
              <Menu size={22} />
            </button>
          </div>

          <nav className="flex-1 px-3 py-4 text-sm space-y-4 overflow-y-auto">
            <div>
              <ul className="space-y-2">
                <Link to="/accueil">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Home size={18} />{" "}
                    {sidebarOpen && "Accueil"}
                  </li>
                </Link>
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
                    currentPage === "Arriver du courrier"
                      ? darkMode
                        ? "bg-indigo-900 text-indigo-200"
                        : "bg-indigo-100 text-indigo-800"
                      : darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-indigo-800"
                  }`}
                >
                  <Mail size={18} /> {sidebarOpen && "Arriver du courrier"}
                </li>

                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-indigo-800"
                  }`}
                >
                  <Mail size={18} /> {sidebarOpen && "Départ du courrier"}
                </li>

                <Link to="/dashboard">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Grid size={18} /> {sidebarOpen && "Dashboard"}
                  </li>
                </Link>
              </ul>
            </div>

            {/* MES DOSSIERS */}
            <div>
              <p className="font-semibold mt-3 text-indigo-500">Mes dossiers</p>
              <ul className="space-y-2 mt-1">
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Link
                    to="/dossiers-affectes"
                    className="flex items-center gap-2 w-full"
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers affectés"}
                  </Link>
                </li>

                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Link
                    to="/dossiers-suivis"
                    className="flex items-center gap-2 w-full"
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers suivis"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* DOSSIERS DES DIVISIONS */}
            <div>
              <p className="font-semibold mt-3 text-indigo-500">
                Dossiers des divisions
              </p>
              <ul className="space-y-2 mt-1">
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Link
                    to="/dossiers-divisions"
                    className="flex items-center gap-2 w-full"
                  >
                    <Folder size={18} />{" "}
                    {sidebarOpen && "Dossiers des divisions"}
                  </Link>
                </li>

                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Link
                    to="/dossiers-sans-affectataires"
                    className="flex items-center gap-2 w-full"
                  >
                    <Folder size={18} />{" "}
                    {sidebarOpen && "Dossiers sans affectataires"}
                  </Link>
                </li>

                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Link
                    to="/dossiers-classes"
                    className="flex items-center gap-2 w-full"
                  >
                    <Folder size={18} />{" "}
                    {sidebarOpen && "Dossiers archivés/classés"}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 overflow-y-auto h-[calc(100vh-64px)] relative">
          {/* Bouton dark mode */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={toggleDarkMode}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* FORMULAIRE */}
          <div
            className={`rounded-xl shadow-lg overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className="p-6 border-b"
              style={{
                borderColor: darkMode
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(15,23,42,0.03)",
              }}
            >
              <h2
                className={`text-3xl font-semibold text-center ${
                  darkMode ? "text-white" : "text-indigo-800"
                }`}
              >
                Modification des informations d'un courrier
              </h2>
              <p className="text-sm text-gray-500 text-center mt-1">
                Mettez à jour les informations du courrier sélectionné.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-6 grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div className="flex flex-col">
                <label className="text-xl font-semibold mb-1">
                  Date de réception
                </label>
                <input
                  type="date"
                  name="dateReception"
                  value={courrier.dateReception}
                  onChange={handleChange}
                  className={`px-3 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-semibold mb-1">Provenance</label>
                <input
                  type="text"
                  name="provenance"
                  value={courrier.provenance}
                  onChange={handleChange}
                  placeholder="Ex: Ministère de l'Économie"
                  className={`px-3 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-semibold mb-1">
                  Numéro de la correspondance
                </label>
                <input
                  type="text"
                  name="numero"
                  value={courrier.numero}
                  onChange={handleChange}
                  placeholder="Ex: CORR-2025-001"
                  className={`px-3 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-semibold mb-1">
                  Date de la correspondance
                </label>
                <input
                  type="date"
                  name="dateCorrespondance"
                  value={courrier.dateCorrespondance}
                  onChange={handleChange}
                  className={`px-3 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-semibold mb-1">Texte</label>
                <input
                  type="text"
                  name="texte"
                  value={courrier.texte}
                  onChange={handleChange}
                  placeholder="Objet du courrier"
                  className={`px-3 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xl font-semibold mb-1">
                  Pièces jointes
                </label>
                <input
                  type="text"
                  name="piecesJointes"
                  value={courrier.piecesJointes}
                  onChange={handleChange}
                  placeholder="Texte des pièces jointes"
                  className={`px-3 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } outline-none focus:ring-2 focus:ring-indigo-500`}
                />
              </div>

              {/* Boutons */}
              <div className="col-span-1 md:col-span-2 flex flex-col items-center mt-6 gap-3">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white w-100 px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
                >
                  Mettre à jour
                </button>
                <Link to="/information">
                <button
                  className="bg-gray-200 text-black w-100 px-6 py-2 rounded-lg hover:bg-gray-300 font-medium"
                >
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
                  Modification enregistrée avec succès !
                </h2>
                <p className="text-gray-500 mb-6">
                  Vous serez redirigé vers la page d’informations.
                </p>
                <Link
                  to="/information"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Retourner maintenant
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ModificationEnregistrement;

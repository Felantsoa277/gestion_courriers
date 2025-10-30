import React, { useState, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { Link } from "react-router-dom";
import {
  Menu,
  Mail,
  Folder,
  BarChart2,
  Sun,
  Moon,
  Trash2,
  Edit,
  FolderCog,
  UserCircle,
  Info,
  Save,
  Search,
  Grid,
  Home,
} from "lucide-react";
import logo from "../assets/mef.png";

const Informations = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentPage = "Arriver du courrier";

  // États pour les filtres
  const [filterProvenance, setFilterProvenance] = useState("");
  const [filterDateArrivee, setFilterDateArrivee] = useState("");
  const [filterNumeroCorr, setFilterNumeroCorr] = useState("");
  const [filterTexte, setFilterTexte] = useState("");

  const enregistrements = [
    {
      id: 1,
      numero: "ENR-2024-001",
      dateArrivee: "08/10/2025",
      provenance: "Ministère Finance",
      numeroCorrespondance: "CORR-2024-456",
      dateCorrespondance: "05/10/2025",
      texte: "Demande de budget",
      etat: "En attente",
    },
    {
      id: 2,
      numero: "ENR-2024-002",
      dateArrivee: "07/10/2025",
      provenance: "Préfecture",
      numeroCorrespondance: "CORR-2024-457",
      dateCorrespondance: "06/10/2025",
      texte: "Rapport annuel",
      etat: "Traitée",
    },
  ];

  // Fonction de filtrage
  const filtered = enregistrements.filter((e) => {
    return (
      (!filterProvenance ||
        e.provenance.toLowerCase().includes(filterProvenance.toLowerCase())) &&
      (!filterDateArrivee || e.dateArrivee === filterDateArrivee) &&
      (!filterNumeroCorr ||
        e.numeroCorrespondance
          .toLowerCase()
          .includes(filterNumeroCorr.toLowerCase())) &&
      (!filterTexte || e.texte.toLowerCase().includes(filterTexte.toLowerCase()))
    );
  });

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* HEADER */}
      <header
        className={`flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-gray-100 border-b border-gray-700" : "bg-indigo-900 text-white"
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
          <UserCircle size={40} className={`${darkMode ? "text-gray-100" : "text-white"}`} />
        </Link>
      </header>

      {/* LAYOUT */}
      <div className="flex flex-1">
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
              <h2 className="font-semibold text-lg">
                {darkMode ? "Menu" : "Menu"}
              </h2>
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
                    <Home size={18} /> {sidebarOpen && "Accueil"}
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

                <Link to="/informationdepart">
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-indigo-800"
                  }`}
                >
                  <Mail size={18} /> {sidebarOpen && "Départ du courrier"}
                </li>
                </Link>

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
        <main className="flex-1 p-6 overflow-auto relative">
          {/* BOUTON DARK MODE */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={toggleDarkMode}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
              aria-label="toggle dark mode"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* top actions */}
          <div className="flex flex-col lg:flex-row gap-4 items-start justify-between mb-4">
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/information"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100"
                    : "bg-indigo-100 border-indigo-100 text-indigo-800"
                } shadow-sm hover:shadow-md transition`}
              >
                <Info size={18} />
                <span className="font-medium">Informations</span>
              </Link>

              <Link
                to="/enregistrement"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-gray-100"
                    : "bg-white border-indigo-100 text-indigo-800"
                } shadow-sm hover:shadow-md transition`}
              >
                <Save size={18} />
                <span className="font-medium">Enregistrer un courrier</span>
              </Link>
            </div>
          </div>
          {/* Filtrage multi-critères */}
          <div className="flex flex-col lg:flex-row gap-3 items-end mb-6">
            <div className="flex gap-2 flex-wrap w-full lg:w-3/4">
              <input
                type="text"
                value={filterProvenance}
                onChange={(e) => setFilterProvenance(e.target.value)}
                placeholder="Provenance"
                className={`flex-1 px-3 py-2 border rounded-lg ${
                  darkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900"
                }`}
              />
              <input
                type="date"
                value={filterDateArrivee}
                onChange={(e) => setFilterDateArrivee(e.target.value)}
                className={`px-3 py-2 border rounded-lg ${
                  darkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900"
                }`}
              />
              <input
                type="text"
                value={filterNumeroCorr}
                onChange={(e) => setFilterNumeroCorr(e.target.value)}
                placeholder="N° Correspondance"
                className={`px-3 py-2 border rounded-lg ${
                  darkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900"
                }`}
              />
              <input
                type="text"
                value={filterTexte}
                onChange={(e) => setFilterTexte(e.target.value)}
                placeholder="Objet"
                className={`px-3 py-2 border rounded-lg ${
                  darkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900"
                }`}
              />
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
              Filtrer
            </button>
          </div>

          {/* TABLE */}
          <div
            className={`rounded-xl shadow-lg overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className="p-6 border-b"
              style={{
                borderColor: darkMode
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(15,23,42,0.05)",
              }}
            >
              <h2
                className={`text-2xl font-semibold ${
                  darkMode ? "text-white" : "text-indigo-800"
                }`}
              >
                Listes des enregistrements
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Visualisez et gérez les courriers enregistrés. ({filtered.length})
              </p>
            </div>

            <div className="p-4 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr
                    className={`${
                      darkMode
                        ? "bg-indigo-950 text-white"
                        : "bg-indigo-100 text-indigo-900"
                    }`}
                  >
                    <th className="px-4 py-3 text-center text-sm">N° d'enregistrement</th>
                    <th className="px-4 py-3 text-center text-sm">Date de l'arrivée</th>
                    <th className="px-4 py-3 text-center text-sm">Provenance</th>
                    <th className="px-4 py-3 text-center text-sm">N° de la correspondance</th>
                    <th className="px-4 py-3 text-center text-sm">Date de la correspondance</th>
                    <th className="px-4 py-3 text-center text-sm">Texte</th>
                    <th className="px-4 py-3 text-center text-sm w-36">État</th>
                    <th className="px-4 py-3 text-center text-sm">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        Aucun enregistrement trouvé.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((item) => (
                      <tr
                        key={item.id}
                        className={`border-b ${
                          darkMode
                            ? "border-gray-700 hover:bg-gray-700"
                            : "hover:bg-indigo-50"
                        }`}
                      >
                        <td className="px-4 py-3 text-center text-sm">{item.numero}</td>
                        <td className="px-4 py-3 text-center text-sm">{item.dateArrivee}</td>
                        <td className="px-4 py-3 text-center text-sm">{item.provenance}</td>
                        <td className="px-4 py-3 text-center text-sm">{item.numeroCorrespondance}</td>
                        <td className="px-4 py-3 text-center text-sm">
                          {item.dateCorrespondance}
                        </td>
                        <td className="px-4 py-3 text-center text-sm">{item.texte}</td>
                        <td className="px-4 py-3 text-center text-sm">
                          <span
                            className={`px-2 py-1 rounded-full text-sm ${
                              item.etat === "Traitée"
                                ? "bg-green-200 text-green-800"
                                : "bg-yellow-200 text-yellow-800"
                            }`}
                          >
                            {item.etat}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center flex justify-center gap-2">
                          <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"><Edit size={16} /></button>
                          <button className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Informations;

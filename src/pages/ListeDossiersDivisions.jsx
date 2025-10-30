import React, { useState, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import {Link} from "react-router-dom";
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
} from "lucide-react";
import logo from "../assets/mef.png";

const ListeDossiersDivisions = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [query, setQuery] = useState("");

  const currentPage = "Dossiers des divisions";
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
    // ... autres enregistrements
  ];

  const filtered = enregistrements.filter((e) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      e.numero.toLowerCase().includes(q) ||
      e.provenance.toLowerCase().includes(q) ||
      e.texte.toLowerCase().includes(q)
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
          darkMode ? "bg-gray-800 text-gray-100" : "bg-indigo-900 text-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-18 h-17 rounded-full" />
          <h1 className="text-4xl font-bold">SIIGC</h1>
        </div>

        <Link to="/profil" className="flex items-center gap-3">
          <span className="hidden sm:block font-medium hover:underline">HARINANTOANDRO Fandresena</span>
          <UserCircle size={40} className={`${darkMode ? "text-gray-100" : "text-white"}`} />
        </Link>
      </header>

      {/* LAYOUT: SIDEBAR + MAIN */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-24"
          } bg-white border-r border-gray-200 text-gray-800 flex flex-col transition-all duration-300`}
        >
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

          <nav className="flex-1 px-3 py-4 text-sm space-y-4 overflow-y-auto">
            <div>
              <ul className="space-y-2">
                <li
                  className="p-2 rounded-md cursor-pointer flex items-center gap-3 text-indigo-800 font-medium">
                  <Mail size={18} /> {sidebarOpen && "Arriver du courrier"}
                </li>
                <Link to="/assignation">
                  <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-3 text-indigo-800 font-medium">
                    <FolderCog size={18} /> {sidebarOpen && "Assigner un courrier"}
                  </li>
                </Link>
                <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-3 text-indigo-800 font-medium">
                  <Mail size={18} /> {sidebarOpen && "Départ du courrier"}
                </li>
                <Link to="/dashboard">
                  <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-3 text-indigo-800 font-medium">
                    <Grid size={18} /> {sidebarOpen && "Dashboard"}
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <p className="font-semibold mt-3 text-indigo-800">Mes dossiers</p>
              <ul className="space-y-2 mt-1">
                <Link to="/dossiers-affectes">
                  <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-2">
                    <Folder size={18} /> {sidebarOpen && "Dossiers affectés"}
                  </li>
                </Link>
                <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-2">
                  <Folder size={18} /> {sidebarOpen && "Dossiers suivis"}
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mt-3 text-indigo-800">
                Dossiers des divisions
              </p>
              <ul className="space-y-2 mt-1">
                <li className={`hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-2 ${
                    currentPage === "Dossiers des divisions"
                      ? "bg-indigo-100"
                      : "hover:bg-indigo-50"
                  }`}>
                  <Folder size={18} /> {sidebarOpen && "Dossiers des divisions"}
                </li>
                <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-2">
                  <Folder size={18} /> {sidebarOpen && "Dossiers sans affectataires"}
                </li>
                <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-2">
                  <Folder size={18} /> {sidebarOpen && "Dossiers archivés/classés"}
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 overflow-auto relative">
          {/* Bouton mode clair/sombre */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={toggleDarkMode}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
              aria-label="toggle dark mode"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* TOP ACTIONS: 3 cards + search */}
          <div className="flex flex-col lg:flex-row gap-4 items-start justify-between mb-6">
            {/* 3 cards */}
            <div className="flex gap-3 flex-wrap">
              <Link to="/information"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100"
                    : "bg-indigo-100 border-indigo-100 text-indigo-800" // actif
                } shadow-sm hover:shadow-md transition`}
              >
                <Info size={18} />
                <span className="font-medium">Informations</span>
              </Link>
            </div>

            {/* recherche */}
            <div className="w-full lg:w-1/3">
              <label className="sr-only">Rechercher</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                <Search size={18} className="text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher un courrier, provenance..."
                  className={`ml-2 w-full bg-transparent outline-none text-sm ${
                    darkMode ? "text-gray-100" : "text-gray-700"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* GRAND CARD */}
          <div
            className={`rounded-xl shadow-lg overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="p-6 border-b" style={{ borderColor: darkMode ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)" }}>
              <h2 className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-indigo-800"}`}>
                Listes des enregistrements de la (Nom de la division)
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
                      darkMode ? "bg-indigo-950 text-white" : "bg-indigo-100 text-indigo-900"
                    }`}
                  >
                    <th className="px-4 py-3 text-left text-sm">N° d'enregistrement</th>
                    <th className="px-4 py-3 text-left text-sm">Date de l'arrivée</th>
                    <th className="px-4 py-3 text-left text-sm">Provenance</th>
                    <th className="px-4 py-3 text-left text-sm">N° de la correspondance</th>
                    <th className="px-4 py-3 text-left text-sm">Date de la correspondance</th>
                    <th className="px-4 py-3 text-left text-sm">Texte</th>
                    <th className="px-4 py-3 text-left text-sm w-36">État</th>
                    <th className="px-4 py-3 text-center text-sm">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={9} className="px-4 py-6 text-center text-gray-500">
                        Aucun enregistrement trouvé.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((item) => (
                      <tr
                        key={item.id}
                        className={`border-b ${
                          darkMode ? "border-gray-700 hover:bg-gray-700" : "hover:bg-indigo-50"
                        }`}
                      >
                        <td className="px-4 py-3 text-sm">{item.numero}</td>
                        <td className="px-4 py-3 text-sm">{item.dateArrivee}</td>
                        <td className="px-4 py-3 text-sm">{item.provenance}</td>
                        <td className="px-4 py-3 text-sm">{item.numeroCorrespondance}</td>
                        <td className="px-4 py-3 text-sm">{item.dateCorrespondance}</td>
                        <td className="px-4 py-3 text-sm">{item.texte}</td>
                        <td className="px-4 py-3 text-sm">
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
                        <td className="px-4 py-3 text-center">
                          <div className="flex items-center justify-center gap-3">
                            <Link to={`/modification/${item.id}`}>
                              <button className="text-green-600 hover:text-green-800" aria-label="modifier">
                                <Edit size={18} />
                              </button>
                            </Link>
                            <button className="text-red-600 hover:text-red-800" aria-label="supprimer">
                              <Trash2 size={18} />
                            </button>
                          </div>
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

export default ListeDossiersDivisions;

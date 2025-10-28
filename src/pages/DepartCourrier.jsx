import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Mail,
  Folder,
  Grid,
  UserCircle,
  Sun,
  Moon,
  Trash2,
  Edit,
  Info,
  Save,
  Search,
} from "lucide-react";
import logo from "../assets/mef.png";

const DepartDuCourrier = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // États pour les filtres
  const [filterProvenance, setFilterProvenance] = useState("");
  const [filterNumero, setFilterNumero] = useState("");

  const currentPage = "Départ du courrier";

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

  const filtered = enregistrements.filter(
    (e) =>
      e.provenance.toLowerCase().includes(filterProvenance.toLowerCase()) &&
      e.numero.toLowerCase().includes(filterNumero.toLowerCase())
  );

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-indigo-900 text-white"
        }`}
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
          <h1 className="text-3xl font-bold">SIIGC</h1>
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
      <div className="flex flex-1 pt-24">
        {/* SIDEBAR */}
        <aside
          className={`flex flex-col transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-24"
          } ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          } border-r border-gray-300`}
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
            <ul className="space-y-2">
              <li
                className={`p-2 rounded-md flex items-center gap-3 font-medium ${
                  currentPage === "Départ du courrier"
                    ? darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-indigo-100 text-gray-800"
                    : darkMode
                    ? "hover:bg-gray-700 text-gray-200"
                    : "hover:bg-indigo-50 text-gray-800"
                }`}
              >
                <Mail size={18} /> {sidebarOpen && "Départ du courrier"}
              </li>

              <Link to="/assignation">
                <li
                  className={`p-2 rounded-md flex items-center gap-3 font-medium ${
                    darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Folder size={18} /> {sidebarOpen && "Assigner un courrier"}
                </li>
              </Link>

              <Link to="/dashboard">
                <li
                  className={`p-2 rounded-md flex items-center gap-3 font-medium ${
                    darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Grid size={18} /> {sidebarOpen && "Dashboard"}
                </li>
              </Link>
            </ul>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 overflow-auto relative">
          {/* Bouton dark mode */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* Top actions */}
          <div className="flex flex-col lg:flex-row gap-4 items-start justify-between mb-4">
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/information"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100"
                    : "bg-indigo-100 text-indigo-800"
                } shadow-sm hover:shadow-md transition`}
              >
                <Info size={18} /> <span className="font-medium">Informations</span>
              </Link>

              <Link
                to="/enregistrement"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-gray-100"
                    : "bg-white border-indigo-100 text-indigo-800"
                } shadow-sm hover:shadow-md transition`}
              >
                <Save size={18} /> <span className="font-medium">Enregistrer un courrier</span>
              </Link>
            </div>
          </div>

          {/* FILTRAGE */}
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
                type="text"
                value={filterNumero}
                onChange={(e) => setFilterNumero(e.target.value)}
                placeholder="N° Enregistrement"
                className={`flex-1 px-3 py-2 border rounded-lg ${
                  darkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-200 text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* TABLEAU */}
          <div className={`rounded-xl shadow-lg overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="p-6 border-b" style={{ borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.05)" }}>
              <h2 className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-indigo-800"}`}>
                Listes des courriers départ
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Visualisez et gérez les courriers départ. ({filtered.length})
              </p>
            </div>

            <div className="p-4 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className={`${darkMode ? "bg-indigo-950 text-white" : "bg-indigo-100 text-indigo-900"}`}>
                    <th className="px-4 py-3 text-left text-sm">N° Enregistrement</th>
                    <th className="px-4 py-3 text-left text-sm">Date Arrivée</th>
                    <th className="px-4 py-3 text-left text-sm">Provenance</th>
                    <th className="px-4 py-3 text-left text-sm">N° Correspondance</th>
                    <th className="px-4 py-3 text-left text-sm">Date Correspondance</th>
                    <th className="px-4 py-3 text-left text-sm">Objet</th>
                    <th className="px-4 py-3 text-left text-sm">Etat</th>
                    <th className="px-4 py-3 text-center text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length ? (
                    filtered.map((e) => (
                      <tr key={e.id} className={`border-b ${darkMode ? "border-gray-700 hover:bg-gray-700" : "hover:bg-indigo-50"}`}>
                        <td className="px-4 py-3 text-sm">{e.numero}</td>
                        <td className="px-4 py-3 text-sm">{e.dateArrivee}</td>
                        <td className="px-4 py-3 text-sm">{e.provenance}</td>
                        <td className="px-4 py-3 text-sm">{e.numeroCorrespondance}</td>
                        <td className="px-4 py-3 text-sm">{e.dateCorrespondance}</td>
                        <td className="px-4 py-3 text-sm">{e.texte}</td>
                        <td className="px-4 py-3 text-sm">{e.etat}</td>
                        <td className="px-4 py-3 text-center flex justify-center gap-2">
                          <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"><Edit size={16} /></button>
                          <button className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="text-center py-4 text-gray-500">
                        Aucun enregistrement trouvé.
                      </td>
                    </tr>
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

export default DepartDuCourrier;

import React, { useState, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { SidebarContext } from "./SideBarContext";
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
  Pencil,
  Info,
  Home,
  HelpCircle,
} from "lucide-react";
import logo from "../assets/mef.png";

const DossiersSuivis = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);

  // États pour les filtres
  const [filterProvenance, setFilterProvenance] = useState("");
  const [filterDateArrivee, setFilterDateArrivee] = useState("");
  const [filterNumeroCorr, setFilterNumeroCorr] = useState("");
  const [filterTexte, setFilterTexte] = useState("");

  // État pour la ligne sélectionnée
  const [selectedId, setSelectedId] = useState(null);

  // Modal suppression
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const currentPage = "Dossier suivis";

  const enregistrements = [
    {
      id: 1,
      numero: "ENR-2024-001",
      dateArrivee: "2025-10-08",
      provenance: "Ministère Finance",
      numeroCorrespondance: "CORR-2024-456",
      dateCorrespondance: "2025-10-05",
      texte: "Demande de budget",
      bureau: "Direction Générale",
      observation: "Pour avis",
      etat: "En cours",
    },
    {
      id: 2,
      numero: "ENR-2024-002",
      dateArrivee: "2025-10-07",
      provenance: "Préfecture",
      numeroCorrespondance: "CORR-2024-457",
      dateCorrespondance: "2025-10-06",
      texte: "Rapport annuel",
      bureau: "Secrétariat",
      observation: "Pour lecture",
      etat: "En cours",
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

  // Fonction de sélection/désélection
  const handleRowClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  // Supprimer l'enregistrement
  const handleDelete = (item) => {
  setSelectedItem(item);
  setConfirmDelete(true);
  };

  const confirmDeletion = () => {
  console.log("Supprimer:", selectedItem);
  setConfirmDelete(false);
  setSelectedItem(null);
  //appeler API ou modifier state pour réellement supprimer l'élément
  };

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
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside
          className={`fixed h-full flex flex-col transition-all duration-300 pt-30 ${
            sidebarOpen ? "w-64" : "w-24"
          } ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          } border-gray-100`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b">
            {sidebarOpen && <h2 className="font-semibold text-lg">Menu</h2>}
            <button
              onClick={() => setSidebarOpen(prev => !prev)}
              className="text-indigo-700 hover:text-indigo-900"
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
                    className={`p-2 rounded-md flex items-center gap-3 font-medium transition ${
                      currentPage === "Assigner un courrier"
                        ? darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-indigo-100 text-gray-800"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Home size={18} /> {sidebarOpen && "Accueil"}
                  </li>
                </Link>
                <Link to="/information">
                  <li
                    className={`p-2 rounded-md flex items-center gap-3 font-medium transition ${
                      darkMode 
                      ? "hover:bg-gray-700 text-gray-100"
                      : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Mail size={18} /> {sidebarOpen && "Arriver du courrier"}
                  </li>
                </Link>
                
                <Link to="/informationdepart">
                  <li
                    className={`p-2 rounded-md flex items-center gap-3 font-medium transition ${
                      darkMode 
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Mail size={18} /> {sidebarOpen && "Départ du courrier"}
                  </li>
                </Link>
                <Link to="/dashboard">
                  <li
                    className={`p-2 rounded-md flex items-center gap-3 font-medium transition ${
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

            <div>
              <p
                className={`font-semibold mt-3 ${
                  darkMode ? "text-indigo-300" : "text-indigo-800"
                }`}
              >
                Mes dossiers
              </p>
              <ul className="space-y-2 mt-1">
                <Link to="/dossiers-affectes">
                  <li
                    className={`p-2 rounded-md flex items-center gap-2 font-medium transition ${
                      darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers affectés"}
                  </li>
                </Link>
                <Link to="/dossiers-suivis">
                  <li
                    className={`p-2 rounded-md flex items-center gap-2 font-medium transition ${
                      currentPage === "Dossier suivis"
                        ? darkMode
                          ? "bg-indigo-900 text-indigo-200"
                        : "bg-indigo-100 text-indigo-800"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers suivis"}
                  </li>
                </Link>
              </ul>
            </div>

            <div>
              <p
                className={`font-semibold mt-3 ${
                  darkMode ? "text-indigo-300" : "text-indigo-800"
                }`}
              >
                Dossiers des divisions
              </p>
              <ul className="space-y-2 mt-1">
                <Link to="/dossiers-divisions">
                  <li
                    className={`p-2 rounded-md flex items-center gap-2 font-medium transition ${
                      darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers des divisions"}
                  </li>
                </Link>
                <Link to="/dossiers-sans-affectataires">
                  <li
                    className={`p-2 rounded-md flex items-center gap-2 font-medium transition ${
                      darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers sans affectataires"}
                  </li>
                </Link>
                <Link to="/dossiers-classes">
                  <li
                    className={`p-2 rounded-md flex items-center gap-2 font-medium transition ${
                      darkMode ? "hover:bg-gray-700 text-gray-200" : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers archivés/classés"}
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </aside>

        {/* MAIN */}
        <main className={`flex-1 p-6 overflow-auto transition-all duration-300 pt-30 relative ${
          sidebarOpen ? "ml-64" : "ml-24"
        }`}>
          {/* Bouton dark mode */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={toggleDarkMode}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* Top actions */}
          <div className="flex flex-col lg:flex-row gap-4 items-start justify-between mb-4">
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/dossiers-affectes"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "bg-indigo-100 text-indigo-800"
                } shadow-sm hover:shadow-md transition`}
              >
                <Info size={18} /> <span className="font-medium">Informations</span>
              </Link>
              <Link
                to={selectedId ? `/assignation/${selectedId}` : "#"}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  selectedId
                    ? darkMode
                      ? "bg-gray-700 border-gray-600 text-gray-100"
                      : "bg-white border-indigo-100 text-indigo-800"
                    : "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed"
                } shadow-sm hover:shadow-md transition`}
              >
                <Pencil size={18} /> <span className="font-medium">Modifier l'observation</span>
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

          {/* Tableau */}
          <div className={`rounded-xl shadow-lg overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="p-6 border-b" style={{ borderColor: darkMode ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)" }}>
              <h2 className={`text-2xl font-semibold ${darkMode ? "text-white" : "text-indigo-800"}`}>Listes des courriers suivis</h2>
              <p className="text-sm text-gray-500 mt-1">Sélectionnez un enregistrement puis appuyer sur <strong>"Modifier l'observation"</strong> pour modifier son observation.</p>
            </div>

            <div className="p-4 overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className={`${darkMode ? "bg-indigo-950 text-white" : "bg-indigo-100 text-indigo-900"}`}>
                    <th className="px-4 py-3 text-left text-sm">N° d'enregistrement</th>
                    <th className="px-4 py-3 text-left text-sm">Date arrivée</th>
                    <th className="px-4 py-3 text-left text-sm">Provenance</th>
                    <th className="px-4 py-3 text-left text-sm">N° Correspondance</th>
                    <th className="px-4 py-3 text-left text-sm">Date Correspondance</th>
                    <th className="px-4 py-3 text-left text-sm">Texte</th>
                    <th className="px-4 py-3 text-left text-sm">Bureaux</th>
                    <th className="px-4 py-3 text-left text-sm">Observation</th>
                    <th className="px-4 py-3 text-left text-sm w-36">État</th>
                    <th className="px-4 py-3 text-center text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="px-4 py-6 text-center text-gray-500">
                        Aucun enregistrement trouvé.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((item) => (
                      <tr
                        key={item.id}
                        onClick={() => handleRowClick(item.id)}
                        className={`border-b cursor-pointer ${
                          darkMode
                            ? selectedId === item.id
                              ? "bg-indigo-900"
                              : "border-gray-700 hover:bg-gray-700"
                            : selectedId === item.id
                            ? "bg-indigo-200"
                            : "hover:bg-indigo-50"
                        }`}
                      >
                        <td className="px-4 py-3 text-sm">{item.numero}</td>
                        <td className="px-4 py-3 text-sm">{item.dateArrivee}</td>
                        <td className="px-4 py-3 text-sm">{item.provenance}</td>
                        <td className="px-4 py-3 text-sm">{item.numeroCorrespondance}</td>
                        <td className="px-4 py-3 text-sm">{item.dateCorrespondance}</td>
                        <td className="px-4 py-3 text-sm">{item.texte}</td>
                        <td className="px-4 py-3 text-sm">{item.bureau}</td>
                        <td className="px-4 py-3 text-sm">{item.observation}</td>
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
                        <td className="px-4 py-3 text-center flex justify-center gap-2">
                          <button onClick={() => handleDelete(item)} className="px-2 py-1 mt-3 bg-red-600 text-white rounded hover:bg-red-700"><Trash2 size={20} /></button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* MODAL CONFIRMATION SUPPRESSION */} 
          {confirmDelete && selectedItem && ( 
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-30"> 
              <div className={`p-10 rounded-2xl shadow-xl text-center ${ 
                darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900" 
                }`} 
              > 
                <HelpCircle size={80} className="text-red-500 mx-auto mb-4 animate-bounce" /> 
                  <h2 className="text-2xl font-bold mb-2"> Supprimer cet enregistrement ? </h2> 
                  <p className="text-gray-500 mb-6"> Êtes-vous sûr de vouloir supprimer "{selectedItem.numero}" ? 
                    Cette action est irréversible. 
                  </p> 
                  <div className="flex justify-center gap-4"> 
                    <button onClick={confirmDeletion} className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition" > 
                      Oui 
                    </button> 
                    <button onClick={() => setConfirmDelete(false)} className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition" > 
                      Non 
                    </button> 
                  </div> 
              </div> 
            </div> 
          )}
        </main>
      </div>
    </div>
  );
};

export default DossiersSuivis;

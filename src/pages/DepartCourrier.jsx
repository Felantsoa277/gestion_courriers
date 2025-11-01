import React, { useState, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { jsPDF } from "jspdf";
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
  FileText,
  HelpCircle,
} from "lucide-react";
import logo from "../assets/mef.png";

const DepartCourrier = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedId, setSelectedId] = useState(null); // ID sélectionné

    const handleGeneratePDF = () => {
      const doc = new jsPDF();
      doc.setFontSize(18);
      doc.text("Fiche de contrôle - Assignation", 105, 20, { align: "center" });
      doc.setFontSize(14);
      doc.text(`Dossier N°: `, 20, 40);
      doc.text(`Destinataire: "-"}`, 20, 50);
      doc.text(`Autres destinataires: "-"}`, 20, 60);
      doc.save(`fiche_assignation_.pdf`);
    };

  const currentPage = "Départ du courrier";

  //Modal suppression
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // États pour les filtres
  const [filterProvenance, setFilterProvenance] = useState("");
  const [filterDateArrivee, setFilterDateArrivee] = useState("");
  const [filterNumeroCorr, setFilterNumeroCorr] = useState("");
  const [filterTexte, setFilterTexte] = useState("");

  const enregistrements = [
    {
      id: 1,
      numero: "ENR-2024-001",
      numeroCorrespondance: "CORR-2024-456",
      dateDepart: "08/10/2025",
      texte: "Demande de budget",
      destinataire: "Ministère Finance",
      dateCorrespondance: "05/10/2025",
      nombrePiecesJointes: 2,
      etat: "Non validé",
    },
    {
      id: 2,
      numero: "ENR-2024-002",
      numeroCorrespondance: "CORR-2024-457",
      dateDepart: "07/10/2025",
      texte: "Rapport annuel",
      destinataire: "Préfecture",
      dateCorrespondance: "06/10/2025",
      nombrePiecesJointes: 3,
      etat: "Validé",
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

  // Fonction pour sélectionner/désélectionner
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
                <Link to="/information">
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                >
                  <Mail size={18} /> {sidebarOpen && "Arriver du courrier"}
                </li>
                </Link>

                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
                    currentPage === "Départ du courrier"
                      ? darkMode
                        ? "bg-indigo-900 text-indigo-200"
                        : "bg-indigo-100 text-indigo-800"
                      : darkMode
                      ? "hover:bg-gray-700 text-gray-100"
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
                to="#"
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
                to="/enregistrementdepart"
                className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-gray-100"
                    : "bg-white border-indigo-100 text-indigo-800"
                } shadow-sm hover:shadow-md transition`}
              >
                <Save size={18} />
                <span className="font-medium">Enregistrer un départ</span>
              </Link>

              {/* Bouton PDF */}
              <div className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  selectedId
                    ? darkMode
                      ? "bg-gray-600 border-gray-600 text-gray-100"
                      : "bg-white border-indigo-100 text-indigo-800"
                    : "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed"
                } shadow-sm hover:shadow-md transition`}>
                <button
                  onClick={handleGeneratePDF}
                  className="flex items-center gap-2 py-2"
                >
                  <FileText size={18} /> Générer BE
                </button>
              </div>
              <div className={`flex items-center gap-3 px-4 py-2 rounded-xl border ${
                  selectedId
                    ? darkMode
                      ? "bg-gray-600 border-gray-600 text-gray-100"
                      : "bg-white border-indigo-100 text-indigo-800"
                    : "bg-gray-300 border-gray-300 text-gray-500 cursor-not-allowed"
                } shadow-sm hover:shadow-md transition`}>
                <button
                  onClick={handleGeneratePDF}
                  className="flex items-center gap-2 py-2"
                >
                  <FileText size={18} /> Générer ST
                </button>
              </div>
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
                Listes des enregistrements des départs de courriers
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Visualisez et gérez les départs de courriers enregistrés. ({filtered.length}) <br />
                Sélectionnez un enregistrement puis appuyez sur le bouton <strong>"Générer BE"</strong> pour générer le Bordereau d'Envoi, 
                sur <strong>"Générer ST"</strong> pour générer le Soit Transmis.

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
                    <th className="px-4 py-3 text-center text-sm">N° de la correspondance</th>
                    <th className="px-4 py-3 text-center text-sm">Date de départ</th>
                    <th className="px-4 py-3 text-center text-sm">Texte</th>
                    <th className="px-4 py-3 text-center text-sm">Destinataire</th>
                    <th className="px-4 py-3 text-center text-sm">Date de la correspondance</th>
                    <th className="px-4 py-3 text-center text-sm">Nombre pièces jointes</th>
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
                        onClick={() => handleRowClick(item.id)}
                        className={`border cursor-pointer ${
                          darkMode ? "border-gray-700 hover:bg-gray-700" : "hover:bg-indigo-50"
                        } ${selectedId === item.id ? (darkMode ? "bg-indigo-900" : "bg-indigo-200") : ""}`}
                      >
                        <td className="px-4 py-3 text-center text-sm">{item.numero}</td>
                        <td className="px-4 py-3 text-center text-sm">{item.numeroCorrespondance}</td>
                        <td className="px-4 py-3 text-center text-sm">{item.dateDepart}</td>
                        <td className="px-4 py-3 text-center text-sm">{item.texte}</td>
                        <td className="px-4 py-3 text-center text-sm">
                          {item.destinataire}
                        </td>
                        <td className="px-4 py-3 text-center text-sm">{item.dateCorrespondance}</td>
                        <td className="px-4 py-3 text-center text-sm">{item.nombrePiecesJointes}</td>
                        <td className="px-4 py-3 text-center text-sm">
                          <span
                            className={`px-2 py-1 rounded-full text-sm ${
                              item.etat === "Validé"
                                ? "bg-green-200 text-green-800"
                                : "bg-yellow-200 text-yellow-800"
                            }`}
                          >
                            {item.etat}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center flex justify-center gap-2">
                          <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"><Edit size={16} /></button>
                          <button onClick={() => handleDelete(item)} className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"><Trash2 size={16} /></button>
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

export default DepartCourrier;

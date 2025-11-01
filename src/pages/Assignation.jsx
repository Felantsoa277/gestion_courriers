import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { SidebarContext } from "./SideBarContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Mail,
  Folder,
  Grid,
  UserCircle,
  Sun,
  Moon,
  FileText,
  FolderCog,
  CheckCircle2,
  Home,
  HelpCircle,
} from "lucide-react";
import { jsPDF } from "jspdf";
import logo from "../assets/mef.png";

const Assignation = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const [selectedDest, setSelectedDest] = useState("");
  const [dossierNumero, setDossierNumero] = useState("");
  const [autresDest, setAutresDest] = useState("");
  const [success, setSuccess] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false); // afficher modal annuler

  const navigate = useNavigate();

  useEffect(() => {
    setDossierNumero("2025-001"); // simulation récupération BD
  }, []);

  const destinataires = [
    "Secrétaire Porte 11",
    "Chef SRB",
    "Cellule d'App et Coord",
    "PRMP",
    "Compta et Logistique",
    "DBRFM",
    "BAAF",
    "Cellule PERS",
    "Div Patrimoine de l'Etat",
    "Bureau MTA",
    "Bureau LBA",
    "Garage Administratif",
    "Div Ex° Budgétaire et RFM",
    "Bureau Ex° Budgétaire",
    "Bureau RFM",
    "Div Finance Locale et EPN",
    "Bureau Finance Locale",
    "Bureau EPN",
    "CIR",
    "Bureau F & A",
    "Bureau Maintenance",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Dossier N°:",
      dossierNumero,
      "Assigné à:",
      selectedDest,
      "Autres:",
      autresDest
    );

    setSuccess(true);
    setTimeout(() => {
      navigate("/dossiers-affectes");
    }, 3500);
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Fiche de contrôle - Assignation", 105, 20, { align: "center" });
    doc.setFontSize(14);
    doc.text(`Dossier N°: ${dossierNumero}`, 20, 40);
    doc.text(`Destinataire: ${selectedDest || "-"}`, 20, 50);
    doc.text(`Autres destinataires: ${autresDest || "-"}`, 20, 60);
    doc.save(`fiche_assignation_${dossierNumero}.pdf`);
  };

  const currentPage = "Dossiers affectés";

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* HEADER FIXE */}
      <header
        className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 py-4 shadow-md transition-colors duration-300 ${
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
      <div className="flex flex-1 pt-24">
        {/* SIDEBAR */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-24"
          } flex flex-col transition-all duration-300 border-r pt-4 ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-gray-200"
              : "bg-white border-gray-200 text-gray-800"
          } fixed h-full`}
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
            {/* Courrier */}
            <ul className="space-y-2">
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition duration-200 ease-in-out ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-100"
                      : "hover:bg-indigo-50 text-indigo-800"
                  }`}
                >
                  <Link
                    to="/accueil"
                    className="flex items-center gap-2 w-full"
                  >
                    <Home size={18} />{" "}
                    {sidebarOpen && "Accueil"}
                  </Link>
                </li>
              <Link to="/information">
                <li
                  className={`p-2 rounded-md flex items-center gap-3 cursor-pointer font-medium transition duration-200 ease-in-out ${
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
                className={`p-2 rounded-md flex items-center gap-3 cursor-pointer font-medium transition duration-200 ease-in-out ${
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
                  className={`p-2 rounded-md flex items-center gap-3 cursor-pointer font-medium transition duration-200 ease-in-out ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-100"
                      : "hover:bg-indigo-50 text-indigo-800"
                  }`}
                >
                  <Grid size={18} /> {sidebarOpen && "Dashboard"}
                </li>
              </Link>

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
            </ul>
          </nav>
        </aside>

        {/* MAIN SCROLLABLE */}
        <main
          className="flex-1 relative p-6 overflow-hidden"
          style={{ marginLeft: sidebarOpen ? "16rem" : "6rem" }}
        >
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

          {/* Bouton PDF */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleGeneratePDF}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <FileText size={18} /> Générer la fiche de contrôle
            </button>
          </div>

          {/* FORMULAIRE SCROLLABLE */}
          <div
            className={`rounded-xl shadow-lg overflow-hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div
              className="p-6 border-b text-center"
              style={{
                borderColor: darkMode
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(15,23,42,0.03)",
              }}
            >
              <h2
                className={`text-3xl font-semibold ${
                  darkMode ? "text-white" : "text-indigo-800"
                }`}
              >
                Assignation
              </h2>
              <p
                className={`text-xl mt-2 underline ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Dossier N°: {dossierNumero}
              </p>
            </div>

            <div className="p-6 max-h-[70vh] overflow-auto">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                {/* Destinataires */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {destinataires.map((dest) => (
                    <label
                      key={dest}
                      className={`flex items-center gap-2 p-2 border rounded-lg cursor-pointer ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-gray-100"
                          : "bg-gray-50 border-gray-300 text-gray-900"
                      } hover:shadow-md transition`}
                    >
                      <input
                        type="radio"
                        name="destinataire"
                        value={dest}
                        checked={selectedDest === dest}
                        onChange={() => setSelectedDest(dest)}
                        className="accent-indigo-600"
                      />
                      <span>{dest}</span>
                    </label>
                  ))}
                </div>

                {/* Autres destinataires */}
                <div className="flex flex-col items-left ml-20 mt-6 gap-3">
                  <label
                    className={`font-medium text-lg ml-1 ${
                      darkMode ? "text-gray-200" : "text-gray-900"
                    }`}
                  >
                    Autres destinataires
                  </label>
                  <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto items-center">
                    <input
                      type="text"
                      placeholder="Saisir autre destinataire"
                      value={autresDest}
                      onChange={(e) => setAutresDest(e.target.value)}
                      className={`px-3 py-2 rounded-lg border w-full md:w-84 ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-gray-100"
                          : "bg-gray-50 border-gray-300 text-gray-900"
                      } outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                  </div>
                </div>

                {/* Boutons */}
                <div className="flex justify-center flex-col items-center mt-6 gap-3">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 w-100 rounded-lg hover:bg-indigo-700 transition font-medium"
                  >
                    Assigner
                  </button>
                    <button type="button" onClick={() => setConfirmCancel(true)} className="bg-gray-200 text-black w-100 px-6 py-2 rounded-lg hover:bg-gray-300 font-medium">
                      Annuler
                    </button>
                </div>
              </form>
            </div>
          </div>

          {/* Message succès */}
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
                  Assigné avec succès !
                </h2>
                <p className="text-gray-500 mb-6">
                  Vous serez redirigé vers la page d’informations des dossiers à affecter.
                </p>
                <Link
                  to="/dossiers-affectes"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Y aller maintenant
                </Link>
              </div>
            </div>
          )}

          {/* MODAL CONFIRMATION ANNULER */} 
          {confirmCancel && ( 
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-30"> 
              <div className={`p-10 rounded-2xl shadow-xl text-center ${ 
                darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900" }`} >
                  <HelpCircle size={80} className="text-yellow-500 mx-auto mb-4 animate-bounce" /> 
                    <h2 className="text-2xl font-bold mb-2"> Voulez-vous vraiment annuler ? </h2> 
                    <p className="text-gray-500 mb-6"> Toutes les informations non enregistrées seront perdues. </p> 
                    <div className="flex justify-center gap-4"> 
                      <button onClick={() => navigate("/dossiers-affectes")} 
                      className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition" > 
                        Oui 
                      </button> 
                      <button onClick={() => setConfirmCancel(false)} 
                      className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-gray-300 transition" > 
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

export default Assignation;

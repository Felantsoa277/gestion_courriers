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
  FolderCog,
  UserCircle,
  Grid,
  FileText,
  Home
} from "lucide-react";
import logo from "../assets/mef.png";

const DossiersDivisions = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const currentPage = "Dossier des divisions";

  const divisions = [
    { name: "Secrétaire Porte 11", count: 8 },
    { name: "Chef SRB", count: 4 },
    { name: "Cellule d'App et Coord", count: 7 },
    { name: "PRMP", count: 3 },
    { name: "Compta et Logistique", count: 9 },
    { name: "DBRFM", count: 5 },
    { name: "BAAF", count: 2 },
    { name: "Cellule PERS", count: 4 },
    { name: "Div Patrimoine de l'Etat", count: 6 },
    { name: "Bureau MTA", count: 3 },
    { name: "Bureau LBA", count: 2 },
    { name: "Garage Administratif", count: 1 },
    { name: "Div Ex° Budgétaire et RFM", count: 8 },
    { name: "Bureau Ex° Budgétaire", count: 5 },
    { name: "Bureau RFM", count: 3 },
    { name: "Div Finance Locale et EPN", count: 6 },
    { name: "Bureau Finance Locale", count: 4 },
    { name: "Bureau EPN", count: 2 },
    { name: "CIR", count: 3 },
    { name: "Bureau F & A", count: 5 },
    { name: "Bureau Maintenance", count: 2 },
  ];

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
          } fixed h-full flex flex-col transition-all duration-300 pt-30 border-r ${
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
            {sidebarOpen && <h2 className="font-semibold text-lg">Menu</h2>}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`${
                darkMode
                  ? "text-indigo-300 hover:text-indigo-400"
                  : "text-indigo-700 hover:text-indigo-900"
              }`}
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
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Home size={18} />{" "}
                    {sidebarOpen && "Accueil"}
                  </li>
                </Link>
                <Link to="/information">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50 text-indigo-800"
                    }`}
                  >
                    <Mail size={18} /> {sidebarOpen && "Arriver du courrier"}
                  </li>
                </Link>
                <Link to="#">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
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
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium ${
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
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers affectés"}
                  </li>
                </Link>
                <Link to="/dossiers-suivis">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50"
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
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 ${
                      currentPage === "Dossier des divisions"
                        ? darkMode
                          ? "bg-indigo-900"
                          : "bg-indigo-100"
                        : darkMode
                        ? "hover:bg-gray-700"
                        : "hover:bg-indigo-50"
                    }`}
                  >
                    <Folder size={18} />{" "}
                    {sidebarOpen && "Dossiers des divisions"}
                  </li>
                </Link>
                <Link to="/dossiers-sans-affectataires">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50"
                    }`}
                  >
                    <Folder size={18} />{" "}
                    {sidebarOpen && "Dossiers sans affectataires"}
                  </li>
                </Link>
                <Link to="dossiers-classes">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-100"
                        : "hover:bg-indigo-50"
                    }`}
                  >
                    <Folder size={18} />{" "}
                    {sidebarOpen && "Dossiers archivés/classés"}
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 ml-70 mr-2 overflow-auto pt-30 relative">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-700">
            Dossiers des Divisions
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {divisions.map((division, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl shadow-md flex items-center justify-between transition transform hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
                    : "bg-white text-gray-900 hover:bg-indigo-50"
                }`}
              >
                <div>
                  <h3 className="font-semibold text-lg">{division.name}</h3>
                  <p className="text-sm text-gray-500">
                    {division.count} dossier{division.count > 1 ? "s" : ""}
                  </p>
                </div>
                <FileText
                  size={34}
                  className={`${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={toggleDarkMode}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
              aria-label="toggle dark mode"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DossiersDivisions;

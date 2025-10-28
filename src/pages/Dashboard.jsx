import React, { useState } from "react";
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
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import logo from "../assets/mef.png";

const DashboardPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const currentPage = "Dashboard";

  // --- Données fictives ---
  const stats = [
    { id: 1, label: "courriers reçus", value: 220, variation: "+4.2%", color: "#3B82F6" },
    { id: 2, label: "courriers envoyés", value: 192, variation: "-1.2%", color: "#EC4899" },
    { id: 3, label: "total courriers", value: 310, color: "#A78BFA" },
    { id: 4, label: "courriers archivés", value: 150, color: "#A78BFA" },
  ];

  const pieData = [
    { name: "Courriers traités", value: 40, color: "#3B82F6" },
    { name: "Courriers en cours", value: 25, color: "#C084FC" },
    { name: "Courriers rejetés", value: 10, color: "#F87171" },
    { name: "Courriers archivés", value: 25, color: "#67E8F9" },
  ];

  const lineData = [
    { month: "Jan", Sale: 400, Profit: 300 },
    { month: "Feb", Sale: 300, Profit: 200 },
    { month: "Mar", Sale: 500, Profit: 400 },
    { month: "Apr", Sale: 800, Profit: 1000 },
    { month: "May", Sale: 600, Profit: 700 },
    { month: "Jun", Sale: 350, Profit: 400 },
    { month: "Jul", Sale: 400, Profit: 450 },
  ];

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
          className={`${
            sidebarOpen ? "w-64" : "w-24"
          } flex flex-col transition-all duration-300 ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 dark:border-gray-700">
            {sidebarOpen && <h2 className="font-semibold text-lg">Menu</h2>}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              <Menu size={22} />
            </button>
          </div>

          <nav className="flex-1 px-3 py-4 text-sm space-y-4 overflow-y-auto">
            {/* 🔹 Section principale */}
            <div>
              <ul className="space-y-2">
                <Link to="/information">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Mail size={18} /> {sidebarOpen && "Arriver du courrier"}
                  </li>
                </Link>
                <Link to="/assignation">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <FolderCog size={18} />{" "}
                    {sidebarOpen && "Assigner un courrier"}
                  </li>
                </Link>
                <li
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition ${
                    darkMode
                      ? "hover:bg-gray-700 text-gray-200"
                      : "hover:bg-indigo-50 text-gray-800"
                  }`}
                >
                  <Mail size={18} /> {sidebarOpen && "Départ du courrier"}
                </li>
                <Link to="/dashboard">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-3 font-medium transition ${
                      currentPage === "Dashboard"
                        ? darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-indigo-100 text-gray-800"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Grid size={18} /> {sidebarOpen && "Dashboard"}
                  </li>
                </Link>
              </ul>
            </div>

            {/* 🔹 Mes dossiers */}
            <div>
              <p className="font-semibold mt-3 text-indigo-500">Mes dossiers</p>
              <ul className="space-y-2 mt-1">
                <Link to="/dossiers-affectes">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers affectés"}
                  </li>
                </Link>
                <Link to="/dossiers-suivis">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers suivis"}
                  </li>
                </Link>
              </ul>
            </div>

            {/* 🔹 Dossiers des divisions */}
            <div>
              <p className="font-semibold mt-3 text-indigo-500">
                Dossiers des divisions
              </p>
              <ul className="space-y-2 mt-1">
                <Link to="/dossiers-divisions">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers des divisions"}
                  </li>
                </Link>
                <Link to="/dossiers-sans-affectataires">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
                    }`}
                  >
                    <Folder size={18} /> {sidebarOpen && "Dossiers sans affectataires"}
                  </li>
                </Link>
                <Link to="/dossiers-classes">
                  <li
                    className={`p-2 rounded-md cursor-pointer flex items-center gap-2 font-medium transition ${
                      darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-indigo-50 text-gray-800"
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
        <main className="flex-1 p-6 relative">
          {/* Bouton clair/sombre */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          {/* TITRE */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">STATISTIQUES</h2>
            <select
              className={`px-4 py-2 rounded-lg border text-sm ${
                darkMode
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              }`}
            >
              <option>Dernier mois</option>
              <option>3 derniers mois</option>
              <option>6 derniers mois</option>
            </select>
          </div>

          {/* CARTES + GRAPHIQUES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div
                key={s.id}
                className={`p-5 rounded-xl shadow-md transition ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white"
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <BarChart2 size={30} color={s.color} />
                  <h3 className="text-3xl font-bold mt-2">{s.value}</h3>
                  <p className="text-sm text-gray-500">{s.label}</p>
                  {s.variation && (
                    <p
                      className={`text-xs mt-1 ${
                        s.variation.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {s.variation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* GRAPHIQUES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pie Chart */}
            <div
              className={`p-6 rounded-xl shadow-md transition ${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">États des courriers</h3>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={80}
                    label
                    cx="50%"
                    cy="50%"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <div className="flex flex-wrap gap-3 justify-center mt-4">
                {pieData.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Line Chart */}
            <div
              className={`p-6 rounded-xl shadow-md transition ${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">6 derniers mois</h3>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={lineData}>
                  <defs>
                    <linearGradient id="colorSale" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F87171" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F87171" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Sale"
                    stroke="#3B82F6"
                    fillOpacity={1}
                    fill="url(#colorSale)"
                  />
                  <Area
                    type="monotone"
                    dataKey="Profit"
                    stroke="#F87171"
                    fillOpacity={1}
                    fill="url(#colorProfit)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;

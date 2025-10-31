import React, { useEffect, useState, useCallback } from "react";
import api from "../api";
import { Link, useNavigate, useParams } from "react-router-dom";
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
} from "lucide-react";
import logo from "../assets/mef.png";

const ModificationEnregistrement = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errors , setErrors] = useState();
  const navigate = useNavigate();
  const [isSubmiting , setIsSubmting] = useState(false);
  // Route uses :id in App.jsx — map it to NumeroArrive for compatibility with backend
  const { id: NumeroArrive } = useParams();

  const [modifier, setModifier] = useState({
    DateArrive: "",
    Provenance: "",
    numero_correspondance_arrive: "",
    DateCorrespondanceArrive: "",
    TexteCorespondanceArrive: "",
    piece_jointe_arrive: "",
  });

  const currentPage = "Arriver du courrier";

  // 🔹 Gestion de la modification des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setModifier((prev) => ({ ...prev, [name]: value }));
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmting(true);
    try {
      console.log(modifier);
      // Send update to the backend (adjust endpoint/method if your API expects PUT)
      const response = await api.post(`/modification_arrive/${NumeroArrive}`, modifier);
      console.log(response);
      setSuccess(true);
      setTimeout(() => {
        navigate("/information");
      }, 2500);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        console.log(error);
        setErrors(error.response.data.message);
      } else {
        setErrors('Il y a quelque chose qui cloche');
      }
    } finally {
      setIsSubmting(false);
    }
  };


  const getArriveById = useCallback(async () => {
    try {
      const response = await api.get(`/modifier_arrive/${NumeroArrive}`);
      const data = response.data;
      // Robust formatter to produce yyyy-MM-dd for <input type="date">
      const fmt = (v) => {
        if (!v && v !== 0) return "";
        // If already in YYYY-MM-DD form
        if (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v)) return v;
        // Handle ISO strings with time and optional microseconds/timezone like 2025-10-26T00:00:00.000000Z
        if (typeof v === 'string') {
          const isoMatch = v.match(/^(\d{4}-\d{2}-\d{2})T/);
          if (isoMatch) return isoMatch[1];
          // Try Date parse fallback
          const d = new Date(v);
          if (!isNaN(d)) return d.toISOString().slice(0, 10);
          return '';
        }
        // If it's a Date object
        if (v instanceof Date) {
          if (!isNaN(v)) return v.toISOString().slice(0, 10);
          return '';
        }
        // As last resort, try to coerce to date
        try {
          const d = new Date(String(v));
          if (!isNaN(d)) return d.toISOString().slice(0, 10);
        } catch {
          // noop
        }
        return '';
      };

      // Helpful debug info when developing
      console.debug('modifier GET response data:', data);

      setModifier({
        DateArrive: fmt(data.DateArrive) || "",
        Provenance: data.Provenance || "",
        numero_correspondance_arrive: data.numero_correspondance_arrive || "",
        DateCorrespondanceArrive: fmt(data.DateCorrespondanceArrive) || "",
        TexteCorespondanceArrive: data.TexteCorespondanceArrive || "",
        piece_jointe_arrive: data.piece_jointe_arrive || "",
      });
    } catch (error) {
      console.error('Erreur getArriveById:', error);
      setErrors('Impossible de récupérer les données du courrier.');
    }
  }, [NumeroArrive]);

  // Trigger fetching after getArriveById is defined
  useEffect(() => {
    if (NumeroArrive) {
      getArriveById();
    }
  }, [getArriveById, NumeroArrive]);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 relative ${
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
          } bg-white border-r border-gray-200 text-gray-800 flex flex-col transition-all duration-300 z-10`}
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
                  className={`p-2 rounded-md cursor-pointer flex items-center gap-3 text-indigo-800 font-medium ${
                    currentPage === "Arriver du courrier"
                      ? "bg-indigo-100"
                      : "hover:bg-indigo-50"
                  }`}
                >
                  <Mail size={18} /> {sidebarOpen && "Arriver du courrier"}
                </li>
                <Link to="/assignation">
                  <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-3 text-indigo-800 font-medium">
                    <FolderCog size={18} />{" "}
                    {sidebarOpen && "Assigner un courrier"}
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
                <Link to="/observation">
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
                <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-2">
                  <Folder size={18} /> {sidebarOpen && "Dossiers des divisions"}
                </li>
                <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-2">
                  <Folder size={18} />{" "}
                  {sidebarOpen && "Dossiers sans affectataires"}
                </li>
                <li className="hover:bg-indigo-50 p-2 rounded-md cursor-pointer flex items-center gap-2">
                  <Folder size={18} />{" "}
                  {sidebarOpen && "Dossiers archivés/classés"}
                </li>
              </ul>
            </div>
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

          {/* FORMULAIRE */}
          {errors &&
            <div className="alert alert-danger">{errors}</div>}
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
                Modifier un courrier
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
                  name="DateArrive"
                  value={modifier.DateArrive}
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
                  name="Provenance"
                  value={modifier.Provenance}
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
                  name="numero_correspondance_arrive"
                  type="number"
                  value={modifier.numero_correspondance_arrive}
                  onChange={handleChange}
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
                  name="DateCorrespondanceArrive"
                  value={modifier.DateCorrespondanceArrive}
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
                  name="TexteCorespondanceArrive"
                  value={modifier.TexteCorespondanceArrive}
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
                  Nombre de pièces jointes
                </label>
                <input
                  type="number"
                  name="piece_jointe_arrive"
                  value={modifier.piece_jointe_arrive}
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
                {isSubmiting ?
                <button
                  type="button"
                  className="bg-indigo-600 text-white w-100 px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
                >
                  Modification...
                </button> 
                :
                <button
                  type="submit"
                  className="bg-indigo-600 text-white w-100 px-6 py-2 rounded-lg hover:bg-indigo-700 transition font-medium"
                >
                  Mettre à jour
                </button>}
                
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

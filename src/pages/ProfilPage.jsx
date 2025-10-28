import React from "react";
import { ArrowLeft, Edit, LogOut, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Pour la navigation

const ProfilPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* 🎨 Courbe blanche vers l’intérieur */}
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Fond blanc */}
          <rect width="1440" height="320" fill="#ffffffff" />
          {/* Courbe indigo */}
          <path
            d="M500,0 Q1000,130 950,420 L1440,320 L1440,0 Z"
            fill="#4338ca"
          />
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col min-h-screen text-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-2">
          {/* Bouton retour */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center m-8 text-indigo-400 font-semibold hover:text-indigo-700 transition"
          >
            <ArrowLeft size={46} className="mr-2 border rounded-3xl p-1" />
            <span className="hidden sm:inline text-lg">Retour</span>
          </button>

          <h1 className="text-2xl text-white md:text-3xl font-semibold tracking-wide text-center ml-100 flex-1">
            Système Informatisé de Gestion de Courrier
          </h1>
        </div>

        {/* Contenu central */}
        <div className="flex flex-col items-center justify-center flex-grow px-6">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] md:w-[800px] md:h-[450px] p-8 flex flex-col items-center justify-center md:flex-row gap-8">
            {/* Colonne gauche */}
            <div className="flex flex-col items-center md:w-1/3 border-r border-indigo-400 pr-6">
              <div className="bg-indigo-700 rounded-full p-4 mb-3">
                <UserCircle size={70} className="text-white" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                HARINANTOANDRO Fandresena
              </h2>

              <div className="flex flex-col gap-7 mt-6 w-full">
                <button className="flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 font-medium py-2 rounded-lg hover:bg-indigo-100 transition">
                  <Edit size={18} />
                  Éditer
                </button>
                <button className="flex items-center justify-center gap-2 bg-indigo-700 text-white font-medium py-2 rounded-lg hover:bg-indigo-800 transition">
                  <LogOut size={18} />
                  Déconnexion
                </button>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="flex-1 text-sm text-gray-700 space-y-6">
              <div>
                <h3 className="text-indigo-700 font-semibold text-2xl border-b border-indigo-400 pb-1 mb-3">
                  Infos
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <p>
                    <span className="font-semibold text-lg">Matricule :</span>
                    <br />
                    4477M489
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Email :</span>
                    <br />
                    <span className="text-gray-500">
                      harfandresena@gmail.com
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-indigo-700 font-semibold text-2xl border-b border-indigo-400 pb-1 mb-3">
                  Autres
                </h3>
                <div className="grid grid-cols-2 gap-y-2">
                  <p>
                    <span className="font-semibold text-lg">Nom :</span>
                    <br />
                    HARINANTOANDRO
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Département :</span>
                    <br />
                    Service Régional du Budget
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Prénom(s) :</span>
                    <br />
                    Fandresena
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Fonction :</span>
                    <br />
                    Secrétaire
                  </p>
                  <p>
                    <span className="font-semibold text-lg">Tél :</span>
                    <br />
                    +261 34 XX XXX XX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facteur (facultatif) */}
        {/* <div className="absolute bottom-30 right-10 w-[300px] opacity-100">
          <img src={facteur} alt="Facteur" className="w-full" />
        </div> */}
      </div>
    </div>
  );
};

export default ProfilPage;

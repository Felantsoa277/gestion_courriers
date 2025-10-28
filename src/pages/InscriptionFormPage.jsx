import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { Mail, Lock, ArrowLeft, EyeClosed, Eye } from "lucide-react";
import logo from "../assets/mef.png";
import { motion, AnimatePresence } from "framer-motion";

const InscriptionFormPage = () => {
  const [showConfirm, setShowConfirm] = useState(false); // état pour afficher le champ de confirmation
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmField, setShowConfirmField] = useState(false);

  // Quand on tape un mot de passe, le champ "confirmer" s'affiche
  const handlePasswordChange = (e) => {
    if (e.target.value.length > 0) {
      setShowConfirmField(true);
    } else {
      setShowConfirmField(false);
    }
  };

  const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/accueil");
    }

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Courbe blanche vers l’intérieur */}
      <div className="absolute inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          {/* Le fond blanc */}
          <rect width="1440" height="320" fill="#ffffffff" />
          {/* Courbe bleue */}
          <path
            d="M500,0 Q1000,130 950,420 L1440,320 L1440,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col min-h-screen text-gray-900">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-4 text-white">
          <button className="flex items-center hover:text-indigo-200 transition">
            <ArrowLeft size={26} className="mr-2" />
          </button>
          <h1
          className="relative text-2xl font-semibold tracking-wide top-125 right-10 text-transparent bg-clip-text"
          style={{
            backgroundImage:
            "linear-gradient(90deg, rgb(255, 215, 0), rgb(255, 200, 50), rgb(255, 170, 0))",
          }}
          >
            Système d'Information Integré de Gestion des Courriers
          </h1>
        </div>

        {/* Contenu en 2 colonnes */}
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Left: Form */}
          <div className="relative w-full md:w-2/5 -mt-13 flex items-center justify-center">
            <div className="bg-white p-12 pt-5 pb-5 rounded-3xl shadow-2xl w-[500px] h-[100%]">
              <h2 className="text-gray-700 text-3xl font-semibold mb-3 text-center">
                Inscription
              </h2>
              <form className="flex flex-col gap-4">
                {/* Nom */}
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-lg font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="border border-gray-300 rounded-xl p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Prénom */}
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-lg font-medium">
                    Prénom
                  </label>
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    className="border border-gray-300 rounded-xl p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Adresse mail */}
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-lg font-medium">
                    Adresse mail
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="border border-gray-300 rounded-xl p-1 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                {/* IM */}
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-lg font-medium">
                    IM
                  </label>
                  <input
                    type="text"
                    placeholder="Identifiant matricule"
                    className="border border-gray-300 rounded-xl p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Fonction (menu déroulant) */}
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-lg font-medium">
                    Fonction
                  </label>
                  <select
                    className="border border-gray-300 rounded-xl p-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Sélectionnez votre fonction</option>
                    <option value="chef">Chef de Service</option>
                    <option value="secretaire">Secrétaire</option>
                  </select>
                </div>

                {/* Mot de passe */}
                <div className="flex flex-col">
                  <label className="text-gray-600 mb-1 text-lg font-medium">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder= "********"
                      onChange={handlePasswordChange}
                      className="border border-gray-300 rounded-xl p-1 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    <button type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirmer mot de passe (affiché après saisie du mot de passe avec animation fade-in) */}
                <AnimatePresence>
                  {showConfirmField && (
                  <motion.div
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: 15}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    className="flex flex-col"
                  >
                    <div className="flex flex-col transition-opacity duration-500 ease-in-out">
                    <label className="text-gray-600 mb-2 text-lg font-medium">
                      Confirmer le mot de passe
                    </label>
                    <div className="relative">
                      <Lock
                        className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type={showConfirm ? "text" : "password"}
                        placeholder= "********"
                        className="border border-gray-300 rounded-xl p-2 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <button 
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        {showConfirm ? <Eye size={18} /> : <EyeClosed size={18} />}
                      </button>
                    </div>
                  </div>
                  </motion.div>
                  )}
                </AnimatePresence>

                {/* Bouton */}
                <button type="submit" onClick={handleSubmit} className="bg-green-700 text-white py-3 rounded-xl text-lg hover:bg-green-800 transition-colors mt-3 font-semibold">
                  S’inscrire
                </button>
              </form>

              <p className="text-base text-gray-600 mt-6 text-center">
                Vous avez déjà un compte ?{" "}
                <Link to="/connexion-form" className="text-indigo-600 font-medium hover:underline">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>

          {/* Illustration logo */}
          <div className="absolute bottom-65 right-58 w-[320px] opacity-100">
            <img src={logo} alt="logo de la Mef" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionFormPage;

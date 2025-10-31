import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { Mail, Lock, User, FolderCog, ArrowLeft, EyeClosed, Eye } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/mef.png";

const Connexion = () => {
  const [showPassword, setShowPassword] = useState(false);
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
            fill="#ffffffff"
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

          {/* Effet de glissement pour le titre */}
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative text-2xl font-semibold tracking-wide top-125 right-10 text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(255, 215, 0), rgb(255, 200, 50), rgb(255, 170, 0))",
            }}
          >
            Système d'Information Integré de Gestion des Courriers
          </motion.h1>
        </div>

      {/* Left: Form */}
      <div className=" relative w-full md:w-1/2 flex items-center justify-center top-30">
        <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] w-[360px]">
          <h2 className="text-gray-700 text-xl font-semibold mb-8 text-center">
            Se connecter
          </h2>

          <form className="flex flex-col gap-4">

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Adresse mail</label>
              <div className="relative">
                <Mail className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="border border-gray-300 rounded-xl p-2 pl-8 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  className="border border-gray-300 rounded-xl p-2 pl-8 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" onClick={handleSubmit} className="bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition-colors mt-2">
              Se connecter
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Vous n'avez pas de compte?{" "}
            <Link to="/inscription-form" className="text-indigo-600 hover:underline">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>

      {/* Illustration logo avec effet de glissement */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-65 right-58 w-[320px] opacity-100"
      >
        <img src={logo} alt="logo de la Mef" className="w-full" />
      </motion.div>
    </div>
    </div>
  );
};

export default Connexion;

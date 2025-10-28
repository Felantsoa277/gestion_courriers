import React from "react";
import { Mail, Lock, User, FolderCog } from "lucide-react";

const Modification = () => {
  return (
    <div className="w-full h-screen flex bg-gradient-to-br from-blue-800 to-blue-600">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-[360px]">
          <h2 className="text-gray-700 text-xl font-semibold mb-4 text-center">
            Informations
          </h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">IM</label>
              <input
                type="text"
                placeholder="44777M489"
                className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Adresse mail</label>
              <div className="relative">
                <Mail className="absolute top-1/2 left-2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="tapezamen@gmail.com"
                  className="border border-gray-300 rounded-xl p-2 pl-8 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Nom</label>
              <input
                type="text"
                placeholder="RAKOTO"
                className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Prénom</label>
              <input
                type="text"
                placeholder="Nirina Odette"
                className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Département</label>
              <input
                type="text"
                placeholder="CIR"
                className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Fonction</label>
              <input
                type="text"
                placeholder="Chef de bureau"
                className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button className="bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition-colors mt-2">
              Enregistrer
            </button>
          </form>

          
        </div>
      </div>

      {/* Right: Icon / Decoration */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <FolderCog size={200} className="text-white opacity-30" />
      </div>
    </div>
  );
};

export default Modification;

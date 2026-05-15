"use client";

import { useState } from "react";

export default function Home() {
  const [placa, setPlaca] = useState("");
  const [resultado, setResultado] = useState<any>(null);

  const buscar = () => {
    setResultado({
      papeletas: 2,
      soat: "Vigente",
      sunarp: "Sin gravamen",
    });
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🚗 Sistema Vehicular A&G
        </h1>

        <p className="text-gray-500 mt-1">
          Verificación de vehículos y oportunidades de subasta
        </p>

        {/* BUSCADOR PRO */}
        <div className="mt-6 relative flex items-center gap-2">

          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>

            <input
              type="text"
              placeholder="Ingresa placa (ej: ABC-123)"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              className="w-full border rounded-lg pl-10 pr-3 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={buscar}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition"
          >
            Buscar
          </button>

        </div>

        {/* RESULTADOS */}
        {resultado && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-sm text-gray-500">Papeletas</p>
              <p className="text-xl font-bold text-red-600">
                {resultado.papeletas}
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-gray-500">SOAT</p>
              <p className="text-xl font-bold text-green-600">
                {resultado.soat}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-gray-500">SUNARP</p>
              <p className="text-xl font-bold text-blue-600">
                {resultado.sunarp}
              </p>
            </div>

          </div>
        )}

      </div>

    </main>
  );
}
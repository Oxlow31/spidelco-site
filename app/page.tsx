"use client";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
        <img src="/logo.png" alt="Spidelco logo" className="h-10" />
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl">Prendre rendez-vous</button>
      </header>

      <section
        className="text-center py-20 px-4 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/ev-background.jpg')" }}
      >
        <div className="bg-black/60 p-8 rounded-xl inline-block">
          <h1 className="text-4xl font-bold mb-4">Installation de bornes de recharge électriques</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Pour particuliers, professionnels et collectivités. Spidelco vous accompagne avec expertise, conformité et garanties.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl">Demander un devis</button>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Spidelco Technologies. Tous droits réservés.
      </footer>
    </div>
  );
}
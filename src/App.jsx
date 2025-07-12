
import React from "react";

export default function MSP() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="p-4 border-b border-red-600">
        <h1 className="text-3xl font-bold text-red-500">MSP</h1>
        <p className="text-sm text-gray-300">Teknisi AI & Sparepart Genset</p>
      </header>

      <section className="p-6 space-y-6">
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-xl text-yellow-400 font-semibold mb-2">🤖 Tanya Teknisi AI</h2>
          <p className="mb-4 text-gray-300">
            Klik tombol di bawah untuk konsultasi cepat dengan teknisi AI kami (via Gemini).
          </p>
          <a
            href="https://gemini.google.com/"
            target="_blank"
            className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Buka Gemini AI
          </a>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-xl text-yellow-400 font-semibold mb-2">📦 Katalog Sparepart (Coming Soon)</h2>
          <p className="text-gray-400">
            Katalog suku cadang mesin & genset akan tersedia di sini.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-xl text-yellow-400 font-semibold mb-2">📄 Artikel & Manual</h2>
          <p className="text-gray-400">
            Belum tersedia. Akan diisi dengan artikel teknis dan file manual PDF.
          </p>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm p-4 border-t border-red-600">
        &copy; {new Date().getFullYear()} MSP - Teknisi AI & Sparepart Genset
      </footer>
    </main>
  );
}

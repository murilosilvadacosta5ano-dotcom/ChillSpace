/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Link } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 p-6 flex flex-col items-center">
      <main className="w-full max-w-4xl flex flex-col items-center text-center mt-12 gap-10">
        <img 
          src="https://res.cloudinary.com/dt5vtbeev/image/upload/v1780594658/16_Sem_T%C3%ADtulo_20260604143519_sbmj3p.png"
          alt="ChillSpace"
          className="w-full max-w-sm"
        />
        
        <motion.a 
          href="https://discord.gg/qTv8a846BA"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-orange-600 flex items-center gap-2 transition"
        >
          <Link className="size-5" /> Entrar no Servidor
        </motion.a>
      </main>

      <motion.section 
        whileHover={{ scale: 1.01, boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-2xl mt-16 bg-slate-100 p-8 rounded-3xl border border-slate-200"
      >
        <img 
          src="https://res.cloudinary.com/dt5vtbeev/image/upload/v1780588733/15_Sem_T%C3%ADtulo_20260604110637_k8xs2y.png"
          alt="Confused doggo" 
          className="absolute -top-10 right-4 h-20 rotate-12" 
        />
        <h2 className="font-heading text-4xl text-orange-950 mb-6 text-center">Regras</h2>
        <ul className="space-y-4 text-left text-slate-700">
          <li>1. Respeite todos os membros.</li>
          <li>2. Sem spam ou propagandas.</li>
          <li>3. Mantenha o chat calmo e amigável.</li>
          <li>4. Divirta-se!</li>
        </ul>
      </motion.section>

      <div className="mt-12 w-full flex justify-center">
        <img 
          src="https://res.cloudinary.com/dt5vtbeev/image/upload/v1780588179/file_00000000dfb0720e849a2d81076f4c7d_gfaeoi.png" 
          alt="ChillSpace mascot" 
          className="w-full max-w-2xl rounded-3xl" 
        />
      </div>
    </div>
  );
}

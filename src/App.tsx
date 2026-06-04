/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import ProtectedImage from "./components/ProtectedImage";
import { Link, Bot } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 p-6 flex flex-col items-center">
      <main className="w-full max-w-4xl flex flex-col items-center text-center mt-20 gap-10">
        <ProtectedImage 
          src="https://res.cloudinary.com/dt5vtbeev/image/upload/v1780594658/16_Sem_T%C3%ADtulo_20260604143519_sbmj3p.png"
          alt="ChillSpace"
          className="w-full max-w-sm"
        />
        
        <motion.a 
          href="https://discord.gg/qTv8a846BA"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px 10px rgba(148, 163, 184, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white text-orange-950 px-8 py-4 rounded-full font-heading text-lg shadow-[0_0_15px_3px_rgba(203,213,225,0.6)] hover:bg-slate-50 border border-slate-100 flex items-center gap-2 transition duration-300"
        >
          <Link className="size-5" /> Entrar no Servidor
        </motion.a>
      </main>

      <section className="w-full max-w-2xl mt-20 p-8 bg-slate-50 rounded-3xl border border-slate-100 text-slate-700">
        <h2 className="font-heading text-3xl text-orange-950 mb-6 flex items-center justify-center gap-3">
          <ProtectedImage 
            src="https://res.cloudinary.com/dt5vtbeev/image/upload/v1780588733/15_Sem_T%C3%ADtulo_20260604110637_k8xs2y.png"
            alt="Thinking doggo"
            className="w-12 h-12"
          />
          Regras da Casa
        </h2>
        <div className="space-y-4">
          <p><strong>1. Respeito em primeiro lugar:</strong> Gente, bora manter o respeito? Sem xingamentos, nada de brigas, só papo reto e tratar todo mundo bem.</p>
          <p><strong>2. Chat organizado:</strong> Chat é lugar de conversa, não de spam. Evita flood, propaganda sem avisar e fonte bizarra que não dá pra ler, valeu?</p>
          <p><strong>3. Tolerância total:</strong> Aqui zero preconceito. Respeito é a base: cada um na sua de boa, respeitando quem o outro é.</p>
          <p><strong>4. Canais de voz:</strong> Tá na call? Bom senso sempre. Não precisa gritar, não atrapalha quem tá jogando sério e, claro, nada de abuso.</p>
          <p><strong>5. Segurança acima de tudo:</strong> Cuidado com links estranhos, não vaza nada de ninguém e ó, evitou ban, não tenta voltar não, segue o jogo.</p>
          <div className="mt-4 font-semibold text-orange-950 flex items-center justify-center gap-2">
            Já terminou de ler? Então entre no servidor ou add o Nimbus ao seu servidor! 
            <ProtectedImage src="https://res.cloudinary.com/dt5vtbeev/image/upload/v1780594746/11_Sem_T%C3%ADtulo_20260602155454_pdr3to.png" alt="Carinho" className="w-8 h-8"/>
          </div>
        </div>
      </section>

      <div className="mt-16 w-full flex flex-col items-center gap-6">
        <motion.a 
          href="https://discord.com/oauth2/authorize?client_id=1511131115342135457"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px 10px rgba(148, 163, 184, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-white text-orange-950 px-8 py-4 rounded-full font-heading text-lg shadow-[0_0_15px_3px_rgba(203,213,225,0.6)] hover:bg-slate-50 border border-slate-100 flex items-center gap-2 transition duration-300"
        >
          <Bot className="size-5" /> Adicionar Nimbus
        </motion.a>

        <ProtectedImage 
          src="https://res.cloudinary.com/dt5vtbeev/image/upload/v1780588179/file_00000000dfb0720e849a2d81076f4c7d_gfaeoi.png" 
          alt="ChillSpace mascot" 
          className="w-full max-w-2xl rounded-3xl" 
        />
      </div>

      <footer className="mt-auto mb-4 w-full text-left pl-4">
        <p className="font-serif text-sm text-slate-400">Criadores: <span className="text-slate-500">xen, Nonsense</span></p>
      </footer>
    </div>
  );
}

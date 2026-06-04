import { motion, AnimatePresence } from "motion/react";
import { X, BookOpenText } from "lucide-react";
import ProtectedImage from "./ProtectedImage";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RulesModal({ isOpen, onClose }: RulesModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-heading text-3xl text-orange-950 flex items-center gap-3">
                <BookOpenText className="size-8" />
                Regras & Especificações
              </h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="space-y-6 text-slate-700">
              <section>
                <h3 className="font-semibold text-xl text-orange-900 mb-2">1. Respeito & Harmonia</h3>
                <p>O ambiente é colaborativo e voltado para o chill. Desrespeitar membros, staff ou convidados não será tolerado.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Não use linguagem ofensiva ou xingamentos.</li>
                  <li>Evite brigas ou discussões tóxicas.</li>
                  <li>Trate todos com empatia e carinho.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-xl text-orange-900 mb-2">2. Comunicação & Spam</h3>
                <p>Mantenha o chat limpo e organizado para todos os usuários.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Não repita mensagens ou flood de emojis.</li>
                  <li>Propagandas sem autorização da staff são proibidas.</li>
                  <li>Evite fontes ou formatações que quebrem o layout do chat.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-xl text-orange-900 mb-2">3. Tolerância & Respeito às Diferenças</h3>
                <p><strong>Nenhum tipo de preconceito</strong> é aceito. Respeite as opiniões, culturas e identidades de todos os membros.</p>
              </section>

              <section>
                <h3 className="font-semibold text-xl text-orange-900 mb-2">4. Canais de Voz & Gaming</h3>
                <p>Ao utilizar os canais, mantenha o bom senso e o volume adequado.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Não perturbe durante partidas competitivas.</li>
                  <li>Respeite o microfone dos outros (não grite).</li>
                  <li>Canais de voz não são para abuso ou bullying.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-xl text-orange-900 mb-2">5. Segurança, Links & Contas</h3>
                <p>Proteja-se e ajude a proteger a comunidade.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Não compartilhe informações pessoais de terceiros (doxing).</li>
                  <li>Não clique em links suspeitos compartilhados por usuários desconhecidos.</li>
                  <li>Não tente contornar bans ou punições com novas contas.</li>
                </ul>
              </section>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
              <ProtectedImage 
                src="https://res.cloudinary.com/dt5vtbeev/image/upload/v1780588733/15_Sem_T%C3%ADtulo_20260604110637_k8xs2y.png"
                alt="Confused doggo" 
                className="h-32 mb-2" 
              />
              <div className="bg-slate-100 text-slate-800 p-4 rounded-xl border border-slate-200 text-sm italic">
                "Ué, já leu tudo? Agora é só seguir!"
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

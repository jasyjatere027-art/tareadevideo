import React, { useState } from 'react';
import { HelpCircle, Search, Copy, Check } from 'lucide-react';
import { PreguntaRespuesta } from '../data/initialData';

interface QuestionnaireSectionProps {
  cuestionario: PreguntaRespuesta[];
}

export const QuestionnaireSection: React.FC<QuestionnaireSectionProps> = ({ cuestionario }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filteredQuestions = cuestionario.filter(
    (q) =>
      q.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.respuesta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.numero.toString() === searchTerm.trim()
  );

  const handleCopyAnswer = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="cuestionario" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-amber-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold">
            <HelpCircle className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
              Cuestionario Resuelto (12 Preguntas)
            </h2>
            <p className="text-xs sm:text-sm text-amber-800/80">
              Respuestas completas, resumidas y con explicaciones propias del video observado
            </p>
          </div>
        </div>

        {/* Search input filter */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" />
          <input
            type="text"
            placeholder="Filtrar pregunta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-amber-50/30 text-slate-800"
          />
        </div>
      </div>

      {filteredQuestions.length === 0 ? (
        <div className="text-center py-8 text-amber-800 text-sm">
          No se encontraron preguntas que coincidan con «{searchTerm}».
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map((item) => (
            <article
              key={item.numero}
              className="p-5 sm:p-6 rounded-xl border border-amber-200/80 bg-white hover:border-amber-400 hover:shadow-xs transition-all group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-500 text-slate-950 font-black text-xs flex items-center justify-center mt-0.5 shadow-xs">
                    {item.numero}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.pregunta}
                  </h3>
                </div>

                <button
                  onClick={() => handleCopyAnswer(item.respuesta, item.numero)}
                  title="Copiar respuesta"
                  className="shrink-0 p-1.5 text-amber-700/60 hover:text-amber-900 hover:bg-amber-100 rounded-md transition-colors cursor-pointer"
                >
                  {copiedIndex === item.numero ? (
                    <span className="flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                      <Check className="w-3.5 h-3.5" /> Copiado
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Respuesta propia del estudiante */}
              <div className="pl-0 sm:pl-10">
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed bg-amber-50/50 p-3.5 rounded-lg border border-amber-200/70 font-normal">
                  {item.respuesta}
                </p>

                {/* Puntos destacados */}
                {item.puntosClave && item.puntosClave.length > 0 && (
                  <div className="mt-3">
                    <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block mb-1.5">
                      Puntos destacados:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {item.puntosClave.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-amber-200 rounded px-2.5 py-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

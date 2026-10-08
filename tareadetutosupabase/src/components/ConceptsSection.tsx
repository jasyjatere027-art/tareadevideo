import React from 'react';
import { Layers, Lightbulb } from 'lucide-react';
import { Concepto } from '../data/initialData';

interface ConceptsSectionProps {
  conceptos: Concepto[];
}

export const ConceptsSection: React.FC<ConceptsSectionProps> = ({ conceptos }) => {
  return (
    <section id="conceptos" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-200">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-amber-100">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
          <Layers className="w-5 h-5 text-amber-700" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
            Conceptos Fundamentales
          </h2>
          <p className="text-xs sm:text-sm text-amber-800/80">
            Los 5 conceptos teóricos y técnicos más importantes del video
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {conceptos.map((item) => (
          <article
            key={item.numero}
            className="flex flex-col justify-between p-5 rounded-xl border border-amber-200/80 bg-gradient-to-b from-amber-50/40 to-white hover:border-amber-400 hover:shadow-sm transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-600 to-yellow-500 text-slate-950 font-black text-xs flex items-center justify-center shadow-xs">
                  0{item.numero}
                </span>
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-100/90 px-2 py-0.5 rounded">
                  Concepto Clave
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.nombre}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {item.definicion}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-amber-100">
              <div className="flex items-start gap-2 text-xs text-amber-950 bg-amber-100/60 p-2.5 rounded-lg border border-amber-200">
                <Lightbulb className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block text-amber-900">Ejemplo práctico:</strong>
                  <span>{item.ejemplo}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';

interface IntroductionSectionProps {
  introduccion: string;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ introduccion }) => {
  return (
    <section id="introduccion" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-200">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-100">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
          <Compass className="w-5 h-5 text-amber-700" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
            Introducción al Contenido del Video
          </h2>
          <p className="text-xs sm:text-sm text-amber-800/80">
            Descripción breve y objetivo general del aprendizaje
          </p>
        </div>
      </div>

      <div className="text-slate-800 text-base leading-relaxed space-y-4">
        <p className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-800 font-medium">
          {introduccion}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Objetivo de aprendizaje</span>
            </div>
            <p className="text-xs text-slate-700 leading-normal">
              Comprender el funcionamiento de un backend en la nube sin tener que levantar servidores complejos.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Enfoque práctico</span>
            </div>
            <p className="text-xs text-slate-700 leading-normal">
              Diseño de tablas PostgreSQL y consumo de endpoints mediante peticiones HTTP estructuradas.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Resultado obtenido</span>
            </div>
            <p className="text-xs text-slate-700 leading-normal">
              Habilidad para conectar una página web a una base de datos segura y consultar registros en JSON.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

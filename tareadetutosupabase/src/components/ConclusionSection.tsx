import React from 'react';
import { Award, Check } from 'lucide-react';

interface ConclusionSectionProps {
  conclusion: string;
}

export const ConclusionSection: React.FC<ConclusionSectionProps> = ({ conclusion }) => {
  return (
    <section id="conclusion" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-200">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-100">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
          <Award className="w-5 h-5 text-amber-700" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
            Conclusión Personal y Reflexión
          </h2>
          <p className="text-xs sm:text-sm text-amber-800/80">
            Reflexión propia sobre la utilidad de los conocimientos adquiridos
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <blockquote className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50/70 border-l-4 border-amber-500 text-slate-800 text-base leading-relaxed font-normal">
          {conclusion}
        </blockquote>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/60 border border-amber-200">
            <span className="p-1 rounded-full bg-amber-200 text-amber-900 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs text-slate-800">
              <strong>Agilidad en proyectos:</strong> Permite crear prototipos y aplicaciones completas en una fracción del tiempo habitual.
            </span>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/60 border border-amber-200">
            <span className="p-1 rounded-full bg-yellow-200 text-yellow-950 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs text-slate-800">
              <strong>Bases de datos reales:</strong> Manejo de PostgreSQL real con tipos de datos estructurados e integridad referencial.
            </span>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/60 border border-amber-200">
            <span className="p-1 rounded-full bg-amber-200 text-amber-900 mt-0.5">
              <Check className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs text-slate-800">
              <strong>Seguridad integrada:</strong> Comprensión de políticas de seguridad por filas (RLS) para proteger los datos de los usuarios.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

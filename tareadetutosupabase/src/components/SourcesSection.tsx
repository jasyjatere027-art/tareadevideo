import React from 'react';
import { Bookmark, ExternalLink, Video, BookOpen } from 'lucide-react';

interface FuentesProps {
  fuentes: {
    titulo: string;
    url: string;
    descripcion: string;
  }[];
}

export const SourcesSection: React.FC<FuentesProps> = ({ fuentes }) => {
  // Take only the first 2 sources as explicitly requested by the user
  const dosFuentes = fuentes.slice(0, 2);

  return (
    <section id="fuentes" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-200">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-amber-100">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
          <Bookmark className="w-5 h-5 text-amber-700" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
            Fuentes y Referencias
          </h2>
          <p className="text-xs sm:text-sm text-amber-800/80">
            Material audiovisual observado y documentación técnica oficial de consulta
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dosFuentes.map((fuente, index) => (
          <a
            key={index}
            href={fuente.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3.5 p-5 rounded-xl border border-amber-200 bg-amber-50/40 hover:bg-amber-50 hover:border-amber-400 hover:shadow-xs transition-all group"
          >
            <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800 border border-amber-300 group-hover:bg-amber-200 transition-colors shrink-0">
              {index === 0 ? <Video className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-sm font-bold text-amber-950 group-hover:text-amber-700 transition-colors">
                <span className="truncate">{fuente.titulo}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100" />
              </div>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                {fuente.descripcion}
              </p>
              <span className="text-[11px] font-mono text-amber-700 block mt-2.5 truncate font-medium">
                {fuente.url}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

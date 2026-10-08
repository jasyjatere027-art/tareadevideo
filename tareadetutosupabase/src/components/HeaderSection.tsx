import React from 'react';
import { User, GraduationCap, BookOpen, Building2, Calendar, Video, ExternalLink } from 'lucide-react';
import { StudentInfo } from '../data/initialData';

interface HeaderSectionProps {
  student: StudentInfo;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({ student }) => {
  return (
    <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white p-6 sm:p-10 shadow-xl border border-amber-600/40">
      {/* Background warm golden glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400/20 text-yellow-300 border border-yellow-400/40 mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
          Trabajo Práctico
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-300 drop-shadow-sm mb-3">
          «{student.titulo}»
        </h1>
        <p className="text-amber-100 text-sm sm:text-base max-w-3xl mb-8 leading-relaxed font-medium">
          Análisis del material audiovisual y resolución del cuestionario estructurado sobre Supabase y bases de datos en la nube.
        </p>

        {/* Ficha institucional del alumno con tonos dorados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 bg-amber-950/70 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-amber-500/30 shadow-inner">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-amber-300/80 font-semibold">
                Nombre y Apellido
              </span>
              <span className="text-sm sm:text-base font-bold text-yellow-100">
                {student.nombreCompleto}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-amber-300/80 font-semibold">
                Curso / Nivel
              </span>
              <span className="text-sm sm:text-base font-bold text-yellow-100">
                {student.curso}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-amber-300/80 font-semibold">
                Asignatura
              </span>
              <span className="text-sm sm:text-base font-bold text-yellow-100">
                {student.asignatura}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-amber-300/80 font-semibold">
                Institución
              </span>
              <span className="text-sm sm:text-base font-bold text-yellow-100">
                {student.institucion}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-amber-300/80 font-semibold">
                Docente
              </span>
              <span className="text-sm sm:text-base font-bold text-yellow-100">
                {student.profesor}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-amber-300/80 font-semibold">
                Año Lectivo
              </span>
              <span className="text-sm sm:text-base font-bold text-yellow-100">
                {student.fecha}
              </span>
            </div>
          </div>
        </div>

        {/* Video metadata link badge */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 p-3 rounded-lg bg-amber-950/90 border border-amber-600/30 text-xs text-amber-200">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-yellow-300">Video analizado:</strong> {student.tituloVideo} ({student.autorVideo})
            </span>
          </div>
          <a
            href={student.urlVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-yellow-300 hover:text-yellow-200 hover:underline font-semibold"
          >
            Abrir en YouTube <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
};

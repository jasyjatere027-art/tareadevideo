import React, { useState, useEffect } from 'react';
import { defaultData } from './data/initialData';
import { Navbar } from './components/Navbar';
import { HeaderSection } from './components/HeaderSection';
import { VideoSection } from './components/VideoSection';
import { IntroductionSection } from './components/IntroductionSection';
import { ConceptsSection } from './components/ConceptsSection';
import { QuestionnaireSection } from './components/QuestionnaireSection';
import { PracticalSection } from './components/PracticalSection';
import { VisualsSection } from './components/VisualsSection';
import { ConclusionSection } from './components/ConclusionSection';
import { SourcesSection } from './components/SourcesSection';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const data = defaultData;
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-amber-50/40 text-slate-800 font-sans selection:bg-amber-400 selection:text-amber-950 flex flex-col justify-between">
      {/* Menú de navegación funcional y responsivo */}
      <Navbar studentName={data.estudiante.nombreCompleto} />

      {/* Contenedor central principal */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-1 w-full" id="inicio">
        {/* Encabezado: Título y Datos del Alumno (Thais Nuñes) */}
        <HeaderSection student={data.estudiante} />

        {/* Video de YouTube incrustado en la página */}
        <VideoSection
          youtubeId={data.estudiante.youtubeId}
          urlVideo={data.estudiante.urlVideo}
          tituloVideo={data.estudiante.tituloVideo}
          autorVideo={data.estudiante.autorVideo}
        />

        {/* Introducción */}
        <IntroductionSection introduccion={data.introduccion} />

        {/* Conceptos fundamentales */}
        <ConceptsSection conceptos={data.conceptos} />

        {/* Cuestionario resuelto (12 preguntas) */}
        <QuestionnaireSection cuestionario={data.cuestionario} />

        {/* Aplicación práctica */}
        <PracticalSection aplicacion={data.aplicacionPractica} />

        {/* Recursos visuales y diagramas */}
        <VisualsSection />

        {/* Conclusión personal */}
        <ConclusionSection conclusion={data.conclusion} />

        {/* Fuentes (2 fuentes oficiales) */}
        <SourcesSection fuentes={data.fuentes} />
      </main>

      {/* Botón flotante para volver arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 text-slate-950 font-bold shadow-lg hover:shadow-xl transition-all cursor-pointer border border-yellow-300"
          title="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Pie de página con Thais Nuñes */}
      <footer className="mt-16 bg-gradient-to-b from-amber-950 to-stone-950 border-t border-amber-800/60 py-8 px-4 text-center text-xs text-amber-200">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="font-bold text-yellow-300 text-sm">
            «{data.estudiante.titulo}» — Thais Nuñes
          </p>
          <p className="text-amber-200/80">
            {data.estudiante.curso} • {data.estudiante.asignatura}
          </p>
          <p className="text-amber-400/60 text-[11px] pt-1">
            Trabajo Práctico Individual • {data.estudiante.fecha}
          </p>
        </div>
      </footer>
    </div>
  );
}

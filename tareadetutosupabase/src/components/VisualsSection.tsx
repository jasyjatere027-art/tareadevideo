import React, { useState } from 'react';
import { Image as ImageIcon, Database, Server, Globe, Key, ShieldCheck, CheckCircle } from 'lucide-react';

export const VisualsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  const diagramSteps = [
    {
      id: 1,
      title: '1. Frontend (Cliente)',
      sub: 'Tu Página Web',
      desc: 'El navegador del usuario ejecuta el HTML, CSS y JavaScript haciendo peticiones HTTP con fetch o cliente de Supabase.',
      badge: 'Frontend',
      badgeColor: 'bg-yellow-200 text-yellow-900',
    },
    {
      id: 2,
      title: '2. Clave Pública & HTTPS',
      sub: 'Anon Public Key',
      desc: 'La petición viaja encriptada y se identifica mediante la clave pública anónima del proyecto.',
      badge: 'Seguridad',
      badgeColor: 'bg-amber-200 text-amber-950',
    },
    {
      id: 3,
      title: '3. API REST Automática',
      sub: 'Supabase Gateway',
      desc: 'Recibe la petición GET/POST y comprueba las políticas de acceso sin necesidad de escribir código en Node.js.',
      badge: 'Endpoints',
      badgeColor: 'bg-amber-300 text-amber-950',
    },
    {
      id: 4,
      title: '4. Reglas RLS',
      sub: 'Row Level Security',
      desc: 'Verifica qué filas y columnas tiene permiso de leer o modificar el usuario actual.',
      badge: 'Filtro RLS',
      badgeColor: 'bg-yellow-300 text-yellow-950',
    },
    {
      id: 5,
      title: '5. Base de Datos PostgreSQL',
      sub: 'Tablas & Registros',
      desc: 'Motor relacional seguro en la nube donde quedan almacenados los datos de manera permanente.',
      badge: 'PostgreSQL',
      badgeColor: 'bg-emerald-200 text-emerald-950',
    },
  ];

  return (
    <section id="recursos" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-200">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-amber-100">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
          <ImageIcon className="w-5 h-5 text-amber-700" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
            Recursos Visuales y Diagrama del Sistema
          </h2>
          <p className="text-xs sm:text-sm text-amber-800/80">
            Esquema gráfico del funcionamiento de Supabase y el flujo de los datos
          </p>
        </div>
      </div>

      {/* Interactive Workflow Diagram in Yellow/Gold/Dark Amber */}
      <div className="bg-gradient-to-br from-amber-950 via-slate-950 to-stone-950 text-white rounded-xl p-5 sm:p-7 mb-6 shadow-md border border-amber-600/30">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            Flujo de Conexión: Del navegador a PostgreSQL
          </span>
          <span className="text-xs text-amber-300/80">
            Toca o haz clic en cualquier elemento para ver el detalle
          </span>
        </div>

        {/* Horizontal Node Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 my-3">
          {diagramSteps.map((step) => {
            const isSelected = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`text-left p-3 rounded-lg transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/25 border-yellow-400 text-white ring-2 ring-yellow-400/50'
                    : 'bg-slate-900/80 border-amber-900/60 text-amber-100 hover:bg-slate-800 hover:border-amber-600'
                }`}
              >
                <span className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-bold mb-1.5 ${step.badgeColor}`}>
                  {step.badge}
                </span>
                <h4 className="text-xs font-bold leading-tight block mb-0.5 text-yellow-100">
                  {step.title}
                </h4>
                <span className="text-[11px] font-mono text-amber-400/90 block truncate">
                  {step.sub}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Callout */}
        {activeStep && (
          <div className="mt-4 p-4 rounded-lg bg-amber-950/60 border border-amber-500/40 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-sm font-semibold text-yellow-300 block">
                {diagramSteps[activeStep - 1].title}: {diagramSteps[activeStep - 1].sub}
              </strong>
              <p className="text-xs sm:text-sm text-amber-100 mt-1 leading-relaxed">
                {diagramSteps[activeStep - 1].desc}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Visual Mockups Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1: Estructura de la tabla */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
          <div className="flex items-center gap-2 mb-3 text-amber-950 font-bold text-sm">
            <Database className="w-4 h-4 text-amber-600" />
            <span>Estructura de la tabla en PostgreSQL</span>
          </div>
          <div className="bg-white rounded-lg p-3 border border-amber-200 font-mono text-xs text-slate-800 space-y-1.5">
            <div className="font-bold text-amber-900 pb-1 border-b border-amber-100 flex justify-between">
              <span>Campo (Columna)</span>
              <span>Tipo de dato</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>id (Clave primaria)</span>
              <span className="text-amber-700 font-semibold">int8 (serial)</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>title (Título de tarea)</span>
              <span className="text-amber-700 font-semibold">text</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>is_complete (Completado)</span>
              <span className="text-amber-700 font-semibold">boolean (false)</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span>created_at (Fecha)</span>
              <span className="text-amber-700 font-semibold">timestamptz</span>
            </div>
          </div>
        </div>

        {/* Card 2: Respuesta JSON de la API */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
          <div className="flex items-center gap-2 mb-3 text-amber-950 font-bold text-sm">
            <Globe className="w-4 h-4 text-amber-600" />
            <span>Respuesta obtenida desde la API REST</span>
          </div>
          <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 text-xs font-mono text-amber-300 overflow-x-auto">
            <pre className="text-[11px] leading-relaxed">
{`[
  {
    "id": 1,
    "title": "Aprender conceptos de Supabase",
    "is_complete": true
  },
  {
    "id": 2,
    "title": "Construir página web del trabajo práctico",
    "is_complete": true
  }
]`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

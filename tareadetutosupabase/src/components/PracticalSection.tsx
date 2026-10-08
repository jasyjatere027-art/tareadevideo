import React, { useState } from 'react';
import { Terminal, Copy, Check, Info, Rocket } from 'lucide-react';
import { PasoPractico } from '../data/initialData';

interface PracticalSectionProps {
  aplicacion: {
    titulo: string;
    descripcion: string;
    pasos: PasoPractico[];
  };
}

export const PracticalSection: React.FC<PracticalSectionProps> = ({ aplicacion }) => {
  const [copiedPaso, setCopiedPaso] = useState<number | null>(null);

  const handleCopyCommand = (cmd: string, paso: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedPaso(paso);
    setTimeout(() => setCopiedPaso(null), 2000);
  };

  return (
    <section id="practica" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-200">
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-100">
        <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
          <Terminal className="w-5 h-5 text-amber-700" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
            Aplicación Práctica del Procedimiento
          </h2>
          <p className="text-xs sm:text-sm text-amber-800/80">
            {aplicacion.titulo}
          </p>
        </div>
      </div>

      <p className="text-slate-800 text-sm sm:text-base mb-6 leading-relaxed">
        {aplicacion.descripcion}
      </p>

      <div className="relative border-l-2 border-amber-400 pl-6 sm:pl-8 ml-3 space-y-7">
        {aplicacion.pasos.map((item) => (
          <div key={item.paso} className="relative group">
            {/* Step marker pin */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-500 text-slate-950 font-black text-xs flex items-center justify-center ring-4 ring-white shadow-xs">
              {item.paso}
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span>{item.titulo}</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-2.5">
                {item.descripcion}
              </p>

              {/* Code / Command preview if any */}
              {item.comando && (
                <div className="relative my-2 rounded-lg bg-slate-950 text-amber-300 font-mono text-xs sm:text-sm p-3.5 pt-4 overflow-x-auto shadow-inner border border-amber-800/60">
                  <div className="flex items-center justify-between text-[11px] text-amber-400/80 border-b border-slate-800 pb-2 mb-2 font-sans">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                      <span className="font-medium">Consumo de la API / Petición</span>
                    </span>
                    <button
                      onClick={() => handleCopyCommand(item.comando!, item.paso)}
                      className="flex items-center gap-1 text-amber-300 hover:text-white px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                      title="Copiar código"
                    >
                      {copiedPaso === item.paso ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    <code>{item.comando}</code>
                  </pre>
                </div>
              )}

              {/* Note / Tip */}
              {item.nota && (
                <div className="flex items-start gap-2 mt-2 text-xs text-amber-950 bg-amber-50 border border-amber-200 p-2.5 rounded-lg">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-amber-900">Nota clave:</strong> {item.nota}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary box */}
      <div className="mt-8 p-4 rounded-xl bg-amber-100/70 border border-amber-300 flex items-start gap-3">
        <Rocket className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong>Resultado práctico:</strong> A partir de estos pasos, la base de datos queda accesible con persistencia en tiempo real para cualquier frontend web o aplicación móvil, permitiendo consultar registros en formato JSON sin configurar un servidor propio.
        </div>
      </div>
    </section>
  );
};

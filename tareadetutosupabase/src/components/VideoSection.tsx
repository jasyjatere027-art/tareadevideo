import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoSectionProps {
  youtubeId: string;
  urlVideo: string;
  tituloVideo: string;
  autorVideo: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  youtubeId,
  urlVideo,
  tituloVideo,
  autorVideo,
}) => {
  return (
    <section id="video-seccion" className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-amber-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-amber-950 flex items-center justify-center font-bold shadow-xs">
            <Play className="w-5 h-5 fill-amber-950 text-amber-950" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
              Video Observado
            </h2>
            <p className="text-xs sm:text-sm text-amber-800">
              {tituloVideo} — {autorVideo}
            </p>
          </div>
        </div>

        <a
          href={urlVideo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 text-xs font-semibold transition-colors w-fit"
        >
          <span>Ver directamente en YouTube</span>
          <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
        </a>
      </div>

      {/* Embedded YouTube Player responsive container */}
      <div className="relative w-full overflow-hidden rounded-xl bg-slate-950 shadow-md border-2 border-amber-300/80 aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
          title={tituloVideo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-4 p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs sm:text-sm text-amber-900 flex items-center justify-between flex-wrap gap-2">
        <span>
          <strong>Canal / Creador:</strong> {autorVideo}
        </span>
        <span className="text-amber-800">
          Enlace original: <a href={urlVideo} target="_blank" rel="noopener noreferrer" className="underline font-mono">{urlVideo}</a>
        </span>
      </div>
    </section>
  );
};

import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

interface ProjectDetailProps {
  projectId: number;
  onClose: () => void;
}

export default function ProjectDetail({ projectId, onClose }: ProjectDetailProps) {
  const project = projects.find(p => p.id === projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'auto';
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.cursor = 'none';
    };
  }, []);

  if (!project) return null;

  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const categoryLabels: Record<string, string> = {
    residential: 'Konut',
    commercial: 'Ticari',
    public: 'Kamusal',
    interior: 'İç Mekan',
  };

  return (
    <div className={`fixed inset-0 bg-zinc-950 text-white z-50 overflow-y-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ cursor: 'auto' }}>
        <button
        onClick={onClose}
        className="fixed top-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 text-white"
        aria-label="Kapat"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-4 py-2 text-xs tracking-widest ${
                project.category === 'residential' ? 'bg-emerald-500/90' :
                project.category === 'commercial' ? 'bg-amber-500/90' :
                project.category === 'public' ? 'bg-blue-500/90' :
                'bg-purple-500/90'
              }`}>
                {categoryLabels[project.category]}
              </span>
              <span className="text-zinc-500 text-sm">{project.year}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-wider text-white">
              {project.name}<span className="text-amber-500">.</span>
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-amber-500 to-transparent mb-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-zinc-900 mb-4 overflow-hidden group">
                <img
                  src={project.gallery[currentImageIndex]}
                  alt={`${project.name} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 text-white"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all opacity-0 group-hover:opacity-100 text-white"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-24 h-24 overflow-hidden transition-all ${
                      idx === currentImageIndex ? 'ring-2 ring-amber-500' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-sm tracking-widest text-zinc-400 mb-2">KONUM</h3>
                <p className="text-xl text-white">{project.location}</p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-zinc-400 mb-2">ALAN</h3>
                <p className="text-xl text-white">{project.area}</p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-zinc-400 mb-2">TAMAMLANMA</h3>
                <p className="text-xl text-white">{project.completion}</p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-zinc-400 mb-2">MÜŞTERİ</h3>
                <p className="text-xl text-white">{project.client}</p>
              </div>

              <div>
                <h3 className="text-sm tracking-widest text-zinc-400 mb-2">DURUM</h3>
                <p className="text-xl capitalize text-white">{project.status === 'completed' ? 'Tamamlanmış' : project.status === 'ongoing' ? 'Devam Eden' : 'Konsept'}</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mb-20">
            <h2 className="text-3xl font-light mb-6 tracking-wide text-white">Tasarım Hikayesi</h2>
            <div className="prose prose-invert prose-lg">
              <p className="text-zinc-200 leading-relaxed mb-4">
                {project.description}
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Bu proje, modern mimarlık anlayışını yerel doku ile harmanlayarak özgün bir yaşam alanı yaratmayı hedeflemektedir. Sürdürülebilir malzeme seçimi ve enerji verimliliği odaklı tasarım kararları ile çevreye saygılı bir yapı ortaya konulmuştur.
              </p>
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div>
              <h2 className="text-3xl font-light mb-8 tracking-wide text-white">
                İlgili Projeler<span className="text-amber-500">.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject) => (
                  <button
                    key={relatedProject.id}
                    onClick={() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                        onClose();
                        setTimeout(() => {
                          const event = new CustomEvent('openProject', { detail: relatedProject.id });
                          window.dispatchEvent(event);
                        }, 300);
                      }, 500);
                    }}
                    className="group text-left"
                  >
                    <div className="relative overflow-hidden aspect-[4/5] bg-zinc-900 mb-4">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-light mb-2 text-white">{relatedProject.name}</h3>
                    <p className="text-sm text-zinc-300">{relatedProject.location}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

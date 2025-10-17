import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectGalleryProps {
  onProjectClick: (id: number) => void;
}

export default function ProjectGallery({ onProjectClick }: ProjectGalleryProps) {
  const [filter, setFilter] = useState({ category: 'all', status: 'all', year: 'all' });
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (filter.category !== 'all') {
      filtered = filtered.filter(p => p.category === filter.category);
    }
    if (filter.status !== 'all') {
      filtered = filtered.filter(p => p.status === filter.status);
    }
    if (filter.year !== 'all') {
      filtered = filtered.filter(p => p.year === parseInt(filter.year));
    }

    setVisibleProjects(filtered);
  }, [filter]);

  const categories = ['all', 'residential', 'commercial', 'public', 'interior'];
  const statuses = ['all', 'completed', 'ongoing', 'concept'];
  const years = ['all', '2024', '2023', '2022', '2021', '2020'];

  const categoryLabels: Record<string, string> = {
    all: 'Tümü',
    residential: 'Konut',
    commercial: 'Ticari',
    public: 'Kamusal',
    interior: 'İç Mekan',
  };

  const statusLabels: Record<string, string> = {
    all: 'Tümü',
    completed: 'Tamamlanmış',
    ongoing: 'Devam Eden',
    concept: 'Konsept',
  };

  return (
    <section className="py-32 px-4 md:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-wider">
            Projeler<span className="text-amber-500">.</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-amber-500 to-transparent" />
        </div>

        <div className={`mb-12 flex flex-wrap gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative">
            <select
              value={filter.category}
              onChange={(e) => setFilter({ ...filter, category: e.target.value })}
              className="appearance-none bg-white/5 border border-white/10 px-6 py-3 pr-12 rounded-none text-sm tracking-wider hover:bg-white/10 transition-all cursor-pointer focus:outline-none focus:border-amber-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-zinc-900">
                  {categoryLabels[cat]}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              className="appearance-none bg-white/5 border border-white/10 px-6 py-3 pr-12 rounded-none text-sm tracking-wider hover:bg-white/10 transition-all cursor-pointer focus:outline-none focus:border-amber-500"
            >
              {statuses.map(status => (
                <option key={status} value={status} className="bg-zinc-900">
                  {statusLabels[status]}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={filter.year}
              onChange={(e) => setFilter({ ...filter, year: e.target.value })}
              className="appearance-none bg-white/5 border border-white/10 px-6 py-3 pr-12 rounded-none text-sm tracking-wider hover:bg-white/10 transition-all cursor-pointer focus:outline-none focus:border-amber-500"
            >
              {years.map(year => (
                <option key={year} value={year} className="bg-zinc-900">
                  {year === 'all' ? 'Tüm Yıllar' : year}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => onProjectClick(project.id)}
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs tracking-widest ${
                    project.category === 'residential' ? 'bg-emerald-500/90' :
                    project.category === 'commercial' ? 'bg-amber-500/90' :
                    project.category === 'public' ? 'bg-blue-500/90' :
                    'bg-purple-500/90'
                  }`}>
                    {categoryLabels[project.category]}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-light mb-2 tracking-wide">{project.name}</h3>
                  <div className="flex items-center justify-between text-sm text-zinc-400">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="h-px w-0 group-hover:w-full bg-amber-500 mt-4 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            <p className="text-xl">Seçilen kriterlere uygun proje bulunamadı.</p>
          </div>
        )}
      </div>
    </section>
  );
}

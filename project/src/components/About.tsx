import { useEffect, useState } from 'react';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, years: 0, team: 0, awards: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { projects: 150, years: 12, team: 28, awards: 24 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.floor(targets.projects * progress),
        years: Math.floor(targets.years * progress),
        team: Math.floor(targets.team * progress),
        awards: Math.floor(targets.awards * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  const stats = [
    { icon: Building2, value: counts.projects, label: 'Tamamlanan Proje', suffix: '+' },
    { icon: TrendingUp, value: counts.years, label: 'Yıllık Deneyim', suffix: '' },
    { icon: Users, value: counts.team, label: 'Ekip Üyesi', suffix: '' },
    { icon: Award, value: counts.awards, label: 'Ulusal Ödül', suffix: '' },
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div>
            <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-wider">
              Hakkımızda<span className="text-amber-500">.</span>
            </h2>
            <div className="h-px w-32 bg-gradient-to-r from-amber-500 to-transparent mb-8" />

            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              2025 yılında Konya'da kurulan OXXO, modern mimarlık anlayışını Anadolu'nun köklü kültürel mirası ile harmanlayarak özgün tasarımlar ortaya koyan bir mimarlık stüdyosudur.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              Tasarım felsefemiz, her projeyi benzersiz bir hikaye olarak ele almak ve bulunduğu çevreyle organik bir diyalog kuran yapılar yaratmak üzerine kuruludur. Sürdürülebilirlik, işlevsellik ve estetik mükemmelliği bir araya getirerek, kullanıcı deneyimini ön planda tutan mekanlar tasarlıyoruz.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed">
              Konut projelerinden kamusal alanlara, ticari yapılardan iç mekan tasarımlarına kadar geniş bir yelpazede hizmet veren ekibimiz, her projede yenilikçi çözümler ve detayda mükemmellik arayışıyla hareket eder.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-800">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mimar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-500 p-8 max-w-xs">
              <p className="text-zinc-950 font-light">
                <span className="text-2xl block mb-2">Mimar Anıl Öz</span>
                <span className="text-sm tracking-wide">Kurucu & Baş Mimar</span>
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-24 border-l-2 border-amber-500 pl-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <h3 className="text-3xl font-light mb-6 tracking-wide">Vizyonumuz</h3>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Mimarlığın gücünü kullanarak, insanların yaşam kalitesini artıran, çevreye saygılı ve gelecek nesillere değer bırakan yapılar tasarlamak. Her projemizde, yerel kültürü modern tasarım diliyle buluşturarak, zamansız ve özgün mekanlar yaratmayı hedefliyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}

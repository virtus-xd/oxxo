import { useEffect, useState } from 'react';
import { Leaf, Sun, Droplet, Recycle, Wind, TreePine } from 'lucide-react';

export default function Sustainability() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('sustainability');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      icon: Sun,
      title: 'Enerji Verimliliği',
      description: 'Pasif ısıtma ve soğutma sistemleri, yüksek yalıtım standartları ve yenilenebilir enerji kaynaklarının entegrasyonu ile düşük karbon ayak izi.',
    },
    {
      icon: Droplet,
      title: 'Su Yönetimi',
      description: 'Yağmur suyu toplama sistemleri, gri su geri dönüşümü ve yerli bitki peyzajı ile su tüketiminde %40 azalma hedefi.',
    },
    {
      icon: Recycle,
      title: 'Döngüsel Malzeme',
      description: 'Geri dönüştürülmüş ve geri dönüştürülebilir malzeme kullanımı, yerel tedarik zinciri ile nakliye emisyonlarının minimizasyonu.',
    },
    {
      icon: Wind,
      title: 'Doğal Havalandırma',
      description: 'Çapraz havalandırma stratejileri ve akıllı cephe tasarımları ile mekanik sistemlere olan bağımlılığın azaltılması.',
    },
    {
      icon: TreePine,
      title: 'Yeşil Alanlar',
      description: 'Çatı bahçeleri, dikey bahçeler ve biyoçeşitlilik koridorları ile doğal habitatların korunması ve geliştirilmesi.',
    },
    {
      icon: Leaf,
      title: 'Sertifikasyonlar',
      description: 'LEED, BREEAM ve yerel yeşil bina sertifikasyonları için tasarım ve danışmanlık hizmetleri.',
    },
  ];

  return (
    <section className="py-32 px-4 md:px-8 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-wider">
            Sürdürülebilirlik<span className="text-amber-500">.</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Çevre dostu tasarım yaklaşımımız ile gelecek nesillere yaşanabilir bir dünya bırakmayı hedefliyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className={`group p-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="absolute top-0 left-0 w-16 h-16 border-2 border-amber-500/20 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                </div>

                <h3 className="text-2xl font-light mb-4 tracking-wide">
                  {principle.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative aspect-video overflow-hidden bg-zinc-900">
            <img
              src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sürdürülebilir Mimarlık"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 to-transparent" />
          </div>

          <div>
            <h3 className="text-3xl font-light mb-6 tracking-wide">
              Karbon Nötr Tasarım Hedefi
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              2030 yılına kadar tüm yeni projelerimizin karbon nötr olması için çalışıyoruz. Bu hedef doğrultusunda, tasarım aşamasından inşaat sürecine kadar her adımda karbon ayak izini minimize eden çözümler geliştiriyoruz.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-amber-500" style={{ width: '75%' }} />
                </div>
                <span className="text-sm text-zinc-500">2024 Hedef: %75</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-amber-500" style={{ width: '100%' }} />
                </div>
                <span className="text-sm text-zinc-500">2030 Hedef: %100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Instagram, Linkedin, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-light mb-4 tracking-wider">
              OXXO<span className="text-amber-500">.</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Modern mimarlık anlayışını yerel kültürle harmanlayan özgün tasarımlar.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/oxxomimarlik/?igsh=MTIxeDBxOG04bjAyeA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/an%C4%B1l-%C3%B6z-49b763347"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-widest text-zinc-400 mb-4">HIZLI ERİŞİM</h4>
            <ul className="space-y-3">
              {[
                { label: 'Ana Sayfa', id: 'home' },
                { label: 'Projeler', id: 'projects' },
                { label: 'Hakkımızda', id: 'about' },
                { label: 'Sürdürülebilirlik', id: 'sustainability' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest text-zinc-400 mb-4">HİZMETLER</h4>
            <ul className="space-y-3 text-zinc-400">
              <li>Mimari Proje</li>
              <li>İç Mimarlık</li>
              <li>Peyzaj Tasarımı</li>
              <li>Restorasyon</li>
              <li>Danışmanlık</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest text-zinc-400 mb-4">BÜLTEN</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Yeni projelerimizden haberdar olmak için abone olun.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                required
                className="w-full bg-white/5 border border-white/10 px-4 py-3 pr-12 focus:border-amber-500 focus:outline-none transition-colors text-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-500 flex items-center justify-center hover:bg-amber-400 transition-colors"
                aria-label="Abone Ol"
              >
                <Send className="w-4 h-4 text-zinc-950" />
              </button>
            </form>
            {isSubscribed && (
              <p className="text-emerald-500 text-xs mt-2">Başarıyla abone oldunuz!</p>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2025 OXXO Mimarlık. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

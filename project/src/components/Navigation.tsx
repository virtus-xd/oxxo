import { Building2, Users, Leaf, MessageSquare, Newspaper, Home } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onNavigate: (section: string) => void;
  activeSection: string;
}

const menuItems = [
  { id: 'home', label: 'Ana Sayfa', icon: Home },
  { id: 'projects', label: 'Projeler', icon: Building2 },
  { id: 'about', label: 'Hakkımızda', icon: Users },
  { id: 'sustainability', label: 'Sürdürülebilirlik', icon: Leaf },
  { id: 'contact', label: 'İletişim', icon: MessageSquare },
];

export default function Navigation({ isOpen, onNavigate, activeSection }: NavigationProps) {
  return (
    <div
      className={`fixed inset-0 bg-zinc-900/95 backdrop-blur-xl z-40 transition-all duration-700 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="h-full flex items-center justify-center">
        <nav className="space-y-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`transition-all duration-700 ${
                  isOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`group flex items-center space-x-6 text-5xl md:text-7xl font-light tracking-wider transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-amber-500'
                      : 'text-white hover:text-amber-500'
                  }`}
                >
                  <Icon className="w-12 h-12 md:w-16 md:h-16 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-px bg-amber-500 transition-all duration-300 ${
                        activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </span>
                </button>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8">
        {['Instagram', 'LinkedIn', 'Pinterest'].map((social, index) => (
          <a
            key={social}
            href="#"
            className={`text-zinc-400 hover:text-white text-sm tracking-widest transition-all duration-700 ${
              isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${600 + index * 100}ms` }}
          >
            {social}
          </a>
        ))}
      </div>
    </div>
  );
}

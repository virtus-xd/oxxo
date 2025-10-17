import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-32 px-4 md:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-7xl font-light mb-4 tracking-wider">
            İletişim<span className="text-amber-500">.</span>
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-amber-500 to-transparent mb-8" />
          <p className="text-xl text-zinc-400">
            Projeleriniz için bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-widest text-zinc-400 mb-2">
                  ADINIZ
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 focus:border-amber-500 focus:outline-none transition-colors text-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-widest text-zinc-400 mb-2">
                  E-POSTA
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 focus:border-amber-500 focus:outline-none transition-colors text-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-widest text-zinc-400 mb-2">
                  MESAJINIZ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-b-2 border-white/10 py-3 focus:border-amber-500 focus:outline-none transition-colors text-lg resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-3 px-8 py-4 bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-all duration-300 tracking-wider text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'GÖNDERİLİYOR...'
                ) : submitStatus === 'success' ? (
                  'GÖNDERILDI!'
                ) : (
                  <>
                    GÖNDER
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-emerald-500 text-sm">
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </p>
              )}
            </form>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm tracking-widest text-zinc-400 mb-2">ADRES</h3>
                  <p className="text-lg">
                    Feritpaşa, Nişantaş Sk. No:5<br />
                    Konya, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm tracking-widest text-zinc-400 mb-2">TELEFON</h3>
                  <p className="text-lg">+90 543 402 50 73</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm tracking-widest text-zinc-400 mb-2">E-POSTA</h3>
                  <p className="text-lg">oxxomimarlik@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-sm tracking-widest text-zinc-400 mb-4">SOSYAL MEDYA</h3>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href="#"
                      className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={`h-96 bg-zinc-800 overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.0373163234485!2d32.48903!3d37.882810000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0857e6be1049d%3A0xa606a7362222e139!2sOXXO%20Mimarl%C4%B1k!5e0!3m2!1str!2str!4v1760713148399!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ofis Konumu"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

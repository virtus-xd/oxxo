import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-light text-white tracking-wider">
            oxxo
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-4" />
        </div>

        <div className="w-64 h-px bg-zinc-800 relative overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 text-zinc-400 text-sm tracking-widest">
          {progress}%
        </p>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';

export default function IntroScene() {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowScene(true), 500);
    const audio = new Audio('/phone-ring.mp3');
    audio.play();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
      <div
        className={`transition-transform duration-1000 ease-out transform ${
          showScene ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        <img
          src="/pedro.png"
          alt="Pedro tras el escritorio"
          className="rounded shadow-lg w-full max-w-xl"
        />
      </div>

      <div className="bg-black bg-opacity-60 p-6 rounded text-lg leading-relaxed max-w-xl text-center mt-8 animate-fade-in">
        <p>España ha hablado. Has ganado las elecciones, pero no tienes mayoría.</p>
        <p className="mt-2">El país te observa. La prensa cuchichea. Europa espera.</p>
        <p className="mt-4 font-semibold">Y solo tienes el teléfono rojo sobre tu escritorio.</p>
      </div>

      <button
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2 animate-bounce"
        onClick={() => alert('Has respondido la llamada. Que empiece el juego...')}
      >
        📞 Responder llamada
      </button>
    </div>
  );
}

import { useState } from 'react';
import Image from 'next/image';

export default function IntroScene({ onFinish }) {
  const [showChoices, setShowChoices] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <Image
          src="/pedro.png"
          alt="Pedro tras el escritorio"
          width={800}
          height={600}
          className="rounded shadow mb-6"
        />
        <div className="bg-black bg-opacity-40 p-4 rounded text-lg leading-relaxed">
          <p>España ha hablado. Has ganado las elecciones, pero no tienes mayoría.</p>
          <p className="mt-2">El país te observa. La prensa cuchichea. Europa espera.</p>
          <p className="mt-2 font-semibold">Y solo tienes el teléfono rojo sobre tu escritorio.</p>
        </div>

        {!showChoices ? (
          <button
            className="mt-6 bg-blue-500 px-6 py-2 rounded shadow"
            onClick={() => setShowChoices(true)}
          >
            📞 Responder llamada
          </button>
        ) : (
          <div className="flex flex-col gap-3 mt-6">
            <button className="bg-yellow-600 px-4 py-2 rounded">📞 Llamar a Buildú</button>
            <button className="bg-pink-600 px-4 py-2 rounded">📞 Llamar a Yolundia</button>
            <button className="bg-blue-700 px-4 py-2 rounded">📞 Llamar a Feijasco</button>
            <button className="bg-purple-700 px-4 py-2 rounded">📡 Pactar con una IA</button>
          </div>
        )}
      </div>
    </div>
  );
}

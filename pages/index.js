import Image from 'next/image';

export default function IntroScene() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-8">

      <div className="mb-6">
        <Image
          src="/pedro.png"
          alt="Pedro tras el escritorio"
          width={600}
          height={400}
          className="rounded shadow-lg"
        />
      </div>

      <div className="bg-black bg-opacity-60 p-6 rounded text-lg leading-relaxed max-w-xl text-center">
        <p>España ha hablado. Has ganado las elecciones, pero no tienes mayoría.</p>
        <p className="mt-2">El país te observa. La prensa cuchichea. Europa espera.</p>
        <p className="mt-4 font-semibold">Y solo tienes el teléfono rojo sobre tu escritorio.</p>
      </div>

      <button
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded flex items-center gap-2"
        onClick={() => alert('Llamada entrante...')}
      >
        📞 Responder llamada
      </button>
    </div>
  );
}

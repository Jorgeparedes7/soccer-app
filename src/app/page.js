'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-800 to-green-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Soccer Stars Pack Opening</h1>
          <p className="text-xl text-green-100 mb-8">Open packs and discover legendary soccer players for your collection!</p>
          <Link 
            href="/packs" 
            className="inline-block bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Opening Packs
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">Simple to Play</h3>
            <p className="text-green-100">Just click and open packs to reveal your new players</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
            <div className="text-4xl mb-4">⚽</div>
            <h3 className="text-xl font-bold mb-2">Rare Players</h3>
            <p className="text-green-100">Discover legendary players from around the world</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Build Your Collection</h3>
            <p className="text-green-100">Collect and showcase your favorite players</p>
          </div>
        </div>
      </div>
    </main>
  );
}

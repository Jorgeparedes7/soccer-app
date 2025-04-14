'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/players/Homepage-background.jpg"
          alt="Stadium Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for better text visibility */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">FutBuildr</h1>
          <p className="text-xl text-green-100 mb-8">Open packs and discover legendary soccer players for your collection!</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/packs" 
              className="inline-block bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Opening Packs
            </Link>
            <Link 
              href="/team" 
              className="inline-block bg-blue-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg"
            >
              View My Team
            </Link>
          </div>
        </div>

        {/* Featured Players Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Featured Stars</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/players/lamine-yamal.jpg"
                  alt="Lamine Yamal"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Lamine Yamal</h3>
              <p className="text-green-100">Barcelona</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/players/messi.jpg"
                  alt="Lionel Messi"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Lionel Messi</h3>
              <p className="text-green-100">Inter Miami</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/players/ronaldo.jpg"
                  alt="Cristiano Ronaldo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Cristiano Ronaldo</h3>
              <p className="text-green-100">Al Nassr</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src="/players/de-bruyne.jpg"
                  alt="Kevin De Bruyne"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Kevin De Bruyne</h3>
              <p className="text-green-100">Manchester City</p>
            </div>
          </div>
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

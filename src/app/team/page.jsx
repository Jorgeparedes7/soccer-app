'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TeamPage() {
  const [team, setTeam] = useState([]);

  // Load team from localStorage on component mount
  useEffect(() => {
    const savedTeam = localStorage.getItem('myTeam');
    if (savedTeam) {
      setTeam(JSON.parse(savedTeam));
    }
  }, []);

  // Save team to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('myTeam', JSON.stringify(team));
  }, [team]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">My Team</h1>
        
        {team.length === 0 ? (
          <div className="text-center text-white text-xl">
            <p>You haven't acquired any players yet!</p>
            <p className="mt-4">Open some packs to start building your team.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((player) => (
              <div 
                key={player.id} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">{player.name}</h2>
                <div className="space-y-1">
                  <p className="text-sm">Position: {player.position}</p>
                  <p className="text-sm">Rating: {player.rating}</p>
                  <p className="text-sm">Club: {player.club}</p>
                  <p className="text-sm text-yellow-400">Rarity: {player.rarity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
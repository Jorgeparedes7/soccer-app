'use client';
import { useState } from 'react';
import openPack from '@/utils/openPack';

export default function PacksPage() {
  const [pack, setPack] = useState([]);

  const handleOpenPack = () => {
    const newPack = openPack();
    setPack(newPack);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Open a Pack</h1>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={handleOpenPack}
      >
        Open Pack
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {pack.map((player) => (
          <div key={player.id} className="bg-white p-4 shadow rounded text-center">
            <img src={player.image} alt={player.name} className="w-24 mx-auto" />
            <h2 className="font-bold mt-2">{player.name}</h2>
            <p>{player.position}</p>
            <p>Rating: {player.rating}</p>
            <p className="text-sm text-gray-500">{player.rarity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

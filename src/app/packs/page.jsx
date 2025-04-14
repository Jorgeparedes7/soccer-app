'use client';
import { useState, useEffect } from 'react';
import openPack from '@/utils/openPack';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PacksPage() {
  const [pack, setPack] = useState([]);
  const [team, setTeam] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState(new Set());
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [flippedCards, setFlippedCards] = useState(new Set());
  const router = useRouter();

  // Load team from localStorage on component mount
  useEffect(() => {
    const savedTeam = localStorage.getItem('myTeam');
    if (savedTeam) {
      setTeam(JSON.parse(savedTeam));
    }
  }, []);

  // Update player count in sidebar
  useEffect(() => {
    const playerCountElement = document.getElementById('playerCount');
    if (playerCountElement) {
      playerCountElement.textContent = team.length.toString();
    }
  }, [team]);

  // Hide success message after 3 seconds
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleOpenPack = () => {
    const newPack = openPack();
    setPack(newPack);
    setSelectedPlayers(new Set());
    setShowSuccess(false);
  };

  const togglePlayerSelection = (playerId) => {
    const newSelected = new Set(selectedPlayers);
    if (newSelected.has(playerId)) {
      newSelected.delete(playerId);
    } else {
      newSelected.add(playerId);
    }
    setSelectedPlayers(newSelected);
  };

  const addSelectedToTeam = () => {
    const selectedPlayersArray = pack.filter(player => selectedPlayers.has(player.id));
    if (selectedPlayersArray.length === 0) return;

    // Get the latest team from localStorage to ensure we have the most up-to-date data
    const currentTeam = JSON.parse(localStorage.getItem('myTeam') || '[]');
    
    // Create new team with selected players
    const updatedTeam = [...currentTeam, ...selectedPlayersArray];
    
    // Update localStorage first
    localStorage.setItem('myTeam', JSON.stringify(updatedTeam));
    
    // Then update state
    setTeam(updatedTeam);
    
    // Clear only selections, keep pack open
    setSelectedPlayers(new Set());
    
    // Show success message
    setSuccessMessage(`Added ${selectedPlayersArray.length} player${selectedPlayersArray.length > 1 ? 's' : ''} to your team!`);
    setShowSuccess(true);
  };

  const toggleCardFlip = (playerId) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(playerId)) {
      newFlipped.delete(playerId);
    } else {
      newFlipped.add(playerId);
    }
    setFlippedCards(newFlipped);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Open a Pack</h1>
        
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex justify-center gap-4">
            <button
              className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
              onClick={handleOpenPack}
            >
              Open New Pack
            </button>
            
            {pack.length > 0 && (
              <button
                className="bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
                onClick={addSelectedToTeam}
                disabled={selectedPlayers.size === 0}
              >
                Add Selected Players ({selectedPlayers.size})
              </button>
            )}
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
              {successMessage}
            </div>
          )}
        </div>

        {pack.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {pack.map((player, index) => (
              <div
                key={player.id}
                className={`relative cursor-pointer perspective-1000 w-[240px] mx-auto ${
                  selectedPlayers.has(player.id) ? 'border-4 border-blue-500' : ''
                }`}
                onClick={() => togglePlayerSelection(player.id)}
              >
                <div
                  className={`relative w-full transform-style-3d transition-transform duration-700 ease-in-out ${
                    flippedCards.has(player.id) ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of the card */}
                  <div className="relative backface-hidden">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative h-[336px] flex items-center justify-center">
                        <Image
                          src={player.image}
                          alt={player.name}
                          width={192}
                          height={288}
                          quality={100}
                          priority={index < 3}
                          className="object-contain w-auto h-full"
                        />
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4">
                          <h3 className="text-white text-xl font-bold">{player.name}</h3>
                          <p className="text-white/90 text-sm">{player.position}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                          <p className="text-white text-sm">{player.team}</p>
                          <p className="text-white/90 text-sm">{player.country}</p>
                        </div>
                      </div>
                    </div>
                    <button
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition-all duration-300 hover:scale-110"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCardFlip(player.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Back of the card */}
                  <div className="absolute top-0 left-0 w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{player.name}</h3>
                        <p className="text-gray-600 text-sm">{player.position}</p>
                      </div>
                      <button
                        className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardFlip(player.id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="space-y-2 text-base">
                      <div className="flex justify-between">
                        <span>Pace</span>
                        <span>{player.stats?.pace || '85'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shooting</span>
                        <span>{player.stats?.shooting || '82'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Passing</span>
                        <span>{player.stats?.passing || '80'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dribbling</span>
                        <span>{player.stats?.dribbling || '84'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Defense</span>
                        <span>{player.stats?.defense || '75'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Physical</span>
                        <span>{player.stats?.physical || '78'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

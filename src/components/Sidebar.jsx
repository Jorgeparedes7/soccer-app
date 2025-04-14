'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);

  // Update layout padding when sidebar state changes
  useEffect(() => {
    document.body.style.setProperty('--sidebar-width', isExpanded ? '16rem' : '5rem');
  }, [isExpanded]);

  const navItems = [
    { href: '/', icon: '🏠', label: 'Home', title: 'Return to homepage' },
    { href: '/packs', icon: '📦', label: 'Open Packs', title: 'Open new player packs' },
    { href: '/team', icon: '⚽', label: 'My Team', title: 'View your team' },
    { href: '/market', icon: '💰', label: 'Transfer Market', title: 'Coming Soon!' },
    { href: '/stats', icon: '📊', label: 'Statistics', title: 'Coming Soon!' },
  ];

  return (
    <>
      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full bg-gray-900 text-white shadow-xl transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-20'
        }`}
      >
        <div className={`p-6 ${isExpanded ? '' : 'px-4'}`}>
          <div className="mb-8">
            {isExpanded ? (
              <>
                <h1 className="text-2xl font-bold text-yellow-400">Soccer Stars</h1>
                <p className="text-sm text-gray-400 mt-2">Ultimate Team Builder</p>
              </>
            ) : (
              <div className="text-2xl font-bold text-yellow-400 text-center">⚽</div>
            )}
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                title={item.title}
                className={`block rounded-lg transition-all duration-300 ${
                  isExpanded ? 'px-4 py-3' : 'p-3'
                } ${
                  pathname === item.href
                    ? 'bg-yellow-500 text-black font-bold'
                    : 'hover:bg-white/10'
                }`}
              >
                <div className={`flex items-center ${isExpanded ? 'space-x-3' : 'justify-center'}`}>
                  <span className="text-xl">{item.icon}</span>
                  {isExpanded && <span>{item.label}</span>}
                </div>
              </Link>
            ))}
          </nav>

          <div className={`absolute bottom-6 ${isExpanded ? 'left-6 right-6' : 'left-3 right-3'}`}>
            <div className="border-t border-gray-700 pt-4">
              {isExpanded ? (
                <p className="text-sm text-gray-400">
                  Players: <span className="text-yellow-400 font-bold" id="playerCount">0</span>
                </p>
              ) : (
                <p className="text-center">
                  <span className="text-yellow-400 font-bold" id="playerCount">0</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button - Now in a separate fixed container */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative ${isExpanded ? 'left-64' : 'left-20'} -mr-3 bg-yellow-500 text-black w-6 h-12 rounded-r-lg flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-all duration-300`}
          title={isExpanded ? 'Collapse menu' : 'Expand menu'}
        >
          {isExpanded ? '◀' : '▶'}
        </button>
      </div>
    </>
  );
}
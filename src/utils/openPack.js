import players from '@/data/players';

export default function openPack(count = 3) {
  const pack = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * players.length);
    pack.push(players[randomIndex]);
  }
  return pack;
}

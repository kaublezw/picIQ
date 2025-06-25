import { getDb } from '../database.js';

// Placeholder for OpenAI-based Twitter scraping.
export async function fetchTwitterPicks() {
  const db = getDb();
  // Example data. Replace with real twitter scraping logic.
  const game = await db.get('SELECT id FROM games ORDER BY id DESC LIMIT 1');
  if (!game) return;
  const pick = {
    game_id: game.id,
    picker: 'ExampleUser',
    pick: 'Yankees'
  };
  await db.run(
    'INSERT INTO picks(game_id, picker, pick, result) VALUES (?,?,?,?)',
    [pick.game_id, pick.picker, pick.pick, 'pending']
  );
  return pick;
}

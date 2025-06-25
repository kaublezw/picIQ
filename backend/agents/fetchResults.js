import { getDb } from '../database.js';

// Placeholder for agent that fetches MLB results and updates picks.
export async function updateResults() {
  const db = getDb();
  const pick = await db.get('SELECT * FROM picks WHERE result = "pending" LIMIT 1');
  if (!pick) return;
  // Placeholder logic: randomly mark pick correct or incorrect
  const result = Math.random() > 0.5 ? 'win' : 'lose';
  await db.run('UPDATE picks SET result = ? WHERE id = ?', [result, pick.id]);
  return { ...pick, result };
}

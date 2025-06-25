import axios from 'axios';
import { getDb } from '../database.js';

// Placeholder function using OpenAI to parse schedule from the web.
export async function fetchSchedule() {
  // This should call an external API or scrape a website to get MLB schedule.
  // For now we just insert placeholder data.
  const db = getDb();
  const sampleGame = {
    date: new Date().toISOString().split('T')[0],
    home_team: 'Yankees',
    away_team: 'Red Sox'
  };
  await db.run(
    'INSERT INTO games(date, home_team, away_team) VALUES (?,?,?)',
    [sampleGame.date, sampleGame.home_team, sampleGame.away_team]
  );
  return sampleGame;
}

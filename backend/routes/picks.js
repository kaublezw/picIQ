import { Router } from 'express';
import { getDb } from '../database.js';
import { fetchTwitterPicks } from '../agents/fetchTwitterPicks.js';
import { updateResults } from '../agents/fetchResults.js';

const router = Router();

router.get('/', async (req, res) => {
  const db = getDb();
  const picks = await db.all(`SELECT p.*, g.date, g.home_team, g.away_team
                              FROM picks p JOIN games g ON p.game_id = g.id`);
  res.json(picks);
});

router.post('/update', async (req, res) => {
  const pick = await fetchTwitterPicks();
  res.json(pick);
});

router.post('/results', async (req, res) => {
  const result = await updateResults();
  res.json(result);
});

export default router;

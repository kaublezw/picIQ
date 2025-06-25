import { Router } from 'express';
import { getDb } from '../database.js';
import { fetchSchedule } from '../agents/fetchSchedule.js';

const router = Router();

router.get('/', async (req, res) => {
  const db = getDb();
  const games = await db.all('SELECT * FROM games');
  res.json(games);
});

router.post('/update', async (req, res) => {
  const game = await fetchSchedule();
  res.json(game);
});

export default router;

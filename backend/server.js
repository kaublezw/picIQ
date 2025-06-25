import express from 'express';
import { openDatabase } from './database.js';
import gamesRouter from './routes/games.js';
import picksRouter from './routes/picks.js';

const app = express();
app.use(express.json());

// database initialization
openDatabase();

app.use('/api/games', gamesRouter);
app.use('/api/picks', picksRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

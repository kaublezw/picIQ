import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db;

export async function openDatabase() {
  db = await open({
    filename: './data.db',
    driver: sqlite3.Database
  });
  await db.exec(`CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY,
      date TEXT,
      home_team TEXT,
      away_team TEXT
    );`);
  await db.exec(`CREATE TABLE IF NOT EXISTS picks (
      id INTEGER PRIMARY KEY,
      game_id INTEGER,
      picker TEXT,
      pick TEXT,
      result TEXT,
      FOREIGN KEY(game_id) REFERENCES games(id)
    );`);
}

export function getDb() {
  if (!db) throw new Error('Database not initialized');
  return db;
}

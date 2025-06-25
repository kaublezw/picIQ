# picIQ Backend

This Node.js backend provides API endpoints and placeholder agents for gathering
MLB game schedules, Twitter moneyline picks, and game results. Data is stored in
a local SQLite database.

## Setup

1. `npm install`
2. Set the `OPENAI_API_KEY` environment variable if you plan to integrate with
   OpenAI.
3. `npm start` to run the server on port 3001.

Endpoints include `/api/games` and `/api/picks` with update routes that trigger
placeholder agents.

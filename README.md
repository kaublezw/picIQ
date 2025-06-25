# picIQ

This project provides a simple example of a web application that tracks MLB
moneyline picks gathered from Twitter and compares them against game results.
It consists of a Node.js backend with placeholder "agents" and a React frontend.
The project is designed to be hosted on AWS but does not include deployment
scripts.

```
/ backend   - Express server, SQLite database and agents
/ frontend  - React user interface
```

Each agent file demonstrates where you might use OpenAI to parse the web or
Twitter. All network calls are stubbed with sample data.

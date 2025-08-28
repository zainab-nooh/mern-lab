// server.js
import dotenv from 'dotenv';

// 1) Load environment variables FIRST
dotenv.config();

// 2) Connect to the database (on import)
import './config/database.js';

// 3) Import the Express app
import app from './app-server.js';

const PORT = process.env.PORT || 3000;

// 4) Start the server
app.listen(PORT, () => {
  console.log(`Hoot API running on http://localhost:${PORT}`);
});
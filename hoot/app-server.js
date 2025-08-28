// app-server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import checkToken from './config/checkToken.js';
import ensureLoggedIn from './config/ensureLoggedIn.js';

import userRoutes from './routes/api/users.js';
import hootRoutes from './routes/api/hoots.js';

const app = express();

// __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());

// shared bucket for chained controllers (Goat pattern)
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

// Make req.user available (if a valid JWT is present)
app.use(checkToken);

// ---------- API Routes ----------
app.use('/api/users', userRoutes);

// Hoots API (login required for all hoot endpoints per spec)
app.use('/api/hoots', ensureLoggedIn, hootRoutes);

// ---------- Static Assets ----------
const staticDir = process.env.NODE_ENV === 'production' ? 'dist' : 'public';
const indexPath =
  process.env.NODE_ENV === 'production' ? 'dist/index.html' : 'index.html';

app.use(express.static(staticDir));

// ---------- SPA Fallback ----------
app.get(/.*/, (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  return res.sendFile(path.resolve(path.join(__dirname, indexPath)));
});

export default app;
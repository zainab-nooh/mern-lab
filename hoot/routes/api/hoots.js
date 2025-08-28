// routes/api/hoots.js
import express from 'express';
import { index, create } from '../../controllers/api/hoots.js';

const router = express.Router();

// GET /api/hoots -> list all hoots
router.get('/', index);

// POST /api/hoots -> create new hoot
router.post('/', create);

export default router;

import Hoot from '../../models/hoot.js';

// GET /api/hoots
async function index(req, res) {
  try {
    const hoots = await Hoot.find({})
      .sort({ createdAt: -1 })
      .populate('user', 'name'); // populate author
    res.status(200).json(hoots);
  } catch (e) {
    console.error('Error fetching hoots:', e);
    res.status(400).json({ msg: e.message });
  }
}
// POST /api/hoots
async function create(req, res) {
  try {
    if (!req.user) throw new Error('Not logged in');

    const hoot = await Hoot.create({
      text: req.body.text,
      user: req.user._id,
    });

    await hoot.populate('user', 'name'); // populate author name
    res.status(201).json(hoot);
  } catch (e) {
    console.error('Error creating hoot:', e);
    res.status(400).json({ msg: e.message });
  }
}

export default { index, create };
export { index, create };
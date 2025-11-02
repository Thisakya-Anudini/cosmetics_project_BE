import express from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

router.post('/contact', submitContact);  // POST route
router.get('/contact', getContacts);     // GET route (optional)

export default router;

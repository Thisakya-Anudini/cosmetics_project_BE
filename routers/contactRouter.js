import express from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);  // POST route
router.get('/', getContacts);     // GET route (optional)

export default router;

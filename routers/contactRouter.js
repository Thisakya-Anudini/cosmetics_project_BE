import express from 'express';
import { submitContact, getContacts, deleteMessage,markAsRead  } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);  // POST route
router.get('/', getContacts);     // GET route (optional)

router.delete("/delete/:id", deleteMessage);
router.put('/mark-as-read/:id', markAsRead);

export default router;

import express from 'express';
 
import { submitContact, getContacts } from '../controllers/contactController.js'; // Your controller

const router = express.Router();

// POST route to submit contact form
router.post('/contact', submitContact);
router.get('/contact', getContacts);


export default router;

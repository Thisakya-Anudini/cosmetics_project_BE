import Contact from "../models/contact.js";

export async function submitContact(req, res) {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ message: 'Message submitted successfully', contact });
  } catch (err) {
    console.error('Error submitting contact:', err);
    res.status(500).json({ message: 'Failed to submit message' });
  }
}

export async function getContacts(req, res) {
  try {
    const contact = await Contact.find().sort({ date: -1 });
    res.json(contact);  // Return all contacts sorted by date
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
}

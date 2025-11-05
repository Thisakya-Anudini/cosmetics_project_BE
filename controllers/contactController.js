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
export async function markAsRead(req, res) {
  const { id } = req.params; // Get message ID from URL parameters

  try {
    // Find the contact message by its ID
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "Message not found" });
    }

    // Update the 'isRead' field to true
    contact.isRead = true;

    // Save the updated contact message
    await contact.save();

    res.json({ message: "Message marked as read", contact });
  } catch (err) {
    console.error("Error marking message as read:", err);
    res.status(500).json({ message: "Failed to mark message as read" });
  }
}
export async function deleteMessage(req, res) {
  const { id } = req.params; // Get message ID from URL parameters

  try {
    // Find and delete the contact message by its ID
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    console.error("Error deleting message:", err);
    res.status(500).json({ message: "Failed to delete message" });
  }
}

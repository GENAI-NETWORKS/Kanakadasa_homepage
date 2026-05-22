const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'St. Kanakadasa Backend Running' });
});

// Contact Form Endpoint (Stub)
app.post('/api/contact', (req, res) => {
  const { name, phone, email, classInterested, message } = req.body;

  // Validate required fields
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and Phone are required fields.' });
  }

  // Log the submission to console (Simulating email/DB save)
  console.log('--- New Contact Inquiry ---');
  console.log(`Time: ${new Date().toISOString()}`);
  console.log(`Name: ${name}`);
  console.log(`Phone: ${phone}`);
  console.log(`Email: ${email || 'N/A'}`);
  console.log(`Class: ${classInterested || 'N/A'}`);
  console.log(`Message: ${message || 'N/A'}`);
  console.log('---------------------------');

  // TODO: Add nodemailer or EmailJS logic here for production

  // Send success response
  // Added a slight delay to simulate network request on frontend
  setTimeout(() => {
    res.status(200).json({ success: true, message: 'Inquiry received successfully.' });
  }, 1000);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

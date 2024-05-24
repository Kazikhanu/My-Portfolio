const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5173;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 998,
  secure: false,
  auth: {
    user: 'your_username',
    pass: 'your_password',
  },
});

app.post('/notify', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'no-reply@example.com',
    to: 'abok_003@mail.ru',
    subject: 'Notification from React App',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email', error });
    }
    res.status(200).send({ message: 'Email sent successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${5173}`);
});
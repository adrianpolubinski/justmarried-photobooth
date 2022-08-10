const Reservation = require('../models/reservation');
const nodemailer = require('nodemailer');

exports.homepage = async (req, res) => {
  try {
    res.render('pages/index');
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

exports.calendarTerm = async (req, res) => {
  try {
    const newReservation = new Reservation({
      Name: req.body.name,
      Date: req.body.date,
      Email: req.body.email,
      Phone: req.body.phone,
      Packet: req.body.package,
      Accepted: false
    });

    await newReservation.save();
    res.status(201).redirect('/');
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

exports.sendContactMessage = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    };

    let transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 587,
      secure: false,
      auth: {
        user: 'e7102dbeaacdcd',
        pass: 'c66ed2599ce002'
      }
    });

    await transporter.sendMail({
      from: '"Just Married Mailer" <foo@example.com>',
      to: data.email,
      subject: 'Potwierdzenie wysłania zgłoszenia ✔',
      text: `Twoja wiadomość została wysłana prawidłowo.\n` +
            `Czekaj na kontakt z naszej strony.\n\n` +
            `Wysłane dane:\n` +
            `Imie i nazwisko: ${data.name}\n` +
            `Numer telefonu: ${data.phone}\n` +
            `Email: ${data.email}\n` +
            `Temat: ${data.subject}\n` +
            `Treść wiadomości: ${data.message}`
    });

    await transporter.sendMail({
        from: `"${data.name}" <${data.email}>`,
        to: "justmarried.mailer@gmail.com",
        subject: data.subject,
        text: `Wiadomość otrzymana z systemu ContactUs.\n\n` +
              `Imie i nazwisko: ${data.name}\n` +
              `Numer telefonu: ${data.phone}\n` +
              `Email: ${data.email}\n\n` +
              `${data.subject}\n\n` +
              `${data.message}`
      });



    res.status(201).redirect('/');
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

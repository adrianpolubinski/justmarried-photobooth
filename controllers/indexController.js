const Reservation = require("../models/reservation");

exports.homepage = async (req, res) => {
  try {
    res.render("pages/index");
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
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
        Accepted: false,
      });

      await newReservation.save();
      res.status(201).redirect("/");

    } catch (error) {
      res.status(500).send({ message: error.message || "Error Occured" });
    }
  };

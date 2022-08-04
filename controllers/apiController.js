const { reset } = require("browser-sync");
const reservation = require("../models/reservation");
const Reservation = require("../models/reservation");

exports.reservations = async (req, res) => {
  try {
    let params = req.params.month + "-" + req.params.year;
    params = params.replaceAll("undefined", "");
    Reservation.find(
      { Date: { $regex: params, $options: "i" }, Accepted: false },
      (err, docs) => {
        const reservations = [];

        docs.forEach(element => {
            const reservation =  {
                date: element.Date,
            }
            reservations.push(reservation);
        });

        res.json(reservations);
      }
    );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

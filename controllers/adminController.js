const reservation = require('../models/reservation');

exports.admin = async (req, res) => {
  try {
    if (!req.session.admin) res.redirect('/signin');
    else {
      reservation.find({ Accepted: 'false' }, (err, docs) => {

        res.render('pages/admin', {
            reservations: docs,
        });
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const { action, id } = req.body;

    if (action === "Accept") {
      reservation.updateOne(
        { _id: id },
        { $set: { Accepted: true } },
        (err, doc) => {
          console.log("Aktualizacja pomyślna");
        }
      );
      res.redirect("/admin");
    } else {
      reservation.deleteOne({ _id: id }, (err, doc) => {
        console.log("Usunieto pomyślne");
      });
      res.redirect("/admin");
    }
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
};

exports.logout = async (req, res)=> {
    try {
        req.session = null
        res.redirect("/");
      } catch (error) {
        res.status(500).send({ message: error.message || "Error Occured" });
      }
}

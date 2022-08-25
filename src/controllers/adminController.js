const reservation = require('../models/reservation');

exports.admin = async (req, res) => {
  try {
    if (!req.session.admin) res.redirect('/signin');
    else {
      if (req.query.show == 'accepted') {
        reservation.find({ Accepted: true, Rejected: false }, (err, docs) => {
          res.render('pages/admin', {
            reservations: docs,
            show: 'accepted'
          });
        });
      } else if (req.query.show == 'rejected') {
        reservation.find({ Rejected: true }, (err, docs) => {
          res.render('pages/admin', {
            reservations: docs,
            show: 'rejected'
          });
        });
      } else {
        reservation.find({ Accepted: false, Rejected: false }, (err, docs) => {
          res.render('pages/admin', {
            reservations: docs,
            show: 'waiting'
          });
        });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

exports.accepted = async (req, res) => {
  try {
    if (!req.session.admin) res.redirect('/signin');
    else {
      res.redirect('/admin?show=accepted');
    }
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

exports.rejected = async (req, res) => {
  try {
    if (!req.session.admin) res.redirect('/signin');
    else {
      res.redirect('/admin?show=rejected');
    }
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    if (!req.session.admin) res.redirect('/signin');
    else {
      const { action, id } = req.body;
      if (action === 'Akceptuj') {
        reservation.updateOne({ _id: id }, { $set: { Accepted: true } }, () => {res.redirect('/admin');});

      } else if (action == 'Odrzuć') {
        reservation.updateOne({ _id: id }, { $set: { Rejected: true } },() => { res.redirect('/admin');});

      } else if (action == 'Anuluj Rezerwację') {
        reservation.updateOne({ _id: id }, { $set: { Accepted: false } },() => { res.redirect('/admin?show=accepted');});

      } else if (action == 'Przywróć') {
        reservation.updateOne({ _id: id }, { $set: { Accepted: false, Rejected: false } },() => { res.redirect('/admin?show=rejected');});

      } else if (action == 'Usuń') {
        reservation.deleteOne({ _id: id }, ()=> { res.redirect('/admin?show=rejected')});
      } else {
      res.redirect('/admin');
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

exports.logout = async (req, res) => {
  try {
    req.session = null;
    res.redirect('/');
  } catch (error) {
    res.status(500).send({ message: error.message || 'Error Occured' });
  }
};

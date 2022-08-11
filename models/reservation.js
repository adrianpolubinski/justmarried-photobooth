const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Packet: {
    type: String,
    required: true,
  },
  Accepted: {
    type: Boolean,
    required: true,
  },
  Rejected: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);

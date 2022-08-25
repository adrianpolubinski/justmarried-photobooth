const express = require("express");

const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/", adminController.admin);
router.get("/accepted", adminController.accepted);
router.get("/rejected", adminController.rejected);



router.post("/updateReservation", adminController.updateReservation);
router.get("/logout", adminController.logout);

router.all('*', (req, res) => {
    res.status(404).send('<h1>Error resource not found</h1>');
  });


module.exports = router;

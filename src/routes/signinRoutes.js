const express = require("express");
const router = express.Router();

const signinController = require("../controllers/signinController");

router.get("/", signinController.signin);
router.post("/check", signinController.check);

router.all('*', (req, res) => {
    res.status(404).send('<h1>Error resource not found</h1>');
  });


module.exports = router;

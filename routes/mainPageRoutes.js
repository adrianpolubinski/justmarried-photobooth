const express = require("express");
const router = express.Router();

const homePageController = require("../controllers/homePageController");
const apiController = require("../controllers/apiController");
// const store = require("../middleware/upload");

router.get("/", homePageController.homepage);

// router.get("/gallery", homeController.gallery);

// router.get("/signin", homeController.signin);

// router.get("/register", homeController.register);

router.get(
  "/api/reservations/:year?/:month?/:accept?",
  apiController.reservations
);

router.post("/calendarTerm", homePageController.calendarTerm);

// router.post("/mailer", homeController.mailer);

// router.post("/upload", store.array("images", 12), homeController.uploads);

router.all("*", (req, res) => {
  res.status(404).send("<h1>Error resource not found</h1>");
});

module.exports = router;

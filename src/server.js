require("dotenv").config();
require('./models/database');

const cookieSession = require('cookie-session')
const express = require("express");
const path = require("path");
const nunjucks = require('nunjucks');
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "njk")
app.use(express.static(path.join(__dirname, '/public/')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
    name: 'session',
    keys: ['super-secret-session-key'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

nunjucks.configure(path.resolve(__dirname,'public/views'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
});


const apiRoutes = require("./routes/apiRoutes");
const adminRoutes = require("./routes/adminRoutes");
const signinRoutes = require("./routes/signinRoutes");
const indexRoutes = require("./routes/indexRoutes");

app.use("/api", apiRoutes);
app.use("/admin", adminRoutes);
app.use("/signin", signinRoutes);
app.use("/", indexRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});

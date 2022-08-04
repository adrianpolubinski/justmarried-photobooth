require("dotenv").config();
require('./models/database');

const express = require("express");
let  nunjucks = require('nunjucks');
var bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "njk")
app.use(express.static(path.resolve(__dirname,'public/')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

nunjucks.configure(path.resolve(__dirname,'public/views'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
});



app.use("/", require("./routes/mainPageRoutes.js"));


// app.get("/",(req,res)=>{
//     res.render('pages/index.njk',{ name: "dsad2as"});
//     console.log("cos")
// });

// app.use("/admin", require("./routes/adminRoutes.js"));
// app.use("/signin", require("./routes/signinRoutes.js"));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});

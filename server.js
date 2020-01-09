const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({}));
app.use(express.json());

//let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
let MONGODB_URI = "mongodb://user1:password2@ds155086.mlab.com:55086/heroku_g2wfklq8"

mongoose.connect(MONGODB_URI || "mongodb://localhost/workout");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, ()=> console.log(`server is listening on ${PORT}`));

module.exports = app;
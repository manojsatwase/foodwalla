const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require("cookie-parser");

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// import routes
const userRoute = require('./routes/userVisitRoute');
const restaurantRoute = require('./routes/restaurantRoute');

app.use('/api/v1',userRoute);
app.use('/api/v1',restaurantRoute);

module.exports = app;


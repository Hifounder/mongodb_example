const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// express init
const app = express();
// default json
app.use(express.json());
// Set routes
require('./routes')(app);
// listen Port
app.listen(process.env.APP_PORT, () => {
    console.log(`http://localhost:${process.env.APP_PORT}`);
});

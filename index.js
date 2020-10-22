require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.PORT || 1337;
const dbUrl = process.env.MONGODB;
const routes = require('./routes');

const app = express();
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(dbUrl, mongooseOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('MongoDB berhasil tersambung!');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
  console.log('The magic happen on port :' + port);
});
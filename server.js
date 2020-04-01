const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;


if (process.env.MODE_ENV === 'production') {
app.use(express.static('client/build'));
}

app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/google-books-db',
    { useNewUrlParser: true}
)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


const express = require('express');
const cors = require('cors');
const app = express();
const config = require('../src/config');
const port = config.port;

// ***** settings *****
app.set('port', process.env.PORT || port);
app.set('json spaces', 2);
app.use(express.json()); // to recognize json format
app.use(express.urlencoded({extended: false})); // to understand data from a form
app.use(cors());

// ***** routes *****
app.use(require('./routes/location.route'));

// ***** starting the server *****
app.listen(app.get('port'), () => {
    console.log('Server started');
})

module.exports = app;
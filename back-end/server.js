const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

const todoApi = require('./routes/index');

const home = require('./routes/home');

app.set('view engine', 'ejs');

// for sending json with PostMan
app.use(express.json());

// for connect back-end api to fornt-end
app.use(cors());

// for static file
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/todoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use('/api/task', todoApi);

app.use('/', home);

app.listen(3000, () => console.log('App run in port 3000 ...'));
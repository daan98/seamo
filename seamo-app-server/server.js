const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mainRoute = require('./api/routes');

const app = express();
const port = process.env.PORT||3001;
const username = 'daan98';
const password = 'NXtafCRMM3UX4GV6';
const cluster = 'clusterpersonalproject';
const dbName = 'seamoApp';

app.use(cors());
app.use(express.json());

// CONNECTING TO MONGODB
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.s8dx1.mongodb.net/${dbName}?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR'));
db.once('open', () =>{ console.log('CONNECTED SUCCESSFULLY') });

// SETTING THE SERVER
app.use(mainRoute);
app.get('/', (req, res) => { res.send(`SERVER'S RUNNING. SEAMO APP`); });

app.use((req, res) => {
    res.status(404).json({
        message: 'SORRY, RESOURCE NOT FOUND',
    });
});

app.listen(port, () => { console.log(`SERVER LISTENING AT URL: http://localhost:${port}`); });
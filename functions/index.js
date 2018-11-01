const functions = require('firebase-functions');
const cors = require('cors');
const { json } = require('body-parser');
const express = require('express');


const app = express();

app.use(cors({ origin: true }));
app.use(json());


app.get('/api/tester', (req, res) => {res.send('You hit my endpoint!')})

exports.listings = functions.https.onRequest(app);
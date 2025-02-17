console.log('starting server')

import dotenv from 'dotenv';
dotenv.config();

console.log("after dotenv.config()", process.env.MONGODB_URI)

import express from 'express';
import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets

app.use(express.static(path.join(__dirname, '../client/dist')));


app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

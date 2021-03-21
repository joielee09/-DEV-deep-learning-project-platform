import express from 'express';
import ssr from './ssr';
import { PORT } from '../../utils';
import cors from 'cors';
import path from 'path';

require("@babel/polyfill");

const app = express();
console.log("app rendered");

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.static('bin'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use('/*', ssr);

// serverside rendering
// app.use('/*', ssr);
app.listen(PORT, () => {
  console.log(`Hello World listening on port ${PORT}!`);
});

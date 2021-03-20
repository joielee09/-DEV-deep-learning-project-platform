const cors = require('cors');
const express = require('express');
// const bodyParser = require('body-parser');

// import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import cookieParser from "cookie-parser";

require("@babel/polyfill");

import ssr from './ssr';
import { PORT } from '../../utils';

const app = express();

// app.use(helmet());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// serverside rendering
app.use('/*', ssr);
app.listen(PORT, () => {
  console.log(`Hello World listening on port ${PORT}!`);
});

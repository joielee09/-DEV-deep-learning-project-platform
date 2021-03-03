const cors = require('cors');
const express = require('express');
import ssr from './ssr';
require("@babel/polyfill");

const app = express();

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static('public'));
app.use('/uploads' ,express.static('uploads'));
app.use('/*', ssr);
app.listen(5001, () => {
  console.log('Hello World listening on port 5001!');
});

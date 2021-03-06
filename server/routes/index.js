const cors = require('cors');
const express = require('express');
import ssr from './ssr';
require("@babel/polyfill");
import { PORT } from '../../utils';

const app = express();

app.set('view engine', 'ejs');
app.use(cors());

app.use(express.static('public'));

// serverside rendering
app.use('/*', ssr);
app.listen(PORT, () => {
  console.log(`Hello World listening on port ${PORT}!`);
});

const cors = require('cors');
const express = require('express');
import ssr from './ssr';

const app = express();
app.set('view engine', 'ejs');
app.use(cors());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
app.use(express.static('public'));
app.use('/*', ssr);
app.listen(5001, () => {
  console.log('Hello World listening on port 5001!');
});

import express from 'express';
import ssr from './ssr';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/*', ssr);

app.listen(80, () => {
  console.log('Hello World listening on port 80!');
});

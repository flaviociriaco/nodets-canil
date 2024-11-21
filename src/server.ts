import express from 'express';
import dotenv from 'dotenv';
import mustacheExpress from 'mustache-express';
import path from 'path';
import mainRoutes from './routes';

dotenv.config();

const server = express();

server.engine('mustache', mustacheExpress());

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
// server.set('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res) => {
  res.render('pages/404');
});

server.listen(process.env.PORT);

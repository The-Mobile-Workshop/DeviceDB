import express, { Response } from 'express';
import db from './utils/db';
import router from './router';

db.createIfNotExist();

const port = process.env.PORT || 8080;

const server = express();

server.use(express.json());
server.use((_: any, res: Response, next: Function) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});
server.use(router);

server.listen(port, () => console.log(`Started server at 0.0.0.0:${port}`));

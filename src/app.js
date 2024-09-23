import express from 'express';
import { resolve } from 'node:path';
import routes from './routes';
import './database';
const routes = require('./routes');
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
  }
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;

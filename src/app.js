import express from 'express';
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
  }
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;

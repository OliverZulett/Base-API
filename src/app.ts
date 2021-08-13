import express from 'express';
import { HealthCheckRoute } from './routes/healthCheck.route';

class App {
  public app: express.Application;
  public healthCheckRoute = new HealthCheckRoute();

  constructor() {
    this.app = express();
    this.app.use(express.json()); // recibe json
    this.app.use(express.urlencoded({ extended: true })); // permite que los nested jsons
    this.healthCheckRoute.routes(this.app);
  }
}

export default new App().app;

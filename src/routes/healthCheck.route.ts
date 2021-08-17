import { HealthCheckController } from '../controllers/healthCheck/healthCheck.controller';
import * as express from 'express';

export class HealthCheckRoute {
  private readonly healthCheckController: HealthCheckController;

  constructor() {
    this.healthCheckController = new HealthCheckController();
  }

  public routes(app: express.Application): void {
    app.route('/healthCheck').get(this.healthCheckController.checkHealth);
  }
}

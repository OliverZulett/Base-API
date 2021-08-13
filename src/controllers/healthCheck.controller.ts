import { Request, NextFunction, Response } from 'express';
import { HealthCheckService } from '../services/healthCheck.service';

export class HealthCheckController {
  private healthCheckService: HealthCheckService;

  constructor() {
    this.healthCheckService = new HealthCheckService();
  }

  public checkHealth = (req: Request, res: Response, next: NextFunction) => {
    const apiStatus = this.healthCheckService.checkHealth();
    return res.status(200).send(apiStatus);
  };
}

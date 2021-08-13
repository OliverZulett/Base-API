export class HealthCheckService {
  constructor() {}
  public checkHealth() {
    return {
      status: `I'm Alive`,
    };
  }
}

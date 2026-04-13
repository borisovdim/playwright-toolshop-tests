import { ApiClient } from './client';
import { AuthService } from './services/auth.service';

export class Api {
  auth: AuthService;

  constructor(token?: string) {
    const client = new ApiClient(token);
    
    this.auth = new AuthService(client);
  }
}
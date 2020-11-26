import { ConnectionManager, Connection } from 'typeorm';
import { DB_CONFIG } from '../config';
import { User } from '../entities/User';

class DBManager {
  private connectionManager: ConnectionManager = new ConnectionManager();
  private DB_NAME?: string;

  constructor() {
    this.init();
  }

  async init() {
    this.connectionManager.create(DB_CONFIG);
    
    await this.connectionManager.get().connect();
    
  }

  getUserRepository() {
    return this.connectionManager.get().getRepository(User);
  }

}

export default new DBManager;
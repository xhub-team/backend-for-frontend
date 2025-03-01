export interface DatabaseConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  name: string;
}

export interface AppConfig {
  server: {
    port: number;
  };
  database: DatabaseConfig;
}

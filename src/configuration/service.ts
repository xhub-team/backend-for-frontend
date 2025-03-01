import * as yaml from 'yaml';
import * as fs from 'fs';
import { AppConfig } from './interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly config: AppConfig;

  constructor() {
    // Читаем конфигурацию из файла
    const file = fs.readFileSync('config.yaml', 'utf8');
    this.config = yaml.parse(file) as AppConfig;
  }

  // Метод для получения конфигурации
  getConfig(): AppConfig {
    return this.config;
  }

  // Метод для получения порта
  getPort(): number {
    return this.config.server.port;
  }
}

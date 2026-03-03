import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo(): object {
    return {
      name: 'SGRC API',
      version: '1.0.0',
      description: 'Sistema de Gestión de Resultados Colposcópicos',
      location: 'Consultorios de la Familia, Piñas, El Oro, Ecuador',
      stack: {
        runtime: 'Node.js',
        framework: 'NestJS 10',
        database: 'PostgreSQL 15',
        orm: 'TypeORM 0.3',
        language: 'TypeScript 5',
      },
      endpoints: {
        health: '/api/v1/health',
        docs: '/api/v1/docs',
      },
      status: 'operational',
      timestamp: new Date().toISOString(),
    };
  }
}

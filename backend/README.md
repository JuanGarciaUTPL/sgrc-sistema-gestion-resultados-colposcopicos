# SGRC Backend

Backend API del Sistema de Gestión de Resultados Colposcópicos.

## Stack

- NestJS 10.3
- TypeORM 0.3
- PostgreSQL 15
- TypeScript 5.3
- JWT + Passport
- Swagger/OpenAPI
- AWS SDK (S3)

## Instalación

```bash
npm install
```

## Base de datos

### Levantar PostgreSQL con Docker

```bash
# Desde la raíz del proyecto
docker-compose -f docker-compose.dev.yml up -d
```

### Verificar conexión

```bash
docker exec -it sgrc-postgres-dev psql -U sgrc_user -d sgrc_db -c "SELECT version();"
```

## Desarrollo

```bash
cp .env.example .env
# Editar .env con tus credenciales
npm run start:dev
```

**API URL:** http://localhost:3000/api/v1  
**Swagger Docs:** http://localhost:3000/api/v1/docs

## Migraciones

```bash
# Generar migración
npm run migration:generate -- src/migrations/NombreMigracion

# Ejecutar migraciones
npm run migration:run

# Revertir migración
npm run migration:revert
```

## Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Build

```bash
npm run build
npm run start:prod
```

## Estructura

```
src/
├── modules/        # Módulos de funcionalidad
│   ├── auth/
│   ├── users/
│   ├── patients/
│   ├── colposcopies/
│   ├── images/
│   ├── reports/
│   └── health/
├── common/        # Shared (guards, filters, interceptors)
├── config/        # Configuraciones (DB, JWT, S3)
└── migrations/    # Migraciones TypeORM
```

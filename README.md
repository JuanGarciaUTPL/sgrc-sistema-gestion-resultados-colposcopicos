# SGRC - Sistema de Gestión de Resultados Colposcópicos

## 📋 Descripción

Sistema web para la gestión integral de resultados de estudios colposcópicos en **Consultorios de la Familia**, Piñas, El Oro, Ecuador.

## 🎯 Objetivo

Digitalizar y optimizar el proceso de registro, visualización y seguimiento de estudios colposcópicos, mejorando la eficiencia operativa del consultorio y la experiencia del paciente.

## 🏗️ Arquitectura

**Monorepo con:**

```
sgrc/
├── frontend/          # React 18 + TypeScript + Vite
├── backend/           # NestJS 10 + TypeORM + PostgreSQL
└── docker-compose.yml # PostgreSQL + pgAdmin (desarrollo)
```

## 🚀 Stack Tecnológico

### Frontend
- **Framework:** React 18.2
- **Build Tool:** Vite 5
- **Lenguaje:** TypeScript 5.3
- **Estilos:** TailwindCSS 3.4
- **Estado:** React Query 5 (TanStack Query)
- **Formularios:** React Hook Form 7 + Zod
- **HTTP Client:** Axios

### Backend
- **Framework:** NestJS 10.3
- **ORM:** TypeORM 0.3
- **Base de Datos:** PostgreSQL 15
- **Autenticación:** JWT + Passport
- **Documentación:** Swagger/OpenAPI
- **Storage:** AWS S3 (imágenes colposcópicas)

### Infraestructura
- **Hosting:** Hostinger VPS (plan inicial)
- **Escalabilidad:** Preparado para AWS/Azure
- **CI/CD:** GitHub Actions (planificado)

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ y npm 9+
- Docker y Docker Compose
- Git

### Clonar repositorio

```bash
git clone https://github.com/JuanGarciaUTPL/sgrc-sistema-gestion-resultados-colposcopicos.git
cd sgrc-sistema-gestion-resultados-colposcopicos
```

### Levantar base de datos (Docker)

```bash
docker-compose -f docker-compose.dev.yml up -d
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Editar .env con tus credenciales
npm run start:dev
```

**URL:** http://localhost:3000/api/v1  
**Swagger:** http://localhost:3000/api/v1/docs

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

**URL:** http://localhost:5173

## 🗂️ Estructura del Proyecto

### Frontend (`/frontend`)

```
src/
├── features/           # Módulos por funcionalidad
│   ├── auth/          # Login, registro, recuperación
│   ├── patients/      # Gestión de pacientes
│   ├── colposcopies/  # Gestión de estudios
│   ├── reports/       # Generación de reportes
│   └── users/         # Admin de usuarios
├── shared/            # Componentes y utilidades compartidas
│   ├── components/    # UI components
│   ├── hooks/         # Custom hooks
│   ├── utils/         # Funciones auxiliares
│   └── types/         # TypeScript types
└── config/            # Configuraciones (axios, etc.)
```

### Backend (`/backend`)

```
src/
├── modules/           # Módulos de funcionalidad
│   ├── auth/          # Autenticación JWT
│   ├── users/         # Gestión de usuarios
│   ├── patients/      # Gestión de pacientes
│   ├── colposcopies/  # Gestión de estudios
│   ├── images/        # Upload a S3
│   └── reports/       # Generación de reportes
├── common/            # Shared (guards, filters, interceptors)
├── config/            # Configuraciones (DB, JWT, S3)
└── migrations/        # Migraciones TypeORM
```

## 🧪 Testing

```bash
# Backend - Unit tests
cd backend
npm run test

# Backend - E2E tests
npm run test:e2e

# Backend - Coverage
npm run test:cov

# Frontend - Unit tests
cd frontend
npm run test
```

## 📚 Documentación

- **API Documentation:** http://localhost:3000/api/v1/docs (Swagger UI)
- **Architecture Decision Records (ADRs):** `/docs/architecture/`
- **Implementation Plan:** `/docs/IMPLEMENTATION_PLAN.md`
- **AI Rules Document:** `/docs/AI_RULES_DOCUMENT.md`

## 🔐 Seguridad

- Autenticación JWT con refresh tokens
- Encriptación de contraseñas con bcrypt
- RBAC (Role-Based Access Control)
- Rate limiting en API
- Validación de inputs con class-validator
- Sanitización de datos
- CORS configurado
- HTTPS en producción

## 🚦 Estado del Proyecto

### ✅ Phase 0: Project Setup & Foundation (100%)
- ✅ Task 0.1: Estructura de monorepo
- ✅ Task 0.2: Frontend (React + Vite + TypeScript)
- ✅ Task 0.3: Backend (NestJS + TypeORM + PostgreSQL)

### 🔄 Phase 1: Database Schema & Core Models (En progreso)
- 🔄 Task 1.1: Entity User + Migration
- ⏳ Task 1.2: Entity Patient + Migration
- ⏳ Task 1.3: Entity Colposcopy + Migration

### ⏳ Próximas fases
- Phase 2: Authentication & Authorization
- Phase 3: Patient Management
- Phase 4: Colposcopy Management
- Phase 5: Image Upload & Visualization
- Phase 6: Reporting & Analytics
- Phase 7: Deployment & Production

## 👥 Equipo

- **Desarrollador Full-Stack:** Juan García
- **Cliente:** Consultorios de la Familia, Piñas, Ecuador

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Este es un proyecto privado para un cliente específico. No se aceptan contribuciones externas.

## 📞 Contacto

Para consultas sobre el proyecto: [GitHub Issues](https://github.com/JuanGarciaUTPL/sgrc-sistema-gestion-resultados-colposcopicos/issues)

---

**Desarrollado con ❤️ en Ecuador 🇪🇨**

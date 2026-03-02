# SGRC Frontend

Frontend del Sistema de Gestión de Resultados Colposcópicos.

## Stack

- React 18.2
- TypeScript 5.3
- Vite 5.0
- TailwindCSS 3.4
- React Query 5 (TanStack Query)
- React Hook Form 7
- Zod (validación)
- Axios

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:5173

## Build

```bash
npm run build
```

## Estructura

```
src/
├── features/         # Módulos por funcionalidad
│   ├── auth/
│   ├── patients/
│   ├── colposcopies/
│   ├── reports/
│   └── users/
├── shared/          # Compartido
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── types/
└── config/          # Configuraciones
```

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-primary-600 mb-4">
          SGRC — Sistema de Gestión de Resultados Colposcópicos
        </h1>
        
        <p className="text-gray-600 mb-6">
          Frontend inicializado correctamente con React 18 + TypeScript 5 + Vite 5 + TailwindCSS 3
        </p>
        
        <div className="bg-primary-50 border border-primary-200 rounded-md p-4 mb-4">
          <p className="text-sm text-primary-800">
            <strong>Stack:</strong> React Query 5, React Hook Form 7, Zod, Axios
          </p>
        </div>
        
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Contador de prueba: {count}
        </button>
        
        <p className="text-xs text-gray-500 mt-4 text-center">
          Próxima tarea: Task 0.3 — Inicializar Backend (NestJS + TypeORM)
        </p>
      </div>
    </div>
  );
}

export default App;

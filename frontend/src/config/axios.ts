import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Crear instancia de Axios con configuración base
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de Request: Inyectar JWT si existe
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Obtener token del localStorage (Task 1.4 lo gestionará con useAuth)
    const token = localStorage.getItem('sgrc_token');
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor de Response: Manejo global de errores
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Manejo de errores comunes
    if (error.response) {
      const status = error.response.status;
      
      switch (status) {
        case 401:
          // Token inválido o expirado - redirigir a login
          localStorage.removeItem('sgrc_token');
          window.location.href = '/login';
          break;
        
        case 403:
          // No autorizado - sin permisos para este recurso
          console.error('Acceso denegado: no tienes permisos para esta acción');
          break;
        
        case 404:
          console.error('Recurso no encontrado');
          break;
        
        case 500:
          console.error('Error interno del servidor');
          break;
        
        default:
          console.error(`Error HTTP ${status}:`, error.response.data);
      }
    } else if (error.request) {
      // Request enviado pero sin respuesta (timeout, red caída)
      console.error('Error de conexión: el servidor no responde');
    } else {
      // Error en la configuración del request
      console.error('Error en la configuración de la solicitud:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;

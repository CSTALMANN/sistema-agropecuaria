import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3000' });

// Interceptor para adicionar token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Tratamento global de erro
api.interceptors.response.use(
  res => res,
  erro => {
    const mensagem = erro.response?.data?.mensagem || 'Erro inesperado';
    return Promise.reject(new Error(mensagem));
  }
);

export default api;
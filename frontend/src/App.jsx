import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Clientes from './pages/Clientes';
import Produtos from './pages/Produtos';
import Pedidos from './pages/Pedidos';
import Login from './pages/Login';
import RotaProtegida from './components/RotaProtegida';

function Menu() {
  const navigate = useNavigate();

  function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    navigate('/login');
  }

  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', borderBottom: '1px solid #ccc' }}>
      <Link to="/clientes">Clientes</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/pedidos">Pedidos</Link>
      <button onClick={sair} style={{ marginLeft: 'auto' }}>Sair</button>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/clientes" replace />} />

        <Route path="/clientes" element={<RotaProtegida><><Menu /><Clientes /></></RotaProtegida>} />
        <Route path="/produtos" element={<RotaProtegida><><Menu /><Produtos /></></RotaProtegida>} />
        <Route path="/pedidos" element={<RotaProtegida><><Menu /><Pedidos /></></RotaProtegida>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
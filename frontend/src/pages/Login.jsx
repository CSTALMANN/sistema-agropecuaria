import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    api
      .post('/auth/login', { email, senha })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
        navigate('/clientes');
      })
      .catch((error) => {
        const msg = error.response?.data?.mensagem || 'Erro ao conectar com o servidor.';
        setErro(msg);
      });
  }

  return (
    <div style={{ maxWidth: '320px', margin: '80px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <label>Email</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label>Senha</label><br />
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required style={{ width: '100%', padding: '8px' }} />
        </div>

        {erro && <p style={{ color: 'red' }}>{erro}</p>}

        <button type="submit" style={{ width: '100%', padding: '10px' }}>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
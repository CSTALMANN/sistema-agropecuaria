import { useEffect, useState } from 'react';
import api from '../services/api';

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api.get('/pedidos')
      .then((response) => {
        setPedidos(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Pedidos</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.cliente_id}</td>
              <td>R$ {pedido.valor_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Pedidos;
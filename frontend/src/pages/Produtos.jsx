import { useEffect, useState } from 'react';
import api from '../services/api';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/produtos')
      .then((response) => {
        setProdutos(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Produtos</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
          </tr>
        </thead>

        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco}</td>
              <td>{produto.estoque}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Produtos;
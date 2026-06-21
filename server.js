const express = require('express');
const cors = require('cors');

const usuariosRoutes = require('./routes/usuarios');
const clientesRoutes = require('./routes/clientes');
const produtosRoutes = require('./routes/produtos');
const pedidosRoutes = require('./routes/pedidos');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/auth', usuariosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);
app.use('/pedidos', pedidosRoutes);

// Rota raiz
app.get('/', (req, res) => res.status(200).json({ mensagem: 'API funcionando!' }));

// Iniciar
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Servidor rodando na porta ${PORT}`));
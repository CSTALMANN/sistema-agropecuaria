const express = require('express');
const conexao = require('./db');

const app = express();

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.send('Servidor da Agropecuária funcionando!');
});

// Listar clientes
app.get('/clientes', (req, res) => {
    conexao.query(
        'SELECT * FROM clientes',
        (erro, resultados) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.json(resultados);
        }
    );
});

// Listar produtos
app.get('/produtos', (req, res) => {
    conexao.query(
        'SELECT * FROM produtos',
        (erro, resultados) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.json(resultados);
        }
    );
});

// Listar pedidos
app.get('/pedidos', (req, res) => {
    conexao.query(
        'SELECT * FROM pedidos',
        (erro, resultados) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.json(resultados);
        }
    );
});

// Cadastrar cliente
app.post('/clientes', (req, res) => {
    const { nome, cpf, telefone, email } = req.body;

    conexao.query(
        'INSERT INTO clientes (nome, cpf, telefone, email) VALUES (?, ?, ?, ?)',
        [nome, cpf, telefone, email],
        (erro, resultado) => {
            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Cliente cadastrado com sucesso!',
                id: resultado.insertId
            });
        }
    );
});
app.put('/clientes/:id', (req, res) => {

    const { id } = req.params;
    const { nome, cpf, telefone, email } = req.body;

    conexao.query(
        'UPDATE clientes SET nome=?, cpf=?, telefone=?, email=? WHERE id=?',
        [nome, cpf, telefone, email, id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Cliente atualizado com sucesso!'
            });
        }
    );

});
app.delete('/clientes/:id', (req, res) => {

    const { id } = req.params;

    conexao.query(
        'DELETE FROM clientes WHERE id=?',
        [id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Cliente excluído com sucesso!'
            });
        }
    );

});
app.post('/produtos', (req, res) => {

    const { nome, descricao, preco, estoque } = req.body;

    conexao.query(
        'INSERT INTO produtos (nome, descricao, preco, estoque) VALUES (?, ?, ?, ?)',
        [nome, descricao, preco, estoque],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Produto cadastrado com sucesso!',
                id: resultado.insertId
            });
        }
    );

});
app.put('/produtos/:id', (req, res) => {

    const { id } = req.params;
    const { nome, descricao, preco, estoque } = req.body;

    conexao.query(
        'UPDATE produtos SET nome=?, descricao=?, preco=?, estoque=? WHERE id=?',
        [nome, descricao, preco, estoque, id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Produto atualizado com sucesso!'
            });
        }
    );

});
app.delete('/produtos/:id', (req, res) => {

    const { id } = req.params;

    conexao.query(
        'DELETE FROM produtos WHERE id=?',
        [id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Produto excluído com sucesso!'
            });
        }
    );

});
app.post('/pedidos', (req, res) => {

    const { cliente_id, valor_total } = req.body;

    conexao.query(
        'INSERT INTO pedidos (cliente_id, valor_total) VALUES (?, ?)',
        [cliente_id, valor_total],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Pedido cadastrado com sucesso!',
                id: resultado.insertId
            });
        }
    );

});
app.put('/pedidos/:id', (req, res) => {

    const { id } = req.params;
    const { cliente_id, valor_total } = req.body;

    conexao.query(
        'UPDATE pedidos SET cliente_id=?, valor_total=? WHERE id=?',
        [cliente_id, valor_total, id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Pedido atualizado com sucesso!'
            });
        }
    );

});
app.delete('/pedidos/:id', (req, res) => {

    const { id } = req.params;

    conexao.query(
        'DELETE FROM pedidos WHERE id=?',
        [id],
        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.json({
                mensagem: 'Pedido excluído com sucesso!'
            });
        }
    );

});
// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
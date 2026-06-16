const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'agropecuaria'
});

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar:', erro.message);
        return;
    }

    console.log('Conectado ao MySQL!');
});

module.exports = conexao;
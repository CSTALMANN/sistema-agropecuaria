// Configuração e conexão com o banco de dados MySQL
const mysql = require('mysql');

// Dados da conexão
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha', // Alterar para sua senha local
  database: 'agropecuaria'
});

// Estabelecer conexão
conexao.connect((erro) => {
  if (erro) {
    console.error('❌ Falha na conexão com o banco de dados:', erro.message);
    return;
  }
  console.log('✅ Banco de dados conectado com sucesso');
});

module.exports = conexao;
const conexao = require('./db');

const sql = `
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE
)`;

conexao.query(sql, (erro) => {
    if (erro) {
        console.log('Erro ao criar tabela:', erro.message);
    } else {
        console.log('Tabela usuarios criada com sucesso!');
    }
    process.exit();
});
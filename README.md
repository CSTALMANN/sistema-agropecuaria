# Sistema Agropecuária - Módulo 5

Sistema administrativo completo desenvolvido com **Node.js, React e MySQL**, conforme requisitos do projeto.

## 📋 Funcionalidades
- ✅ Autenticação JWT (login/logout)
- ✅ Senha criptografada no banco
- ✅ Cadastro, edição e exclusão de usuários
- ✅ 3 CRUDs completos: **Clientes, Produtos e Pedidos**
- ✅ Validações: CPF, E-mail, Senha e campos obrigatórios
- ✅ Relacionamento entre tabelas
- ✅ Paginação nas listagens
- ✅ Código organizado e limpo

## 🚀 Tecnologias Utilizadas
- **Backend:** Node.js + Express
- **Frontend:** React + Vite + Context API
- **Banco de Dados:** MySQL

## ▶️ Como executar o projeto

### 1. Importar o banco de dados
- Abra o MySQL Workbench ou phpMyAdmin
- Execute o script `banco.sql` que está na raiz do projeto

### 2. Executar o Backend
```bash
# Na pasta raiz do projeto
npm install
node server.js
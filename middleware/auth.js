// Middleware de autenticação: verifica token JWT e protege rotas
const jwt = require('jsonwebtoken');

// Chave secreta para assinatura do token (manter em local seguro em produção)
const SECRET = 'sua_chave_secreta_aqui';

function autenticar(req, res, next) {
  // Extrai token do cabeçalho Authorization: "Bearer TOKEN_AQUI"
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ mensagem: 'Acesso negado. Token de autenticação é obrigatório.' });
  }

  try {
    // Verifica se o token é válido e não expirou
    const decodificado = jwt.verify(token, SECRET);
    // Adiciona o ID do usuário na requisição para uso posterior
    req.usuarioId = decodificado.id;
    next(); // Libera acesso para a próxima função
  } catch (erro) {
    return res.status(403).json({ mensagem: 'Token inválido, expirado ou formato incorreto.' });
  }
}

module.exports = { autenticar, SECRET };
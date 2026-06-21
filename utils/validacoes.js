// Funções reutilizáveis de validação de dados
// Cumpre requisitos: validação de e-mail, CPF, senha e campos obrigatórios

/**
 * Valida formato de e-mail usando regex
 * @param {string} email - E-mail a ser validado
 * @returns {boolean} True se formato for válido
 */
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Valida CPF: verifica tamanho, números repetidos e dígitos verificadores
 * @param {string} cpf - CPF com ou sem formatação
 * @returns {boolean} True se CPF for válido
 */
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove pontos, traços e outros caracteres
  
  // Verifica tamanho e se todos os números são iguais (CPF inválido)
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  // Cálculo do primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let digito1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  // Cálculo do segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  let digito2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  // Confere se os dígitos calculados são iguais aos informados
  return digito1 === parseInt(cpf[9]) && digito2 === parseInt(cpf[10]);
}

/**
 * Valida nível de senha: mínimo 6 caracteres, com letras e números
 * @param {string} senha - Senha informada
 * @returns {boolean} True se senha atender aos requisitos
 */
function validarSenha(senha) {
  return senha.length >= 6 && /[a-zA-Z]/.test(senha) && /\d/.test(senha);
}

/**
 * Verifica se todos os campos obrigatórios foram preenchidos
 * @param {object} dados - Objeto com os dados recebidos
 * @param {string[]} campos - Lista de campos que são obrigatórios
 * @returns {boolean} True se todos os campos estiverem preenchidos
 */
function validarCamposObrigatorios(dados, campos) {
  return campos.every(campo => dados[campo] && dados[campo].toString().trim() !== '');
}

module.exports = { validarEmail, validarCPF, validarSenha, validarCamposObrigatorios };
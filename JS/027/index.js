/*
Operação Ternária 
Sintaxe: (condição) ? valor_se_true : valor_se_false
*/
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";

// Fallback (Valor Padrão)
// Uso: Se 'corUsuario' não tiver valor (for falsy), assume "black".
const corUsuario = null;
const corPadrao = corUsuario || "black";

console.log(nivelUsuario, corPadrao);
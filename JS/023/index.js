/*
-----------------------------------------------------------------------
AVALIAÇÃO DE CURTO-CIRCUITO (Short-Circuit Evaluation)
-----------------------------------------------------------------------

&& (AND)
- Analisa da esquerda para a direita.
- Retorna o PRIMEIRO valor "Falsy" que encontrar (e para a execução).
- Se todos forem "Truthy", retorna o ÚLTIMO valor.

|| (OR)
- Analisa da esquerda para a direita.
- Retorna o PRIMEIRO valor "Truthy" que encontrar (e para a execução).
- Se todos forem "Falsy", retorna o ÚLTIMO valor.

-----------------------------------------------------------------------
VALORES FALSY (Considerados falsos em contextos booleanos)
-----------------------------------------------------------------------
1. false
2. 0 (zero)
3. '' ou "" ou `` (strings vazias)
4. null
5. undefined
6. NaN (Not a Number)

* Qualquer coisa diferente da lista acima é considerada "Truthy" (verdadeiro).
*/

function falaOi() {
    return "oi";
}

const vaiExecutar = "123434"; // String não vazia é Truthy

// Como 'vaiExecutar' é Truthy, o JS passa para o próximo. 
// Como é o último, ele executa a função e imprime o retorno: "oi"
console.log(vaiExecutar && falaOi()); 

// O JS procura o primeiro Truthy.
// null (Falsy) -> 0 (Falsy) -> false (Falsy) -> "1233" (TRUTHY!)
// Ele para no "1233" e retorna esse valor. O 'true' final nem é olhado.
console.log(null || 0 || false || "1233" || true);

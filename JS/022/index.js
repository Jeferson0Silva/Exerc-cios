/*
Operadores Lógicos
&& -> AND -> E   (Exige que tudo seja verdade)
|| -> OR  -> OU  (Exige que pelo menos um seja verdade)
!  -> NOT -> NÃO (Inverte o valor)
*/

const expressaoAnd = true && true && true; // Todas precisam ser true para retornar true

const expressaoOr = false || false || true; // Só precisa que uma seja true para retornar true

const expressaoNot = !true; // Inverte o valor: retorna false

console.log(expressaoOr);
console.log(expressaoNot);

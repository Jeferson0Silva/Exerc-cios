/*
OPERADORES DE COMPARAÇÃO

>   -> Maior que
>=  -> Maior ou igual a
<   -> Menor que
<=  -> Menor ou igual a
==  -> Igualdade "solta" (compara VALOR). 
=== -> Igualdade estrita (compara VALOR e TIPO). 
!=  -> Diferente "solto" (compara VALOR).
!== -> Diferente estrito (compara VALOR e TIPO).
*/

const numero = 10;
const texto = "10";

// O JS converte a string "10" para número 10 e diz que é igual.
console.log(numero == texto);  // true  (CUIDADO!)

// O JS vê que um é Number e o outro é String. Diferentes.
console.log(numero === texto); // false (SEGURO)

console.log(numero != texto);  // false (Para ele, são "iguais", então não são diferentes)
console.log(numero !== texto); // true  (São diferentes porque os tipos são diferentes)

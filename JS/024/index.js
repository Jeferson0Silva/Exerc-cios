const hora = 18; // Define a hora atual para teste

// 1. Verifica se está no intervalo da manhã (0 até 11)
// O operador && (E lógico) exige que ambas as condições sejam verdadeiras
if (hora >= 0 && hora <= 11) { 
    console.log("Bom dia");

// 2. Só é verificado se o 'if' anterior for falso
// Verifica o intervalo da tarde (12 até 17)
} else if (hora >= 12 && hora <= 17) { 
    console.log("Boa tarde");

// 3. Só é verificado se os anteriores falharem
// Verifica o intervalo da noite (18 até 23)
} else if (hora >= 18 && hora <= 23) { 
    console.log("Boa noite");

// 4. Tratamento de erro (Fallback)
// Captura qualquer valor que não seja uma hora válida (ex: string, números negativos ou maiores que 23)
} else { 
    console.log("Hora inválida");
}
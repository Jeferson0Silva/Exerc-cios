const data = new Date();

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês 0 - 11
console.log('Ano', data.getFullYear()); 
console.log('Hora', data.getHours()); 
console.log('Min', data.getMinutes()); 
console.log('Seg', data.getSeconds()); 
console.log('ms', data.getMilliseconds()); 
console.log('Dia semana', data.getDay()); 
console.log(data.toString());

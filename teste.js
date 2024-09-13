// Criação do array de notas
const notas = [7.5, 8.0, 6.5, 9.0, 7.0];

// Acesso aos elementos
console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

// Adiciona uma nova nota
notas.push(8.5);

// Remove a primeira nota
notas.shift();

// Exibe o array resultante
console.log("Array após alterações:", notas);

// Itera sobre o array e exibe cada nota
notas.forEach(nota => {
    console.log("Nota:", nota);
});

// Cálculo da média usando reduce
const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
console.log("Média das notas:", media);

// Filtro de notas maiores que 7
const notasAcimaDeSete = notas.filter(nota => nota > 7);
console.log("Notas acima de 7:", notasAcimaDeSete);

// Ordenação em ordem crescente
notas.sort((a, b) => a - b);
console.log("Notas em ordem crescente:", notas);

// Busca de elemento
const notaSeisPontoCinco = notas.includes(6.5);
console.log("A nota 6.5 está presente?", notaSeisPontoCinco);

// Encontra o índice da nota 8.0
const indiceNotaOito = notas.indexOf(8.0);
console.log("Índice da nota 8.0:", indiceNotaOito);
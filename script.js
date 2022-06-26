//Questão 01
// Crie um objeto que receba ao menos três propriedades sobre você.

let sobreMim = {
    nome: "Gustavo",
    idade: 17,
    altura: 1.70
}
console.log(sobreMim);

//Questão 02
// Adicione uma nova propriedade sem alterar seu objeto inicial.

sobreMim.corDosOlhos = "Castanhos médios";
console.log(sobreMim);

//Questão 03
// Remova uma propriedade desse objeto.

delete sobreMim.altura;
console.log(sobreMim);

//Questão 04
//Mostre no console todas as propriedades desse objeto.
console.log(sobreMim);

//Questão 05
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [{
    nome: "Paula",
    idade: 27,
    telefone: 40028922,
    amigos: ["Gustavo", "Luan", "Mari", "Isa"]
}, {
    nome: "Dandara",
    idade: 25,
    telefone: 40028922,
    amigos: ["Lenadro", "Sophia", "Marcos", "Alice"]
}, {
    nome: "Mari",
    idade: 23,
    telefone: 40028922,
    amigos: ["Luan", "Gustavo", "Romulo", "Alice"]
}, {
    nome: "Lívia",
    idade: 18,
    telefone: 40028922,
    amigos: ["Dalí", "Gustavo", "Alice", "Douglas"]
}, {
    nome: "Alice",
    idade: 18,
    telefone: 40028922,
    amigos: ["Lívia", "Dandara", "Gustavo", "Aline", "Amanda"]
}]
console.log(cadastro);

//Questão 06
// Mostre no console o nome de um amigo de cada lista.
for (let contador = 0; contador < cadastro.length; contador++) {
    console.log(cadastro[contador].amigos[contador]);
}
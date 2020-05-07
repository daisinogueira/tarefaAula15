
let alunos = ['Daisi', 'Fabio', 'Joao', 'Matheus', 'Denis'] // criando o vetor

alunos.push('Vinicius') //adicionando um valor ao vetor
console.log(`Os alunos sem ordem alfabética são: ${alunos}`) //mostrando o vetor sem ordem
alunos.sort() //colocando o vetor em ordem

console.log(`Os alunos em ordem alfabética são: ${alunos}`) //mostrando o vetor em ordem
console.log(`O vetor tem  ${alunos.length} posições`) //mostrando a quantidade de posição que o vetor tem
console.log(`O primeiro nome do vetor é ${alunos[0]}`) //mostrando o valor da posição 0

let pos = alunos.indexOf('Daisi') //encontrar a posição de determinado valor
if(pos == -1 ){
    console.log(`O nome não foi encontrado`)
}else {
    console.log(`O nome está na posição ${pos}`)
}

console.log(`Mostrar nomes com FOR`)
/*
for (let posi = 0; posi < alunos.length; pos++) { // mostrando vetor com for tradicional
    console.log(`A posição ${posi} tem o nome ${alunos[posi]}`)
}
*/

for(let posi in alunos) { //mostrando o vetor com for IN
    console.log(`A posição ${posi} tem o nome ${alunos[posi]}`)
}



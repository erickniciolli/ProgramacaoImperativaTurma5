let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"]

function maiuscula(array) {
    for (let i=0; i<(array.length); i++) {
    array[i] = array[i].toUpperCase();
}

return array;

}

console.log(filmes)
console.log(maiuscula(filmes));



let array1 = []

let array2 = ["a", "b", "c", "d", "e"]

let tamanho = array2.length

function adicionar () {
    for (let i=0; i<(tamanho); i++) {
        array1.push(array2.pop())
    }

    return array1

}

console.log(adicionar())



const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

let quantidade = asiaScores.length;

function comparar (x, y) {
    for (let i=0; i<quantidade; i++) {
    if (x[i] === y[i]) {console.log("É igual")}
    else console.log("É diferente")
    }
}

comparar(asiaScores, euroScores)



let ParticipanteA= [5, 8, 4, 9, 5]
let ParticipanteB= [8, 7, 8, 6, 8]
let ParticipanteC= [7, 5, 10, 8, 3]


function pontuacaoMedia (participante) {
    let soma=0
    for (let i=0; i<=4; i++) {
        soma=soma+participante[i]
    }
    return (soma/5)
}

console.log(pontuacaoMedia(ParticipanteA))

function pontuacaoMaior (participante) {
    return Math.max.apply(null, participante)
}

console.log(pontuacaoMaior(ParticipanteA))

function competicao (participante1, participante2, participante3) {
    let media1;
    let media2;
    let media3;
    return media1=pontuacaoMedia(participante1);
    media2=pontuacaoMedia(participante2);
    media3=pontuacaoMedia(participante3);
    console.log(Math.max(media1, media2, media3))
}

competicao(ParticipanteA, ParticipanteB, ParticipanteC)
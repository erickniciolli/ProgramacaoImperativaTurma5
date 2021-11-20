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






// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa 
// no console (você não precisa inverter o Array).


let cores = ["azul", "roxo", "amarelo", "verde"]

console.log(cores)

function imprimirVerso(inverter) {
    return inverter.reverse()
    }


console.log(imprimirVerso(cores))

// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

function inverter(array) {
    return array.reverse()
    }


console.log(inverter([1, 2, 3]))

// somarArray([1,2,3])                // 6
// somarArray([10, 3, 10, 4])     // 27
// somarArray([-5,100])             // 95

bonde1 = [1, 2, 3]
bonde2 = [10, 3, 10, 4]
bonde3 = [-5,100]

function somarArray (bonde) {
    return (bonde.slice(0, 1)+bonde.slice(1, 2)+bonde.slice(2, 3)+bonde.slice(3, 4)
}

console.log(somarArray(bonde1))


// Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.
// join().
// Importante: Não poderá utilizar o método Array.join() original.
// Por exemplo:
// join(["o","l","á"]) deve retornar a string "olá".
// join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".

function join (bonde) {
    return (bonde.slice(0, 1)+bonde.slice(1, 2)+bonde.slice(2, 3)+bonde.slice(3, 4)+bonde.slice(4, 5))
}

console.log(join(bonde1))

filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

function maiuscula (praAumentar) {
    return praAumentar.toUpperCase()
}

console.log(praAumentar(filmes))


filmes2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

let todosfilmes = function juntartudo (A, B) {
    RETURN A.push(B)
}

console.log(juntartudo(filmes1, filmes2))

todosfilmes.pop()

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

asiasScores==euroScores ? 'É igual' : 'Não é igual'


function loopDePares(numero) {
    for (var i=0; i<100; i++) {
        let x=(i+numero);
        if (x%2 == 0) {console.log(`O número ${x} é par`)}
        else {console.log(x)}
    }
        
}

loopDePares(5);

// Lidando com dois arrays
// Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como
// parâmetros e exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".
// Exemplo:
// arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar: 
// Eu sou 1 e eu sou o
// Eu sou 2 e eu sou l
// Eu sou 3 e eu sou á


function arrayHandler(array1, array2) {
    if (array1.length === array2.length) {
         for (i=0; i< array1.length; i++) {
                console.log(`Eu sou o ${array1[i]} e eu sou o ${array2[i]} `)
        }
    }

    else {console.log("Os tamanhos são diferentes")}

}


arrayHandler([1, 2, 3], ["o", "l", "á"]);

arrayHandler([1, 2, 3, 4], ["o", "l", "á"]); // tamanho de parâmetros é diferente
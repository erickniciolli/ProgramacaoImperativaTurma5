let alice = [23, 82, 46]
let bob = [45, 8, 32]

function encontrarGanhador (a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;
    for (let i=0; i<=3; i++) {
            if (a[i]>b[i]) {pontosPrimeiroParticipante++}
            else if (a[i]<b[i]) {pontosSegundoParticipante++}
            
    }
    if (pontosPrimeiroParticipante>pontosSegundoParticipante) {
        console.log("Alice ganhou")
    }
    else {console.log("Bob ganhou")}
        
}
    

function encontrarGanhador2 (a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;
    for (let i=0; i<=3; i++) {
            if (a[i]>b[i]) {pontosPrimeiroParticipante++}
            else if (a[i]<b[i]) {pontosSegundoParticipante++}
            
    }
    if (pontosPrimeiroParticipante>pontosSegundoParticipante) {
        return("Alice")
    }
    else {return("Bob")}
        
}
    
console.log("O ganhador é: " + encontrarGanhador2(alice, bob))


function digitalHouse (x, y) {
    if (amod)
}
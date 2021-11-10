// função adicionar

function adicionar(a, b){
    return a+b
};

// função subtrair

function subtrair(c, d){
    return c-d
};

// função multiplicar

function multiplicar(e, f){
    return e*f
};

// função dividir

function dividir(g, h){
    return g/h
};

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log("A soma é: ", adicionar(3,2));

console.log("A subtração é: ", subtrair(5,2));

console.log("A multiplicação é: ", multiplicar(3,2));

console.log("A divisão é: ", dividir(3,2));

console.log("A divisão por zero é: ", dividir(3,0));

//  quadrado do número

function quadradoDoNumero (i) {
    return i*i
};

console.log("O quadrado do número resulta", quadradoDoNumero(2))

// média

function mediaDeTresNumeros (j, k, l) {
    return adicionar(adicionar(j, k), l)/3
};

console.log("A média dos três números é: ", mediaDeTresNumeros(2, 3, 4))

// cálculo de porcentagem

function calculaPorcentagem (numeroInteiro, porcentagemDesejada) {
    return multiplicar(numeroInteiro, porcentagemDesejada)/100
};

console.log("A quantidade obtida através da porcentagem desejada é: ", calculaPorcentagem(100, 10))

// gerador de porcentagem

function geradorDePorcentagem (númeroTotal, númeroParcial) {
    return dividir(númeroParcial, númeroTotal)*100
};

console.log("A porcentagem entre os números é de", geradorDePorcentagem(50, 25), "%")
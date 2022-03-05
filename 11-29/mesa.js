let fizzBuzz = (x, y) => {
    for (let i = 0; i < 100; i++) {

        if (i%x==0 && i%y==0) {console.log(i + "=FizzBuzz")}
        else if (i%x==0) {console.log(i +"=Fizz")}
        else if (i%y==0) {console.log(i +"=Buzz")}
        else {console.log(i + "=Não múltiplo")}

    }
}

fizzBuzz(3,5);

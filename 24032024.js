//task 1 - create a funtion that shows "Hello world" in the console
function showHelloW() {
    console.log(`Hello world!`);
}

showHelloW();

//task 2 - create a funtion that receive a name as parameter and shows "Hello, (name)" in the console
function showName(name){
    console.log(`Hello, ${name}`);
}

showName("Bianca");

//task 3 - create a function that receive a number as parameter and return the double of this number
function doubleAmount(number){
    return number * 2;
}

let doubleNumber = doubleAmount(9);
console.log(doubleNumber);

//task 4 - create a function that receive three numbers as parameter and return their average
function numbersAverage(n1, n2, n3) {
    return(n1 + n2 + n3) / 3;
}

let averageNumbers = numbersAverage(4, 8, 9);
console.log(averageNumbers);

//task 5 - create a funtion that will receive 2 numbers as parameter and it will return the biggest of them
function biggestNumber(n01, n02){
    return n01 > n02 ? n01 : n02;
}

let findBiggest = biggestNumber(19, 5);
console.log(findBiggest);


//task 6 - create a funtion that will receive a number as parameter and return the multiplication of it by itself
function multiplicationNumber(number){
    return number * number;
}

let NumberByNumber = multiplicationNumber(5);
console.log(NumberByNumber);
// JavaScript Document

function printHello() {
	console.log('Hello');
}

printHello(); // 결과값 : Hello


// 효율적인 코드 (parameter)
function log(message) {
    console.log(message);
}

log('Hello') // 결과값 : Hello


// Parameters 예시코드
//함수안에서 적용된 사안이 밖에서도 적용된다.
function changeName(obj) {
	obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie)


// Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// Rest parameters (added in ES6)
function printAll(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
	
	// 좀더 간략한 방법
	for (const arg of args) {
        console.log(arg);
    }
	
}
printAll('dream', 'coding', 'ellie');


// 1. Function expression 

const print = function() { // anonymous function
    console.log('print');
};
print();

const printAgain = print;
printAgain();

//const sumAgain = sum;
//console.log(sumAgain(1, 3));


// Callback function using function expression	
function randomQuiz(answer, printYes, printNO) {
    if (answer === 'love you') {
        printYes();
    }
    else {
        printNO();
    }
}

//anonymous function
const printYes = function () {
	console.log('yes!');
};

// named function 
// better debugging in debugger`s stack traces
// recursions
const printNO = function print() {
	console.log('no!');
};
randomQuiz('wrong', printYes, printNO);
randomQuiz('love you', printYes, printNO);


// fun quiz time
// function calculate(command, a, b)
// command : (add, substract, divide, multiply, remainder)

function calculate(command, a, b) {
	if (command === 'add') {
			console.log(a+b);
		}

	else if (command === 'substract') {
			console.log(a-b);
		}

	else if (command === 'divide') {
			console.log(a/b);
		}

	else if (command === 'multiply') {
			console.log(a*b);
		}

	else {
			console.log(a%b);
		}
}

calculate('add', 4, 2);
calculate('substract', 4, 2);
calculate('divide', 4, 2);
calculate('multiply', 4, 2);
calculate('remainder', 4, 2);
# Arrow Function



### function

* fundamental building block in the program     **(프로그램을 구성하는 굉장히 기본적인 빌딩 블럭)**

* subprogram can be used multiple times   **(서브 프로그램이라고도 불리면 여러번 재사용 가능)**

* performs a task or calculates a value    **(한가지의 test나 값을 계산하기위해 있다.)**

* return을 별도로 지정하지 않을 경 우 return = undefined이 기본적으로 들어가 있지만

  생략이 가능하기 때문에 생략하는 경우가 대부분이다.

****

### 1. Function declaration

* function name(param1, param2)   { body --- return; }   **(함수의 구조)**

* one function === one thing      **(하나의 함수는 한가지의 일만 하도록 만들어야 한다.)**

* naming : doSomething, command, verb    **(함수는 동사형태로 이름을 지정해야한다.)**

* e.g. createCardAndPoint -> createCard, createPoint     **(많은 일을 하는 함수는 일을 세분화 하기)**
* function is object in JS   **(함수는 오브젝트의 일종이다)**

```javascript
function printHello() {
	console.log('Hello');
}
printHello(); //  결과 값 : Hello


// 좀 더 효율적인 코드 결과 값은 동일 (parameter)

function log(message) {
    console.log(message);
}
log('Hello') //결과 값 : Hello
```

****

### 2.  Parameters

* premitive parameters : passed by value
* object parameters : passed by refernce

```javascript
// 함수안에서 변경된 사안이 밖에서도 적용된다.
function changName(obj) {
	obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie)

```

****

### 3. Default parameters (added in ES6)

* parameter가 값이 지정되지 않았을 경우를 대비해 Default값을 지정해둘 수 있다.

```javascript
function showMessage(message, from = "unknown") {
	console.log(`${message} by ${from}`);
}
showMessage('Hi!');
```

****

### 4. Rest parameters (added in ES6)

* 배열 형태로 전달하는 parameters이다.
* ...을 parameters앞에 붙여 사용한다.

```javascript
function printAll(...args) {
    // length함수를 사용하여 데이터 개수를 세어 반복문을 돌린다.
	for (let i = 0; i < args.length; i ++) {
		console.log(args[i]);
	}
    
    // 좀 더 간략한 방법
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');
```

****

### 5.  Local scope

* block안에서 선언한 Local  variable는 밖에서 호출하거나 사용할 수 없다.
* global variable는 블럭안이든 밖이든 어디서든 호출 가능
* 위에 경우는 중첩으로 사용할 경우에도 똑같이 적용된다.

```javascript
let globaMessage = 'global'; // global variable
function printMessage() {
	console.log(message); //  Local variable
    console.log(globalMessage);
    function printAnother() {
        let childMessage = 'hello';
    }
    console.log(childMessage); // Local variable를 밖에서 호출하였기 때문에 에러가 발생한다.
}
printMessage();
```

****

### 6. Return a value

```javascript
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 결과 값 : 3
console.log(`sum : ${sum(1, 2)}`);
```

****

### 7. Early return, early exit

```javascript
// 안좋은 예시
function upfradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// 좋은 예시
function upfradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}
```

****



# First-class function

* function are treated like any other varible

* can be assiqned as a value to variable
* can be passed as an argument to other functions.
* can be returned by another function

****

### 1. Function expression 

* a function declaration can be called earlier then it is defiend.

​        (hoisted = function아 선언되기 전에 위에서 먼저 호출해도 에러가 나지 않는다. ) 

* a function expression is created when the execution reaches it. 

​        (hoisted가 없기 때문에 선언한뒤에 호출해야한다.)

```javascript
const print = function() { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
```

****

### 2. Callback function using function expression	

``` javascript
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    }
    else {
        printNO();
    }
}

const printYes = function () {
    console.log('yes!');
};

const printNo = function print() {
	console.log('no!');
};

randomQuiz('wrong', printYes, printNO);
randomQuiz('love you', printYes, printNO);
```



* **anonymous function**

``` javascript
const printYes = function () {
    console.log('yes!');
};
```



* **named function**
  * better debugging in debugger`s stack traces   (디버깅을할때 stack traces에 함수 이름이 나오게 하기위해)
  * recursions  함수안에서 자신스스로를 호출하기 위해서    

```javascript
const printNo = function print() {
	console.log('no!');
};
```

*****

### 3. Arrow function

* **always anonymous**  (Arrow function은 항상 anonymous function이다)

```javascript
// 일반적인 anonymous function
const simplePrint = function () {
	console.log('simplePrint!');
};

// Arrow function으로 함수를 만든경우
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;

// 코드길이가 길어질 경우
	// 블럭을 사용하면 되고 블럭을 사용할 경우 return값을 지정해줘야 한다.
const simpleMultiplay = (a,b) => {
    // do something more
    return a * b;
};

```

****

### 4.IIFE : Immediately Invoked function Expression

* 함수를 선언함과 동시에 실행시키는 것으로 따로 호출하지 않아도 선언과 동시에 실행된다.

```` javascript
// 사용법 예시
(function hello(){
    console.log('IIHE');
})();
````


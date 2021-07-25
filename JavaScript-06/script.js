// JavaScript Document

// 1. Array declaration (배열 선언)

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // undefined 정의되지 않은 index값을 호출해서
console.log(fruits[fruits.length - 1]); // list에 마지막 값이 출력된다.

// 3. Looping over an array
console.clear();

// for방식
for (let i = 0; i <fruits.length; i++) {
	console.log(fruits[i]);
}

// for of 방식
for (let fruit of fruits) {
	console.log(fruit);
}

// forEach
fruits.forEach(function(fruit, index) {
	console.log(fruit, index);
});

// forEach Arrow 방식
fruits.forEach((fruit, index) => console.log(fruit, index));


// addtion, deletion, copy

// push : add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop remove an item from theend
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
fruits.unshift('딸기', '복숭아');
console.log(fruits);

// shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// splice : remove an item by index position
console.clear();
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);

fruits.splice(1, 3);
console.log(fruits);

fruits.splice(1, 3, '사과', '수박');
console.log(fruits); // delete하고 add한 결과

// concat
const fruits2 = ['라임', '코코넛'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

// Searching

// indexof
console.log(fruits.indexof('사과'));
console.log(fruits.indexof('코코넛'));

//includes 
console.log(fruits.includes('라임'));
console.log(fruits.includes('비나나'));

// lastIndexof
console.log(fruits.listindexof('사과'));
console.log(fruits.listindexof('코코넛'));
// JavaScript Document

//Object


// 1. Literals and properties

const obj1 = {}; // object literal   syntax
const obj2 = new Object(); // object constructor syntax
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name : 'ellie', age : 4};
print(ellie);

ellie.hasJob = true; // 데이터를 동적으로 추가 가능 (사용추천 X)
console.log(ellie); // 데이터가 추가된 결과

delete ellie.hasJob; // 데이터를 삭제
console.log(ellie); // 삭제된 결과



// 2. Computed Properties (계산된 속성)

console.log(ellie.name);
console.log(ellie['name']); //computed properties 방식

ellie['hasJob'] = true; //computed properties 방식으로 데이터추가
console.log(ellie.hasJob);




// 3.Property value shorthand

const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = {name : 'dave', age : 4};
const person4 = new Person('ellie', 30);
console.log(person4);


// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}


// 4. in operator : property existence check
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); 
console.log(ellie.random);  //정의하지 않은 key를 호출한 결과


// 5. for..in  vs  for..of

// for (key in object)
console.clear();
for (key in ellie) {
    console.log(key);
}


// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}


## OBJECT 

### Objects

* one of the JavaScript`s data types.    **// object는 JavaScript의 datatype중 하나이다.**
* a collection of related data and/or functionality.   **// object는 관련테이터 또는 기능의 모음이다.**
* Nearly all objects in JavaScript are instances of Object    **// JavaScript의 거의 모든 object가 Object의 인자이다.**
* object = {key : value};    **// object는 key와  value로 구성되어 있다.**

****

### 1. Literals and properties

```javascript
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
```

****

### 2. Computed Properties (계산된 속성)

* key should be always string   **// key는 항상 문자형이어야 한다.**
* 실시간으로 원하는 key에  value을 받아오고 싶을때 사용

```javascript
console.log(ellie.name);
console.log(ellie['name']); //computed properties 방식

ellie['hasJob'] = true; //computed properties 방식으로 데이터추가
console.log(ellie.hasJob);
```

****

### 3. Property value shorthand

```javascript
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
```

****

### 4.  in operator : property existence check 

* 해당하는 key가 object안에 있는지 확인할 수 있다.
* **사용법 (key in object)**

````javascript
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); 
console.log(ellie.random);  //정의하지 않은 key를 호출한 결과
````

****

### 5. for..in  vs  for..of

* **for (key in object)**

```javascript
console.clear();
for (key in ellie) {
    console.log(key);
}
```

* **for (value of iterable)**

``` javascript
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}
```

****

### 7. Fun cloning

* Object.assign(dest,  [obj1, obj2, obj3...])

```javascript
const user = {name : 'ellie', age : '20'};
const user2 = user;
user2.name = 'coder'; // key값을 수정

console.log(user);
```

* **old way**

```javascript
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
```

* **another example**
  * value는 뒤에 들어오는 것으로 덮어 씌어진다.

```javascript
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
```

****





# Array

### 1.  Array declartion (배열 선언)

```javascript
const arr1 = new Array();
const arr2 = [1, 2];
```

****

### 2. Index poition

```javascript
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // undefined 정의되지 않은 index값을 호출해서
console.log(fruits[fruits.length - 1]); // list에 마지막 값이 출력된다.
```

****

### 3. Looping over an array

* for 

  ```javascript
  for (let i = 0; i <fruits.length; i++) {
  	console.log(fruits[i]);
  }
  ```

* for of 

  ```javascript
  for (let fruit of fruits) {
  	console.log(fruit);
  }
  ```

* forEach 

  ```javascript
  fruits.forEach(function(fruit, index) {
  	console.log(fruit, index);
  });
  ```

* forEach Arrow

  ```javascript
  fruits.forEach((fruit, index) => console.log(fruit, index));
  ```

****

### 4. addtion, deletion, copy

​	**- shift, unshift are slower than pop, push ** (pop, push에 비해 shift, unshift는 속도가 느리다.)

​    **- 위에 이유로 pop, push의 사용을 추천한다.** 

****

* push : add an item to the end

  ```javascript
  fruits.push('딸기', '복숭아');
  console.log(fruits); // add한 결과
  ```

* pop : remove an item from theend

  ```javascript
  fruits.pop();
  fruits.pop();
  console.log(fruits); // delete한 결과
  ```

*  unshift : add an item to the beginning(index의 앞에서부터 추가 된다.)

  ```javascript
  fruits.unshift('딸기', '복숭아');
  console.log(fruits); // add한 결과
  ```

* shift : remove an item from the beginning(index의 앞에서부터 삭제 된다.)

  ```javascript
  fruits.shift();
  fruits.shift();
  console.log(fruits); // delete한 결과
  ```

* splice : remove an item by index position

  * splice 사용법 .splice(지우기 시작할  index위치, 그 위치부터 지울개수, 지우고난 자리에 추가할 데이터)
  * splice는 지울개수를 지정하지 않으면 지우길 시작할 index위치를 제외한 모든 값을 지워버린다.

  ```javascript
  fruits.push('딸기', '복숭아', '레몬');
  console.log(fruits); // 지우기전에 값 추가한 결과
  
  fruits.splice(1, 3);
  console.log(fruits); // delete한 결과
  
  fruits.splice(1, 3, '사과', '수박');
  console.log(fruits); // delete하고 add한 결과
  ```

* combine two arrays
  * array와 다른 array를 연결할때 사용

 ```javascript
 console.clear();
 const fruits2 = ['라임', '코코넛'];
 const newfruits = fruits.concat(fruits2);
 console.log(newfruits)
 ```



****

### 5. Searching

* indexof

  * 내가 적은 값이 어는 index의 있는지 알려준다
  * 없는 값을 적으면 -1이 나온다.
  * 중복된 값이 있을 경우 앞에서 제일 가까운  값의 index값이 결과로 나온다.

  ```javascript
  console.log(fruits.indexof('사과'));
  console.log(fruits.indexof('코코넛'));
  ```

* includes 

  * 내가 적은 값이 array안에 있는지 없는지를 true false로 알려준다.

  ```javascript
  console.log(fruits.includes('라임'));
  console.log(fruits.includes('비나나'));
  ```

* lastIndexof

  * 중복된 값이 있을 경우 뒤에서 제일 가까운  값의 index값이 결과로 나온다.

  ```javascript
  console.log(fruits.listindexof('사과'));
  console.log(fruits.listindexof('코코넛'));
  ```

****
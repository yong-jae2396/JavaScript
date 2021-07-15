# Array APIs  총정리

### 1. join()

* join은 배열의 원소들을 연결하여 하나의 값으로 만드는 함수이다.

* 사용법 : Array.join(separator)

* () 안에 구분자로 문자나 특수문자를 집어넣어 사용할 수 있다.

  ```javascript
  // 예제
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', '); //구분자 사용
  console.log(result);// 결과 값
  ```

****

### 2. split()

* 문자열을 일정한 구분자로 잘라서 배열로 저장하는 함수이다.

* 사용법 : Array.split(separator, limit)

* separator 안에 구분자를 넣을 수 있고 값이 입력 되지 않으면 문자열 전체를 배열에 담아 리턴한다.

* limit는 분할할 개수이다.

  ```javascript
  // 예제
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',', 3); // 문자열을 분할
  console.log(result); // 결과 값
  ```

****

### 3. reverse()

* 배열을 거꾸로 뒤집는 함수이다.

* reverse함수는 원본 배열도 변환된다.

* 그래서 원본 배열을 유지한채 reverse를 하고 싶을 경우 원본배열을 복사해서 사용한다.

  ```javascript
  // 예제
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // 배열을 뒤집음
  console.log(result); // 결과 값
  ```

****

### 4. slice()

* 배열의 일부분을 잘라내어 새로운 배열로 리턴하기 위해서 사용하는 함수이다.

* 사용법 : array.slice(start-index, end-index)

* slice는 사용할때 원본배열은 변환되지 않는다.

  ```javascript
  // 예제
  console.clear(); 
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); //배열을 잘라냄
  console.log(result); // 결과 값
  ```

****

### 5. 
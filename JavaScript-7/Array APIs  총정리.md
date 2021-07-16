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

### 5. find()

* 배열에서 특정 값을 찾는 조건을 callback 함수를 통해 전달하여, 조건에 맞는 값 중 **첫번째 값을 리턴**합니다.

* 만약 만족하는 값이 없을 경우 undefined를 반환합니다.

* 사용법 : array.find(callback, element)

* callback에서 사용자가 특정 값을 찾을 조건을 정의

* 조건의 부합하는 값을 찾을 경우 이후의  배열값을 테스트하지 않는다.

* **참고 : callback 함수의 조건에 부합하는 배열의 첫번째 index값을 알아내기 위해서는 findindex()를 사용** 

  ```javascript
  // 예제
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  const result = students.find((student, index) => student.score === 90); // arrow방식
  console.log(result); // 결과 값
  ```

****

### 6. filter()

* filter() 함수는 특정 조건에 부합하는 배열의 **모든 값을 배열 형태로 리턴**합니다.

* calllback 함수에 정의한 조건에 부합하는 배열의 보든 값을 새로운 배열의 형태로 리턴한다.

* 조건에 부합하는 배열 값이 없을 경우 빈 배열을 리턴한다.

  ```javascript
  // 예제
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  const result = students.filter((students) => students.enrolled); 
  console.log(result); // 결과 값
  ```

****

### 7. map()

*  callbackFunction을 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.

* 사용법 : array.map((currentValue , index, array) => {return 요소});

  ```javascript
  //예제
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  const result = students.map((students) => students.score); // 맵핑
  console.log(result); // 결과 값
  ```

****


### 조건문 && 반복문

****

### 1. 조건문(IF)

* **예제**

```javascript
// 숫자를 입력받아 변수에 할당
let theNumber = Number(prompt("pick a number"));

// 지정된 인수가 NaN일 경우에만 true를 반환하는 함수이다 
// (!로 인하여입력받은 값이 NaN이 아닐 경우에만 실행 )
if(!Number.isNaN(theNumber)) {
    console.log("your number is the square root of" + theNumber * theNumber );
}
```

* **else** : if처럼 조건이 true일 경우에 실행되는 코드뿐만 아니라 반대의 경우도 처리하는 코드가 있다.

  * **예제** (else를 통하여 두 개의 대체 실행 경로를 구분해서 작성한다)

    ```javascript
    let theNumber = Number(prompt("pick a number"));
    if(!Number.isNaN(theNumber)) {
        console.log("your number is the square root of" + theNumber * theNumber );
    } else {
     	console.log("Hey. Why didn`t you give me number?")   ;
    }
    ```

  * **예제** (두개 이상의 경로를 선택해야 한다면 if/else 쌍을 다음과 같이 연결 할 수 있다.)

    ```javascript
    let theNumber = Number(prompt("pick a number"));
    if (num < 10) {
        console.log("Small");
    } else if (num < 100) {
        console.log("Medium");
    } else {
        console.log("Large");
    }
    ```

****

### 2. while && do 반복문

* **while 반복문**

  * while의 구조는 while다음에 괄호와 함께 표현식이 오고  그다음에 구문이 뒤따르는 형식으로 if와 유사

  * whlie는 표현식이 불리언으로 변환되며 그값이 true인 동안에 반복문이 계속 실행되는 구조이다.

  * **예제** 

  ```javascript
  let number = 0; // 변수 선언
  while (number <= 12) {
      console.log(number); // 변수의 들어있는 값을 출력
      number = number + 2; // 변수의 2를 값을 더한다
  }
  ```

  ****

* **do 반복문**

  * do 반복문은 언제나 적어도 한 번 이상 본문을 실행하며, 최초 실행 이후에 중지 여부를 확인한다.
  * 위에 이유 때문에 본문이 실행을 확인하는 부분은 반복문의 본문 다음에 나타난다.

  ```javascript
  let yourName;
  do{
      yourName = prompt("who are you?");
  } while (!youName);
  console.log(yourName);
  ```

****

### 3. for 반복문

* 예제

  ```javascript
  //     변수선언         조건           바인딩
  for(let number = 0; number <= 12; number = number + 2) {
      console.log(number); // 출력
  }
  ```

****

###  4. switch

* switch로 시작한 블록에는 여러 개의 case레이블을 포함할 수 있다.

* 예제 

  ```javascript
  switch (prompt()) {
      case "rainy":
          console.log("Remember to bring an umbrella.")
          break;
      case "sunny":
          console.log("Dress lightly");
          break;
      case "cloudy":
          console.log("Go outside");
          break;
      default:
          console.log("unknown weather type!");
          break;
  }
  ```

****

### # 반복문 공통정리

* 반복을 효율적으로 하기 위해서 코드조각을 여러 번 실행하는 방법을 사용해야 하고 이러한 

  제어흐름을 반복문이라한다.

* 반복문은 대부분 진행상황을 추적학기 위한 카운터(숫자를 세는)  바인딩을 만든다.
* 조건을 false로 설정하는 것이 아닌 break문과  contiue문을 사용할 수 있다.

****

### # 예제 문제

* 문제 : 삼각형이 1~7까지 늘어나면서 한줄마다 출력되게 하시오.

* 답 코드

  ```javascript
  for(let number = "#"; number.length <=8 ; number+="#")
  	console.log(number)
  ```

****


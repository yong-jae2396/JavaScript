## Callback

### JavaScript is synchronous. 

* synchronous는 정해진 순서에 맞게 코드가 실행 되는 것
* asynchronous는 정해진 코드들이 언제 실행될지 모르는 것

* Execute the code block by orger agter hoisting

* hoisting : var, function declaration (var나 function declaration이 함수 선언들이 제일 위로 올라가는 것)

  ```javascript
  console.log('1');
  
  // 비동기적인 (asynchronous)
  // 받은 인자를 일정한 시간이 지나고 실행시키게 하는 함수
  setTimeout(() => { 
      console.log('2');
  }, 1000)
  
  console.log('3');
  ```

****

### 1. Synchronous callback

````javascript
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));
````

****

### 2. Asynchronous callback

```javascript
function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}
printWithDelay(() => console.log('async callback'), 2000);
```

****


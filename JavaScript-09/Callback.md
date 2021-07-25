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

### 3. Callback Hell example

```javascript
// class 생성
class UserStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
            // id, password 검사
			if(
			(id === 'ellie' && password === 'dream') ||
			(id === 'coder' && password === 'academy')
			) {
				onSuccess(id);
			} 
            // id 와 password가 적합하지 않을경우 실행
            else {
				onError(new Error('not found'));
			}
		}, 2000);
	}
	// id를 검사하여 사용자의 역할을 출력
	getRoles(user, onSuccess, onError) {
		setTimeout(() =>{
			if (user === 'ellie') {
				onSuccess({name: 'ellie', role: 'admin'});
			}
			
			else{
				onError(new Error('no access'));
			}
		}, 1000);
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
	id, 
	password, 
	user => {
		userStorage.getRoles(
			user, 
			(userWithRole) => {
				alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
		},
			error => {
				console.log(error);
			}
		);
	}, 
	error => {console.log(error)}
);
```






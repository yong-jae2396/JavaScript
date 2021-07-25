## Promise

* **Promise is a JavaScript object for asynchronous operation **

  (자바스크립트에 내장되어있는 오브젝트)

* **state : pending  >>> fulfilled or rejected **

  (수행중일 경우 pending상태이고  수행이 완료되면 fulfilled상태가 되고 만약 문제가 생기면 rejected상태)

* **Producer vs Consumer** ()

* **doing some heavy work (network, read files)**

  (과중한 작업을 수행하는 경우에는 Promise를 만들어서 Asynchronous적으로 처리하는 것이 좋다.)

* **when new Promise is created, the executor  runs automatically.**

  (새로운 Promise가 만들어질때는 우리가 전달한 executor함수가 바로 실행이된다 자동적으로)

****

### 1. Producer

```javascript
const promise = new Promise((resolve, reject) => {
	//doing some heavy work (network, read files)
	console.log('doing something...');
	setTimeout(() => {
		//resolve('ellie');
		reject(new Error('no network'));
	}, 2000);
});
```

****

### 2. Consumers : then, catch, finally

```javascript
promise //
	.then((value) => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
	})
	// 성공이나 실패와 상관없이 어떤기능을 마지막으로 실행하고 싶을때 사용
	.finally(() => {
		console.log('finally');
	});
```

****

### 3. Promise chaining

```javascript
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
	.then(num => num * 2)
	.then(num => num * 3)
	.then(num => {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num-1), 1000);
		});
	})
	.then(num => console.log(num))
```

****

### 4. Error Handling

* catch를 통하여 Error를 통제할 수 있다.

```javascript
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('닭'), 1000);
	});

const getEgg = hen =>
	new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
	});

const cook = egg =>
	 new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
	});

getHen() //
	.then(getEgg)
	.catch(error => {
		return '빵';
	})
	.then(cook)
	.then(console.log);
```

****

### 5. Callback to Promise

* 저번 강의에서 작성한 callback hell코드를 Promise를 사용하여 가독성 있게 변환시킨 것

```javascript
class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// id, password 검사
				if (	
					(id === 'ellie' && password === 'dream') ||
					(id === 'coder' && password === 'academy')
				) {
					resolve(id);
				} 
				// id 와 password가 적합하지 않을경우 실행
				else {
					reject(new Error('not found'));
				}
			}, 2000);	
		}) ;		
	}
	
	// id를 검사하여 사용자의 역할을 출력
	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() =>{
				if (user === 'ellie') {
					resolve({name: 'ellie', role: 'admin'});
				}
				else{
					reject(new Error('no access'));
				}
			}, 1000);
		});
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

//Promise 버전
userStorage
	.loginUser(id, password)
	.then(userStorage.getRoles)
	.then(user => alert(`Hello ${user.name}, you have a ${user.role}, role`))
	.catch(console.log);
```

